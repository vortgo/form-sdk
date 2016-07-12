import {Input} from './input';

export class ZipCode extends Input {
    isValid() {
        return /^\d{5}$/.test(this.model.get(this.full_name));
    }
}
