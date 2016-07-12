export const card_patterns = [
    {
        regular_expression: /^3[47][0-9]{13}$/,
        partial_regular_expression: /^3[47]/,
        pattern: /^[0-9]{0,15}/,
        luhn_algorithm: true,
        card_brand_name: 'AMERICAN EXPRESS',
        card_mask: '#### #### #### ###'
    },
    {
        regular_expression: /^3[890][0-9]{12}$|^5[45][0-9]{14}$/,
        partial_regular_expression: /^3[890][0-9]{12}$|^5[45][0-9]{14}$/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'DINERS CLUB INTERNATIONAL',
        card_mask: '#### #### #### ####'
    },
    {
        regular_expression: /^3[89][0-9]{12}$/,
        partial_regular_expression:  /^3[89]]/,
        pattern: /^[0-9]{0,15}/,
        luhn_algorithm: true,
        card_brand_name: 'DINERS CLUB INTERNATIONAL',
        card_mask: '#### #### #### ###'
    },
    {
        regular_expression: /^5[45][0-9]{14}$/,
        partial_regular_expression: /^5[45]/,
        pattern: /^[0-9]{0,17}/,
        luhn_algorithm: true,
        card_brand_name: 'DINERS CLUB INTERNATIONAL',
        card_mask: '#### #### #### #####'

    },
    {
        regular_expression: /^6011[0-9]{12}$/,
        partial_regular_expression: /^6011/,
        pattern: /^[0-9]{0,17}/,
        luhn_algorithm: true,
        card_brand_name: 'DISCOVER',
        card_mask: '#### #### #### #####'
    },
    {
        regular_expression: /^64[4-9][0-9]{13}$/,
        partial_regular_expression: /^64/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'DISCOVER',
        card_mask: '#### #### #### ####'
    },
    {
        regular_expression: /^65[0-9]{14}$/,
        partial_regular_expression: /^65/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'DISCOVER',
        card_mask: '#### #### #### ####'
    },
    {
        regular_expression: /^622(12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|91[0-9]|92[0-5])[0-9]{10}$/,
        partial_regular_expression: /^622(12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|91[0-9]|92[0-5])/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'DISCOVER',
        card_mask: '#### #### #### ####'
    },
    {
        regular_expression: /^(?:2131|1800|35(2[8-9]|[3-8][0-9])[0-9])[0-9]{11}$/,
        partial_regular_expression: /^(?:2131|1800|35(2[8-9]|[3-8][0-9])[0-9])/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'JCB',
        card_mask: '#### #### #### ####'
    },
    {
        regular_expression: /^(6759[0-9]{2})[0-9]{6,13}$/,
        partial_regular_expression: /^(6759[0-9]{2})/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: true,
        card_brand_name: 'MAESTRO',
        card_mask: '#### #### #### #### ###'
    },
    {
        regular_expression: /^(50[0-9]{4})[0-9]{6,13}$/,
        partial_regular_expression: /^50/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: true,
        card_brand_name: 'MAESTRO',
        card_mask: '#### #### #### #### ###'
    },
    {
        regular_expression: /^5[6-9][0-9]{10,17}$/,
        partial_regular_expression: /^5[6-9]/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: true,
        card_brand_name: 'MAESTRO',
        card_mask: '#### #### #### #### ###'
    },
    {
        regular_expression: /^6[0-9]{11,18}$/,
        partial_regular_expression: /^6/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: false,
        card_brand_name: 'MAESTRO',
        card_mask: '#### #### #### #### ###'
    },
    {
        regular_expression: /^5[1-5][0-9]{14}$/,
        partial_regular_expression: /^5[1-5]/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'MASTERCARD',
        card_mask: '#### #### #### ####'
    },
    {
        regular_expression: /^4([0-9]{12}|[0-9]{15}|[0-9]{18})$/,
        partial_regular_expression: /^4/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: true,
        card_brand_name: 'VISA',
        card_mask: '#### #### #### #### ###'
    },
    {
        regular_expression: /[0-9]{6,20}/,
        partial_regular_expression: /^[0-9]/,
        pattern: /^[0-9]{0,20}/,
        luhn_algorithm: false,
        card_brand_name: 'ELO',
        card_mask: '#### #### #### #### ####'
    },
    {
        regular_expression: /[0-9]{6,20}/,
        partial_regular_expression: /^[0-9]/,
        pattern: /^[0-9]{0,20}/,
        luhn_algorithm: false,
        card_brand_name: 'HIPERCARD',
        card_mask: '#### #### #### #### ####'
    },
    {
        regular_expression: /[0-9]{6,20}/,
        partial_regular_expression: /^[0-9]/,
        pattern: /^[0-9]{0,20}/,
        luhn_algorithm: false,
        card_brand_name: 'AURA',
        card_mask: '#### #### #### #### ####'
    }
];
