import {Input} from './input';
import romanize from 'node-romanization';


export class Address extends Input {
    isValid() {
        return /^(?!\s).{2,32}/.test(this.model.get(this.full_name));
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
