import {Input} from './input';
import romanize from 'node-romanization';

export class CardHolder extends Input {
  isValid() {
    let full_name = this.model.get(this.full_name);
    if (!(/\s+/.test(full_name))) {
      return false;
    }
    return /^([\u00c0-\u01ffa-zA-Zа-яА-ЯёЁіІїЇєЄ'\s-]){3,32}$/.test(full_name);
  }

  constructor(...args) {
    super(...args);
    this.interceptor.interceptEvent('input', event => {
      if (event.target.value) {
        event.target.value = romanize(event.target.value).toUpperCase();
        event.target.selectionStart = event.target.selectionEnd = event.target.value.length;
      }

      return false;

    })
  }
}
