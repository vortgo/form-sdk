import {Select} from './select';

export class StateSelect extends Select {

    isValid() {
        return /^[a-zA-Z]{2}$/.test(this.model.get(this.full_name));
    }
}
