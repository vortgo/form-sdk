import {Input} from './input';
import romanize from 'node-romanization';
import {DEFAULT} from "../error-labels";


export class City extends Input {
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

    isValid() {

        let value = this.model.get(this.full_name);

        if(/^(?!\s).{2,32}/.test(value)){
            return true;
        }

        this.setValidationErrorToBox(DEFAULT);
        return false;
    }
}
