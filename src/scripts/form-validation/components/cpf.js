import {Input} from './input';
import {DEFAULT} from "../error-labels";

export class Cpf extends Input {
    isValid() {
        let value = this.model.get(this.full_name);

        if( /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/.test(value)){
            return true;
        }

        this.setValidationErrorToBox(DEFAULT);
        return false;
    }
}
