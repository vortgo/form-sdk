import {Input} from './input';
import {DEFAULT, EMPTY, FIELD_FORMAT, SIZE} from "../error-labels";

export class ZipCode extends Input {
    isValid() {
        let minLength = 5;
        let value = this.model.get(this.full_name);

        if (value.length === 0) {
            this.setValidationErrorToBox(EMPTY);
        }

        if (value.length < minLength) {
            this.setValidationErrorToBox(SIZE);
        }

        if( /^\d{5,9}$/.test(value)){
            return true;
        }

        this.setValidationErrorToBox(FIELD_FORMAT);
        return false;
    }
}
