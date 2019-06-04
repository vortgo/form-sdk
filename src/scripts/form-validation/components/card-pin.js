import {Input} from './input';
import {DEFAULT} from "../error-labels";

export class CardPIN extends Input {
    isValid() {

        let value = this.model.get(this.full_name);

        if(/^\d{4}$/.test(value)){
            return true;
        }

        this.setValidationErrorToBox(DEFAULT);
        return false;
    }
}
