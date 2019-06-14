import {Input} from './input';
import {FORM_NAME} from '../constants';
import {DEFAULT} from "../error-labels";

export class CardExpYear extends Input {
    constructor(...args) {
        super(...args);

        this.element.addEventListener('blur', this.onBlur.bind(this));
    }

    onBlur(event) {
        this.setDirty();
        this.prepareFormat();
    }

    prepareFormat() {
        const expire_year = this.model.get(this.full_name);
        this.element.value = CardExpYear.prepareFormatValue(expire_year);
        this.app.update.bind(this.app);
        this.setValidationMark(this.isValid());
    }

    isValid() {
        const expire_year = this.element.value;
        const expire_month = this.model.get(`${FORM_NAME}.card_exp_month`);

        if (expire_month.length === 0) return true;

        if (expire_year.length === 0) return false;

        const expire_date = Date.parse([expire_month, '01', expire_year].join('/'));
        var cur_date = new Date();

        cur_date.setDate(1);
        cur_date.setHours(0);
        cur_date.setMinutes(0);
        cur_date.setSeconds(0);
        cur_date.setMilliseconds(0);

        if (expire_date >= cur_date.getTime()) {
            return true;
        }
        
        return false;
    }

    static prepareFormatValue(expire_year) {
        const format = '201';
        if (expire_year.length < 4 && expire_year.length > 0) {
            var missingNumber = 4 - expire_year.length;
            expire_year = format.slice(0,missingNumber) + expire_year;
        }
        return expire_year;
    }
}
