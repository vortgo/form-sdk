import {Input} from './input';
import {FORM_NAME} from '../constants';
import {DEFAULT} from "../error-labels";

export class CardExpDate extends Input {
    isValid() {
        const date_value = this.element.value;

        let dates = date_value.split('/');

        if (date_value.length < 5) return false;

        const expire_date = Date.parse([dates[0], '01', this.prepareFormatValue(dates[1])].join('/'));
        var cur_date = new Date();
        cur_date.setDate(1);
        cur_date.setHours(0);
        cur_date.setMinutes(0);
        cur_date.setSeconds(0);
        cur_date.setMilliseconds(0);

        if (expire_date >= cur_date.getTime()) {
            this.model.set(`${FORM_NAME}.card_exp_month`, dates[0]);
            this.model.set(`${FORM_NAME}.card_exp_year`, this.prepareFormatValue(dates[1]));
        }

        if(expire_date >= cur_date.getTime()){
            return true;
        }

        this.setValidationErrorToBox(DEFAULT);
        return false;
    }


    prepareFormatValue(expire_year) {
        const format = '201';
        if (expire_year.length < 4 && expire_year.length > 0) {
            var missingNumber = 4 - expire_year.length;
            expire_year = format.slice(0, missingNumber) + expire_year;
        }
        return expire_year;
    }
}
