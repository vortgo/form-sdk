var validate = require('fast-luhn');
import {Input} from './input';
import {card_patterns} from './../card-patterns';
import {formatCardNumber} from '../utils/formatCardNumber';


export class CardNumber extends Input {

    // (card_number: String) => Array[Object]
    getCardTypes(card_number) {
        return card_patterns.filter(card => {
            if (card.partial_regular_expression) {
                return card.partial_regular_expression.test(card_number);
            }
        });
    }

    // (card_number: String) => String
    getCardNumber(card_number) {
        return formatCardNumber(card_number);
    }

    setCardTypeClassName(card_type) {

        if (card_type) {
            for (let i = 0; i <= this.parent.classList.length; i++) {
                if (this.parent.classList[i] !== 'card_number' && this.parent.classList[i] !== 'valid' && this.parent.classList[i] !== 'dirty' && this.parent.classList[i] !== 'error' && this.parent.classList[i] !== card_type.class_name) {
                    this.parent.classList.remove(this.parent.classList[i])
                }
            }
            this.parent.classList.add(card_type.class_name);
        } else {
            for (let i = 0; i <= this.parent.classList.length; i++) {
                if (this.parent.classList[i] !== 'card_number' && this.parent.classList[i] !== 'valid' && this.parent.classList[i] !== 'dirty' && this.parent.classList[i] !== 'error') {
                    this.parent.classList.remove(this.parent.classList[i])
                }
            }


        }
    }

    static setCardTypeClassNameAtCards(card_type) {
        let card_brands_div = document.getElementsByClassName('card-brands')[0];
        if (card_brands_div !== undefined) {
            if (card_type) {
                for (let i = 0; i <= card_brands_div.classList.length; i++) {
                    if (card_brands_div.classList[i] !== card_type.class_name && card_brands_div.classList[i] !== 'card-brands') {
                        card_brands_div.classList.remove(card_brands_div.classList[i])
                    }
                }
                card_brands_div.classList.add(card_type.class_name + '_active');
            } else {
                for (let i = 0; i <= card_brands_div.classList.length; i++) {
                    if (card_brands_div.classList[i] !== 'card-brands') {
                        card_brands_div.classList.remove(card_brands_div.classList[i])
                    }
                }
            }
        }
    }

    // (card_number: String) => Boolean
    isValid() {
        const card_number = this.getCardNumber(this.model.get(this.full_name));
        const card_type = this.getCardTypes(card_number)[0];

        console.log(card_type);
        this.setCardTypeClassName(card_type);
        CardNumber.setCardTypeClassNameAtCards(card_type);

        if (card_type) {
            this.interceptor
                .pattern(card_type.pattern || this.cardParams.pattern)
                .mask(card_type.card_mask, ' ');
            this.model.set('card_brand_name', card_type.card_brand_name);
        }

        return card_type && Object.keys(card_type).length > 0
            && card_type.regular_expression.test(card_number)
            && (!card_type.luhn_algorithm || validate(card_number));
    }




}
