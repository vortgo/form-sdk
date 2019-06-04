import {Input} from './input';
import {DEFAULT, EMPTY} from "../error-labels";

export class CardPIN extends Input {
    isValid() {

        let value = this.model.get(this.full_name);

        if (value.length === 0) {
            this.setValidationErrorToBox(EMPTY);
            return false;
        }

        if(/^\d{4}$/.test(value)){
            return true;
        }

        this.setValidationErrorToBox(DEFAULT);
        return false;
    }
}
