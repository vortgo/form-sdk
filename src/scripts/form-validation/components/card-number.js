import {formFieldsRequest} from "../send-form/send-form";
import {Input} from './input';
import {card_patterns} from './../card-patterns';
import {formatCardNumber} from '../utils/formatCardNumber';

var validate = require('fast-luhn');

const binLength = 6;
let initialStatement = {};
let currentBin = '';

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

    static manageFields(fieldsConfig) {
        let previousStatement = {};

        for (let key in fieldsConfig) {

            let element = document.getElementById(key + '-input');
            let closestInputElement = element !== null ? element.closest('.input-block') : null;
            let closestGroupElement = closestInputElement !== null ? closestInputElement.closest('.' + key) : null;

            // hide|show group(label, input) of field
            if (closestGroupElement === null) {
                continue;
            }

            let isDisplay = fieldsConfig[key] === true;
            closestInputElement.closest('.' + key).style.display = isDisplay ? 'block' : 'none';
            if (!isDisplay) {
                element.value = null;
            }

            previousStatement[key] = true;
        }

        // hide|show separator between card_exp_month/card_exp_month
        let separator = document.getElementsByClassName('date-separator').item(0);
        if (separator !== null && separator !== undefined) {
            if (fieldsConfig['card_exp_month'] && fieldsConfig['card_exp_year']) {
                separator.style.display = 'block';
            } else {
                separator.style.display = 'none';
            }
        }

        // set initial statement only for first change
        if (isEmpty(initialStatement) && !isEmpty(previousStatement)) {
            initialStatement = previousStatement;
        }
    }

    static initManageFields(cardNumberInput) {
        let binValue = cardNumberInput.slice(0, binLength);
        // nothing to change
        if (currentBin === binValue) {
            return;
        }
        currentBin = binValue;
        // restore initial statement
        if (binValue.length < binLength) {
            if (!isEmpty(initialStatement)) {
                CardNumber.manageFields(initialStatement);
            }
            return;
        }
        formFieldsRequest({
            'bin': currentBin
        });
    }

    // (card_number: String) => Boolean
    isValid() {
        const card_number = this.getCardNumber(this.model.get(this.full_name));
        const card_type = this.getCardTypes(card_number)[0];

        console.log(card_type);
        this.setCardTypeClassName(card_type);
        CardNumber.setCardTypeClassNameAtCards(card_type);
        CardNumber.initManageFields(card_number);

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

function isEmpty(obj) {
    if (obj === undefined || obj === null) {
        return true;
    }

    return 0 === Object.keys(obj).length;
}