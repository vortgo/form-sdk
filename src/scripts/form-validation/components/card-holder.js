import {Input} from './input';
import romanize from 'node-romanization';
import {DEFAULT} from "../error-labels";

export class CardHolder extends Input {

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

    isValid() {
        let full_name = this.model.get(this.full_name);

        if (/^\s+$/.test(full_name)) {
            this.setValidationErrorToBox(DEFAULT);
            return false;
        }

        if (/^([\u00c0-\u01ffa-zA-Zа-яА-ЯёЁіІїЇєЄ'\s-]){3,32}$/.test(full_name)) {
            return true;
        }

        this.setValidationErrorToBox(DEFAULT);
        return false;
    }

    getValue() {
        if (!this.element.value.includes(" ")) {
            return this.element.value + " " + this.element.value
        }
        return this.element.value
    }

}
