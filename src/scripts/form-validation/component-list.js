import {CardNumber} from './components/card-number';
import {CardHolder} from './components/card-holder';
import {CardExpMonth} from './components/card-exp-month';
import {CardExpYear} from './components/card-exp-year';
import {CardExpMonthSelect} from './components/card-exp-month-select';
import {CardExpYearSelect} from './components/card-exp-year-select';
import {CardCVV} from './components/card-cvv';
import {Address} from './components/address';
import {City} from './components/city';
import {ZipCode} from './components/zip-code';
import {Cpf} from './components/cpf';
import {Form} from './components/form';

export const componentList = [
    {
        name: 'card_number',
        selector: '.card_number input',
        component: CardNumber,
        model: true,
        defaultValue: ''
    },
    {
        name: 'card_holder',
        selector: '.card_holder input',
        component: CardHolder,
        model: true,
        defaultValue: ''
    },
    {
        name: 'card_exp_month',
        selector: '.card_exp_month input',
        component: CardExpMonth,
        model: true,
        defaultValue: ''
    },
    {
        name: 'card_exp_year',
        selector: '.card_exp_year input',
        component: CardExpYear,
        model: true,
        defaultValue: ''
    },
    {
        name: 'card_exp_month_select',
        selector: '.card_exp_month_select select',
        component: CardExpMonthSelect,
        model: true,
        defaultValue: ''
    },
    {
        name: 'card_exp_year_select',
        selector: '.card_exp_year_select select',
        component: CardExpYearSelect,
        model: true,
        defaultValue: ''
    },
    {
        name: 'card_cvv',
        selector: '.card_cvv input',
        component: CardCVV,
        model: true,
        defaultValue: ''
    },
    {
        name: 'address',
        selector: '.address input',
        component: Address,
        model: true,
        defaultValue: ''
    },
    {
        name: 'city',
        selector: '.city input',
        component: City,
        model: true,
        defaultValue: ''
    },
    {
        name: 'zip_code',
        selector: '.zip_code input',
        component: ZipCode,
        model: true,
        defaultValue: ''
    },
    {
        name: 'cpf',
        selector: '.cpf input',
        component: Cpf,
        model: true,
        defaultValue: ''
    },
    {
        name: 'form',
        selector: 'form',
        component: Form,
        model: false
    }
];
