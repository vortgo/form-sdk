import {Input} from './input';

export class CardCVV extends Input {
    isValid() {

        if (this.model.get('card_brand_name') === 'AMERICAN EXPRESS') {
            return /^\d{4}$/.test(this.model.get(this.full_name));
        } else if (this.model.get('card_brand_name').length > 0) {
            return /^\d{3}$/.test(this.model.get(this.full_name));
        } else {
            return /^\d{3,4}$/.test(this.model.get(this.full_name));
        }

    }
}
