import {Input} from './input';

export class City extends Input {
    isValid() {
        return /^(?!\s).{2,32}/.test(this.model.get(this.full_name));
    }
}
