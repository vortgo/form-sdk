import toArray from 'lodash/toArray';
import isEqual from 'lodash/isEqual';

/**
 * Класс, отвечающий за валидацию и форматирование пользовательского ввода
 */
export class Validation {

  /**
   * Конструктор класса
   * @param  {RegExp} pattern регулярное выражение, которое будет использовано для проверки вводимого значения на валидность
   * @param  {obj} opts    Необязательный параметр, который может содержать свойства mask вида '##.##.####', где # - это любое число и delimiter (разделитель). Если вы указываете маску, то укажите также разделитель.
   * Например, для номера телефона правильно будет задать:
   *   opts = {
   *     mask: '+### ## ### ## ##',
   *     delimiter: '\\s' // пробел
   *   }
   * Если в шаблоне несколько разделителей, то правильно задать так:
   *   delimiter = '[\\s\\.]'; // пробелы и точки
   *
   * @return {obj}         Экземпляр класса Validation
   */
  constructor(pattern = new RegExp(), opts = {mask: ''}) {
    this.pattern = pattern;
    this.opts = opts;
  }

  /**
   * Функция сравнивает старое и новое значения поля ввода и возвращает то, которое удовлетворяет регулярное выражение, заданное в конструкторе парамером pattern
   * Если пользователь ввел валидное значение, то возвращается новое, иначе - старое
   * Если в конструкторе класса задана маска (opts.mask), то функция форматирует значение в поле ввода по маске, перемещая курсор, следуя правилу:
   *   если за курсором находится разделитель (пробел, точка, черта дроби), то он добавится автоматически и курсор передвинется так, чтобы пользователь смог продолжать ввод
   *
   * @param  {string} old_value   старое значение поля ввода
   * @param  {string} new_value   новое значение поля ввода
   * @param  {obj} selection      экземпляр класса для работы с курсором. В данном случае это класс CaretController
   * @return {string}             валидное значение для поля ввода
   */
  getValidValue(old_value, new_value, selection) {

    if (isEqual(old_value, new_value)) {
      return old_value;
    }

    let unmasked_value = this.opts.mask
      ? this.unmask(new_value)
      : new_value;

    let isValid = this.pattern.test(unmasked_value),
        valid_value, newSelection;
    if (isValid) {

      valid_value = this.__getValidValue(unmasked_value, selection);
      newSelection = this.__getSelection(unmasked_value, valid_value, selection);

      selection.moveBy(newSelection);
      return valid_value;
    }

    selection.rollback();

    return old_value;
  }

  /**
   * возвращает либо отформатированное значение, либо неотформатированное, в зависимости от того, задана ли в консрукторе маска
   * @param  {string} unmasked_value неотформатированное значение
   * @param  {obj} selection      экземпляр класса для работы с курсором. В данном случае это класс CaretController
   * @return {[type]}             валидное значение
   */
  __getValidValue(unmasked_value, selection) {
    return this.opts.mask
      ? this.mask(unmasked_value, selection).value
      : unmasked_value;
  }

  __getSelection(unmasked_value, valid_value, selection) {
    return this.opts.mask
      ? this.mask(unmasked_value, selection).selection
      : this.__getNewSelection(valid_value, selection);
  }

