import {Input} from './input';

export class CardPIN extends Input {
    isValid() {
        return /^\d{4}$/.test(this.model.get(this.full_name));
    }
}
