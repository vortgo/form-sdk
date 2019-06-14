import {Input} from './input';
import {FORM_NAME} from '../constants';
import {DEFAULT} from "../error-labels";

export class CardExpMonthSelect extends Input {
    constructor(...args) {
        super(...args);

       this.parent = document.getElementsByClassName('expiry-date-select')[0];
    }

    isValid() {
        const expire_year = this.model.get(`${FORM_NAME}[card_exp_year_select]`);

        const expire_month = this.element.value;

        if (expire_month.length === 0) return false;

        if (expire_year.length === 0) return true;

        const expire_date = Date.parse([expire_month, '01', expire_year].join('/'));
        var cur_date = new Date();

        cur_date.setDate(1);
        cur_date.setHours(0);
        cur_date.setMinutes(0);
        cur_date.setSeconds(0);
        cur_date.setMilliseconds(0);

        if(expire_date >= cur_date.getTime()){
            return true;
        }

        this.setValidationErrorToBox(DEFAULT);
        return false;
    }
}
