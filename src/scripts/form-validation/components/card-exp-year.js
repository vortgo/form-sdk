import {Input} from './input';
import {FORM_NAME} from '../constants';
import {DEFAULT, EMPTY, FIELD_FORMAT, SIZE} from "../error-labels";

export class CardExpYear extends Input {
    constructor(...args) {
        super(...args);

        this.element.addEventListener('blur', this.onBlur.bind(this));
    }


    isValid() {
        const expire_year = this.element.value;
        const expire_month = this.model.get(`${FORM_NAME}.card_exp_month`);
        const possibleLengths = [2, 4];
        const maxYearOffset = 25;

        let cur_date = new Date(),
            max_date = new Date();

        cur_date.setDate(1);
        cur_date.setHours(0);
        cur_date.setMinutes(0);
        cur_date.setSeconds(0);
        cur_date.setMilliseconds(0);

        if (expire_year.length === 0) {
            this.setValidationErrorToBox(EMPTY);
            return false;
        }

        if (!possibleLengths.includes(expire_year.length)) {
            this.setValidationErrorToBox(SIZE);
            return false;
        }

        if (expire_year < cur_date.getFullYear() || expire_year > cur_date.getFullYear() + maxYearOffset){
            this.setValidationErrorToBox(FIELD_FORMAT, '', {
                startYear: cur_date.getFullYear(),
                endYear: max_date.getFullYear()
            });
            return false;
        }

        if (expire_month.length === 0) {
            return true;
        }

        const expire_date = Date.parse([expire_month, '01', expire_year].join('/'));

        if (expire_date >= cur_date.getTime()) {
            return true;
        }

        this.setValidationErrorToBox(FIELD_FORMAT, 'card_exp_date');
        return false;
    }

    static prepareFormatValue(expire_year) {
        const format = '201';
        if (expire_year.length < 4 && expire_year.length > 0) {
            var missingNumber = 4 - expire_year.length;
            expire_year = format.slice(0, missingNumber) + expire_year;
        }
        return expire_year;
    }
}
