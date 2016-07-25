export const rules = {
    card_number: {
        pattern: /^\d{0,19}$/,
        mask: '#### #### #### #### ###',
        delimiter: ' '
    },
    card_holder: {
        pattern: /^([\u00c0-\u01ffa-zA-Zа-яА-ЯёЁіІїЇєЄ'\s-]){0,32}$/,
        mask: '',
        delimiter: ''
    },
    card_exp_month: {
        pattern: /^(0[1-9]?|1[0-2]?)?$/,
        mask: '',
        delimiter: ''
    },
    card_exp_year: {
        pattern: /^\d{0,4}$/,
        mask: '',
        delimiter: ''
    },
    card_cvv: {
        pattern: /^\d{0,4}$/,
        mask: '',
        delimiter: ''
    },
    zip_code: {
        pattern: /^\d{0,5}$/,
        mask: '',
        delimiter: ''
    },
    address: {
        pattern: /^([\u00c0-\u01ffa-zA-Zа-яА-ЯёЁіІїЇєЄ0-9'\s-]){0,100}$/,
        mask: '',
        delimiter: ''
    },
    city: {
        pattern: /^([\u00c0-\u01ffa-zA-Zа-яА-ЯёЁіІїЇєЄ'\s-]){0,30}$/,
        mask: '',
        delimiter: ''
    },
    cpf: {
        pattern: /^\d{0,11}$/,
        mask: '###.###.###-##',
        delimiter: '[\\.\\-]'
    }
};