  /**
   * Функция форматирует значение value по маске, которая задана в конструкторе класса параметром opts.mask
   * @param  {string} value     значение, которое нужно отформатировать
   * @param  {obj} selection    экземпляр класса для работы с выделением (положением курсора). В данном случае - CaretController
   * @return {obj}              объект, содержащий новое отформатированное значение и новое выделение (положение курсора)
   */
  mask(value, selection) {
    let digits = toArray(value.replace(/\D/, '')),
        formatted_value = this.opts.mask;

    digits.forEach((char) => {
      formatted_value = formatted_value.replace(/#/, char);
    });
    let newSelection = this.__getNewSelection(formatted_value, selection),
        len = formatted_value.indexOf('#') !== -1
          ? formatted_value.indexOf('#')
          : formatted_value.length;

    if (this.isBackward(selection) && this.isPrevCharNotUserSign(formatted_value.indexOf('#'))) {
      len--;
    }

    let isFirstSpecialChar = this.opts.mask[0] !== '#';

    let isToDeleteFirstChar = this.isBackward(selection)
      && isFirstSpecialChar
      && len === 1;

    let isSelectionResetted = selection.currentSelection === 0
      && selection.previousSelection === 0;

    if (isSelectionResetted || isToDeleteFirstChar) {
      len--;
    }

    return {
      value: formatted_value.substr(0, len),
      selection: newSelection
    };
  }

  /**
   * Анализирует старое и новое положение курсора для того, чтобы определить, вводит ли пользователь новое значение или же удаляет старое, а также анализирует символ, который стоит слева/справа от курсора. От этого зависит новое положение курсора, которое функция возвращает. Если справа от курсора стоит разделитель (delimiter) из маски, то курсор "перепрыгивает" его.
   * @param  {string} value     значение, для которого нужно получить новое выделение (положение курсора)
   * @param  {obj} selection    экземпляр класса для работы с выделением (положением курсора). В данном случае - CaretController
   * @return {integer}          новое положение курсора
   */
  __getNewSelection(value, selection) {
    let curSel = selection.currentSelection;
    let newSelection = 0;
    let isNextCharNotUserSign = this.isNextCharNotUserSign(curSel),
        isPrevCharNotUserSign = this.isPrevCharNotUserSign(curSel);

    if (this.isForward(selection)) {
      if (isNextCharNotUserSign || isPrevCharNotUserSign) {
        newSelection = 1;
      }
    }
    if (this.isBackward(selection)) {
      if (isPrevCharNotUserSign) {
        newSelection = -1;
      }
    }

    return newSelection;
  }

  /**
   * Анализирует положение курсора и проверяет, переместился ли курсор врпаво (напр., пользователь осуществил ввод символа)
   * @param  {obj}  selection     экземпляр класса для работы с выделением (положением курсора). В данном случае - CaretController
   * @return {Boolean}            возвращает true, если курсор переместился вправо
   */
  isForward(selection) {
    return selection.currentSelection > selection.previousSelection;
  }

  /**
   * Функция обратная функции isForward. Проверяет, переместился ли курсор влево.
   * @param  {[type]}  selection экземпляр класса для работы с выделением (положением курсора). В данном случае - CaretController
   * @return {Boolean}           возвращает true, если курсор переместился влево
   */
  isBackward(selection) {
    return selection.currentSelection < selection.previousSelection;
  }

  /**
   * Проверяет, является ли символ справа от курсора пользовательским или же это часть шаблона
   * @param  {obj}  selection экземпляр класса для работы с выделением (положением курсора). В данном случае - CaretController
   * @return {Boolean}           возвращает true, если символ НЕ явяется цифрой
   */
  isNextCharNotUserSign(selection) {
    return this.opts.mask
      ? this.opts.mask[selection] !== '#'
      : false;
  }

  /**
   * Проверяет, является ли символ слева от курсора пользовательским или же это часть шаблона
   * @param  {obj}  selection экземпляр класса для работы с выделением (положением курсора). В данном случае - CaretController
   * @return {Boolean}           возвращает true, если символ НЕ явяется цифрой
   */
  isPrevCharNotUserSign(selection) {
    return this.opts.mask
      ? this.opts.mask[selection - 1] !== '#'
      : false;
  }

  /**
   * "Снимает маску", а именно удаляет разделитель, заданный в конструкторе параметром opts.delimiter
   * @param  {string} value значение, с которого нужно "снять маску"
   * @return {string}       новое отформатированное значение без маски
   */
  unmask(value) {
    let delimiter = this.opts.delimiter || '';
    return value.replace(new RegExp(delimiter, 'g'), '');
  }
}
