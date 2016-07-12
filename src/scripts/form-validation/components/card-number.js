import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';
var validate = require('fast-luhn');
import {Input} from './input';
import {card_patterns} from './../card-patterns';
import {formatCardNumber} from '../utils/formatCardNumber';


export class CardNumber extends Input {

    // (card_number: String) => Array[Object]
    getCardTypes(card_number) {
        return filter(card_patterns, card => {
            if (card.partial_regular_expression) {
                return card.partial_regular_expression.test(card_number);
            }
        });
    }

    // (card_number: String) => String
    getCardNumber(card_number) {
        return formatCardNumber(card_number);
    }

    // (card_number: String) => Boolean
    isValid() {
        const card_number = this.getCardNumber(this.model.get(this.full_name));
        const card_type = this.getCardTypes(card_number)[0];
        
        if (card_type) {
            this.interceptor
                .pattern(card_type.pattern || this.cardParams.pattern)
                .mask(card_type.card_mask, ' ');
        }

        return !isEmpty(card_type)
            && card_type.regular_expression.test(card_number)
            && (!card_type.luhn_algorithm || validate(card_number));
    }

}
