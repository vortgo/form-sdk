import {Select} from './select';
import {DEFAULT, EMPTY} from "../error-labels";

export class StateSelect extends Select {

    isValid() {
        let value = this.model.get(this.full_name);

        if (value.length === 0) {
            this.setValidationErrorToBox(EMPTY);
        }

        if (/^[a-zA-Z]{2}$/.test(value)) {
            return true;
        }

        this.setValidationErrorToBox(DEFAULT);
        return false;
    }
}
