import {Input} from './input';

export class CardCVV extends Input {
    isValid() {
        // fix for amex card cvv
        let cardBrandName = this.model.get('card_brand_name');
        if (cardBrandName && cardBrandName === 'AMERICAN EXPRESS') {
            this.element.setAttribute('maxlength', 4);
            return /^\d{4}$/.test(this.model.get(this.full_name));
        } else {
            this.element.setAttribute('maxlength', 3);
            return /^\d{3}$/.test(this.model.get(this.full_name));
        }
    }
}
