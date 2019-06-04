import {Input} from './input';
import romanize from 'node-romanization';
import {DEFAULT, EMPTY} from "../error-labels";


export class Address extends Input {
    isValid() {
        let value = this.model.get(this.full_name);

        if (value.length === 0) {
            this.setValidationErrorToBox(EMPTY);
            return false;
        }

        if(/^(?!\s).{2,32}/.test(value)){
            return true;
        }

        this.setValidationErrorToBox(DEFAULT);
        return false;
    }


    constructor(...args) {
        super(...args);
        this.interceptor.interceptEvent('input', event => {
            if (event.target.value) {
                event.target.value = romanize(event.target.value);
                event.target.selectionStart = event.target.selectionEnd = event.target.value.length;
            }

            return false;

        })
    }
}
