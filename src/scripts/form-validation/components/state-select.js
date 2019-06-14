import {Select} from './select';
import {DEFAULT} from "../error-labels";

export class StateSelect extends Select {

    isValid() {
        let value = this.model.get(this.full_name);

        if (/^[a-zA-Z]{2}$/.test(value)) {
            return true;
        }

        this.setValidationErrorToBox(DEFAULT);
        return false;
    }
}
