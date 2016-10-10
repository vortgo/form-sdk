import {CaretController} from './CaretController';
import {Validation} from './Validation';

/**
 * Пример вызова
 * var interceptor = new Interceptor(element);
 * interceptor
 *   .pattern(/\d{0,2}[.,><\/?бюБЮ]?\d{0,2}[.,><\/?бюБЮ]?\d{0,4}/)
 *   .mask('##.##.####')
 *   .intercept(function (value) {
 *     return value.replace(/[.,<>бюБЮ/?]/g, '.');
 *   });
 */
export class Interceptor {

  constructor(element) {

    this.element = element;
    this.validation = new Validation();

    this.element.addEventListener('paste', this.__onPaste.bind(this), false);
    this.element.addEventListener('input', this.__onInput.bind(this));
    this.element.addEventListener('keydown', this.__onKeydown.bind(this));
    this.old_value = '';
    this.old_selection = 0;
  }

  intercept(fn) {
    this.interceptFn = fn;
    return this;
  }

  pattern(pattern) {
    this.validation.pattern = pattern;
    return this;
  }

  mask(mask, delimiter = '') {
    this.validation.opts = {mask, delimiter};
    return this;
  }

  // Проверяет пользовательский ввод
  // Если введены валидные данные, то отображаит их и перемещает курсор
  // в противном случае ничего не происходит
  __validate(new_value, selection, offset) {

    let caretController = new CaretController(this.old_selection, selection, offset);

    var valid_value = this.validation.getValidValue(this.old_value, new_value, caretController);

    this.element.value = typeof this.interceptFn === 'function'
      ? this.interceptFn(valid_value)
      : valid_value;

    // Смещаем курсор, если значение валидно и оставляем на месте, если не валидно
    let position = caretController.currentSelection;

    if (typeof(this.element.setSelectionRange) == 'function') {
        this.element.setSelectionRange(position, position);
    }
    this.old_selection = position;
  }

  __onInput(event) {
    let new_value = this.element.value,
        selection = this.element.selectionStart,
        offset = 1;

    this.__validate(new_value, selection, offset);
    event.preventDefault();
  }

  __onPaste(event) {
    let text = event.clipboardData.getData('text'),
        value_before_caret = this.element.value.substr(0, this.element.selectionStart),
        value_after_caret = this.element.value.substr(this.element.selectionEnd),
        new_value = value_before_caret + text + value_after_caret,
        selection = this.element.selectionStart + text.length,
        offset = text.length;

    this.__validate(new_value, selection, offset);
    event.preventDefault();
  }

  // Предоставляет возможность перехватывать пользовательские события
  // Например, может понадобиться поведение для событий blur и focus
  interceptEvent(eventType, handler) {
    this.element.addEventListener(eventType, handler);
    return this;
  }

  // Нужно для считывания позиции курсора при перемещении по полю ввода с помощью кнопок-стрелок
  __onKeydown() {
    this.old_selection = this.element.selectionStart;
    this.old_value = this.element.value;
  }

}
