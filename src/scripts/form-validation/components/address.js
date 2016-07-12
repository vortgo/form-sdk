import {Input} from './input';

export class Address extends Input {
    isValid() {
        return /^(?!\s).{2,32}/.test(this.model.get(this.full_name));
    }
}
