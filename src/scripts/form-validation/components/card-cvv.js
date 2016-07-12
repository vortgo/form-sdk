import {Input} from './input';

export class CardCVV extends Input {
    isValid() {
        return /^\d{3,4}$/.test(this.model.get(this.full_name));
    }
}
