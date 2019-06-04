import {Input} from './input';
import romanize from 'node-romanization';
import {DEFAULT, EMPTY, FIELD_FORMAT} from "../error-labels";

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

        if (full_name.length === 0) {
            this.setValidationErrorToBox(EMPTY);
            return false;
        }

        if (/^\s+$/.test(full_name) || !(/\s+/.test(full_name)) ) {
            this.setValidationErrorToBox(DEFAULT);
            return false;
        }

        if( /^([\u00c0-\u01ffa-zA-Zа-яА-ЯёЁіІїЇєЄ'\s-]){3,32}$/.test(full_name)){
            return true;
        }

        this.setValidationErrorToBox(FIELD_FORMAT);
        return false;
    }
}
