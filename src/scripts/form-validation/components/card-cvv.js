import {Input} from './input';
import {DEFAULT, EMPTY, SIZE} from "../error-labels";

export class CardCVV extends Input {
    isValid() {
        let maxLength = 3;
        let minLength = 3;

        let cardBrandName = this.model.get('card_brand_name');
        if (cardBrandName && cardBrandName === 'AMERICAN EXPRESS') {
            maxLength = 4;
        } else {
            maxLength = 3
        }

        let value = this.model.get(this.full_name);
        this.element.setAttribute('maxlength', maxLength);

        if (value.length === 0) {
            this.setValidationErrorToBox(EMPTY);
            return false;
        }

        if (value.length < minLength || value.length > maxLength) {
            this.setValidationErrorToBox(SIZE);
            return false;
        }

        let regex = new RegExp("^\\d{" + maxLength + "}$");

        if (regex.test(value)) {
            return true;
        }

        this.setValidationErrorToBox(DEFAULT);
        return false;
    }
}
