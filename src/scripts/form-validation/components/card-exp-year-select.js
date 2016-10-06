import {Input} from './input';
import {FORM_NAME} from '../constants';

export class CardExpYearSelect extends Input {
    constructor(...args) {
        super(...args);

        this.parent = document.getElementsByClassName('expiry-date-select')[0];
    }
    isValid() {
        const expire_year = this.element.value;
        const expire_month = this.model.get(`${FORM_NAME}.card_exp_month_select`);

        if (expire_year.length === 0 && expire_month.length === 0) return false;

        if (expire_month.length === 0) return true;

        if (expire_year.length === 0) return false;

        const expire_date = Date.parse([expire_month, '01', expire_year].join('/'));
        var cur_date = new Date();

        cur_date.setDate(1);
        cur_date.setHours(0);
        cur_date.setMinutes(0);
        cur_date.setSeconds(0);
        cur_date.setMilliseconds(0);

        return (expire_date >= cur_date.getTime());
    }

}
