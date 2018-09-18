export const card_patterns = [
    {
        regular_expression: /^3[47][0-9]{13}$/,
        partial_regular_expression: /^3[47]/,
        pattern: /^[0-9]{0,15}/,
        luhn_algorithm: true,
        card_brand_name: 'AMERICAN EXPRESS',
        card_mask: '#### #### #### ###',
        class_name: 'card_type_amex'
    },
    {
        regular_expression: /^5019[0-9]{12}$/,
        partial_regular_expression: /^5019/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'DANKORT',
        card_mask: '#### #### #### ####',
        class_name: 'card_type_dankort'
    },
    {
        regular_expression: /^30[0-5][0-9]{11}$/,
        partial_regular_expression: /^30[0-5s]/,
        pattern: /^[0-9]{0,14}/,
        luhn_algorithm: true,
        card_brand_name: 'DINERS CLUB - CARTE BLANCHE',
        card_mask: '#### #### #### ##',
        class_name: 'card_type_diners'
    },
    {
        regular_expression: /^36[0-9]{12}$/,
        partial_regular_expression: /^36/,
        pattern: /^[0-9]{0,14}/,
        luhn_algorithm: true,
        card_brand_name: 'DINERS CLUB - INTERNATIONAL',
        card_mask: '#### #### #### ##',
        class_name: 'card_type_diners'
    },
    {
        regular_expression: /^54[0-9]{14}$/,
        partial_regular_expression: /^54/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'DINERS CLUB - USA & CANADA',
        card_mask: '#### #### #### ####',
        class_name: 'card_type_diners'
    },
    {
        regular_expression: /^39[0-9]{14,17}$/,
        partial_regular_expression: /^39/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: true,
        card_brand_name: 'DINERS CLUB',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_diners'
    },
    {
        regular_expression: /^3852|3[0-3][0-9]{12,17}$/,
        partial_regular_expression: /^(3852|3[0-3])/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: false,
        card_brand_name: 'DINERS CLUB',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_diners'
    },
    {
        regular_expression: /^5[1-5][0-9]{14}|222647[0-9]{10}$/,
        partial_regular_expression: /^(5[1-5]|222647)/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'MASTERCARD',
        card_mask: '#### #### #### ####',
        class_name: 'card_type_mastercard'
    },
    {
        regular_expression: /^222[1-9][0-9]{12}|22[3-9][0-9]{13}|2[3-6][0-9]{14}|27[0-1][0-9]{13}|2720[0-9]{12}$/,
        partial_regular_expression: /^(222|22|27|2720)/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'MASTERCARD',
        card_mask: '#### #### #### ####',
        class_name: 'card_type_mastercard'
    },
    {
        regular_expression: /^6011[0-9]{12}$/,
        partial_regular_expression: /^6011/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'DISCOVER',
        card_mask: '#### #### #### ####',
        class_name: 'card_type_discover'
    },
    {
        regular_expression: /^64[4-9][0-9]{13}$/,
        partial_regular_expression: /^64/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'DISCOVER',
        card_mask: '#### #### #### ####',
        class_name: 'card_type_discover'
    },
    {
        regular_expression: /^65[0-9]{14}$/,
        partial_regular_expression: /^65/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'DISCOVER',
        card_mask: '#### #### #### ####',
        class_name: 'card_type_discover'
    },
    {
        regular_expression: /^622(12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|91[0-9]|92[0-5])[0-9]{10}$/,
        partial_regular_expression: /^622(12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|91[0-9]|92[0-5])/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'DISCOVER',
        card_mask: '#### #### #### ####',
        class_name: 'card_type_discover'
    },
    {
        regular_expression: /^(?:2131|1800|35(2[8-9]|[3-8][0-9])[0-9])[0-9]{11}$/,
        partial_regular_expression: /^(?:2131|1800|35(2[8-9]|[3-8][0-9])[0-9])/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'JCB',
        card_mask: '#### #### #### ####',
        class_name: 'card_type_jcb'
    },
    {
        regular_expression: /^(6304|6706|6771|6709)[0-9]{12,15}$/,
        partial_regular_expression: /^(6304|6706|6771|6709)/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: true,
        card_brand_name: 'LASER',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_laser'
    },
    {
        regular_expression: /^(5018|5020|5038|6304|6759|6799|676[1-3])[0-9]{8,15}$/,
        partial_regular_expression: /^(5018|5020|5038|6304|6759|6799|676[1-3])/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: true,
        card_brand_name: 'MAESTRO',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_maestro'
    },
    {
        regular_expression: /^(6331)[0-9]{8,12}$/,
        partial_regular_expression: /^(6331)/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'SWITCH',
        card_mask: '#### #### #### ####',
        class_name: 'card_type_switch'

    },
    {
        regular_expression: /^62[0-9]{14,17}$/,
        partial_regular_expression: /^62/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: false,
        card_brand_name: 'CHINA UNIONPAY',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_unionpay'
    },
    {
        regular_expression: /^506(099|1([0-8][0-9]|9[0-8]))[0-9]{10,13}$/,
        partial_regular_expression: /^506(099|1([0-8][0-9]|9[0-8]))/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: false,
        card_brand_name: 'VERVE',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_verve'
    },
    {
        regular_expression: /^(521090|528649|528668|551609)[0-9]{10,13}$/,
        partial_regular_expression: /^(521090|528649|528668|551609)/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: false,
        card_brand_name: 'VERVE',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_verve'
    },
    {
        regular_expression: /^50[0-9]{14,17}$/,
        partial_regular_expression: /^(50[0-9])/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: true,
        card_brand_name: 'AURA',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_aura'
    },
    {
        regular_expression: /^(401178|401179|431274|438935|451416|457393|457631|457632|504175|636297|4576|4011|506[6-7]|509[0-9]{3}|627780|636368|6500[3-5]|650[4-5]|6507|6509[0-2]|6516[5-7]|6550[0-5])[0-9]{0,10}$/,
        partial_regular_expression: /^(401178|401179|431274|438935|451416|457393|457631|457632|504175|636297|4576|4011|506[6-7]|509[0-9]{3}|627780|636368|6500[3-5]|650[4-5]|6507|6509[0-2]|6516[5-7]|6550[0-5])/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'ELO',
        card_mask: '#### #### #### ####',
        class_name: 'card_type_elo'
    },
    {
        regular_expression: /^4(026|17500|405|508|844|91[37])/,
        partial_regular_expression: /^4(026|17500|405|508|844|91[37])/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'VISA ELECTRON',
        card_mask: '#### #### #### ####',
        class_name: 'card_type_visa_electron'
    },
    {
        regular_expression: /^4[0-9]{12,18}$/,
        partial_regular_expression: /^4/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: true,
        card_brand_name: 'VISA',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_visa'
    },
    {
        regular_expression: /^(38|60)[0-9]{11,17}$/,
        partial_regular_expression: /^(38|60)/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: true,
        card_brand_name: 'HIPERCARD',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_hipecard'
    },
    {
        regular_expression: /^636[0-9]{13,17}$/,
        partial_regular_expression: /^636/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: true,
        card_brand_name: 'INTERPAYMENT',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_interpayment'
    },
    {
        regular_expression: /^220[0-4][0-9]{12}$/,
        partial_regular_expression: /^220[0-4]/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'NSPK MIR',
        card_mask: '#### #### #### ####',
        class_name: 'card_type_nspk_mir'
    },
    {
        regular_expression: /^1[0-9]{14}$/,
        partial_regular_expression: /^1/,
        pattern: /^[0-9]{0,15}/,
        luhn_algorithm: true,
        card_brand_name: 'UATP',
        card_mask: '#### #### #### ###',
        class_name: 'card_type_uatp'
    },
    {
        regular_expression: /^5392[0-9]{12}$/,
        partial_regular_expression: /^5392/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'CARDGUARD EAD BG ILS',
        card_mask: '#### #### #### ####',
        class_name: 'card_type_cardguard'
    },
    {
        regular_expression: /^(676280|639002)[0-9]{12}$/,
        partial_regular_expression: /^(676280|639002)/,
        pattern: /^[0-9]{0,18}/,
        luhn_algorithm: false,
        card_brand_name: 'MAESTRO',
        card_mask: '#### #### #### #### ##',
        class_name: 'card_type_maestro'
    },
    {
        regular_expression: /^7444[0-9]{12,15}$/,
        partial_regular_expression: /^(7444)/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: false,
        card_brand_name: 'MAESTRO',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_maestro'
    },
    {
        regular_expression: /^5[6-9][0-9]{14,17}$/,
        partial_regular_expression: /^5/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: true,
        card_brand_name: 'MAESTRO',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_maestro'
    },
    {
        regular_expression: /^5[6-9][0-9]{14,17}$/,
        partial_regular_expression: /^5/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: true,
        card_brand_name: 'MAESTRO',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_maestro'
    },
    {
        regular_expression: /^63[0-9]{13,16}|64[0-3]{13,16}|6[6-9][0-9]{14,17}$/,
        partial_regular_expression: /^(63[0-9]|64[0-3]|6[6-9])/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: false,
        card_brand_name: 'MAESTRO',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_maestro'
    },
    {
        regular_expression: /^63[7-9][0-9]{13}$/,
        partial_regular_expression: /^63[7-9]/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'INSTAPAYMENT',
        card_mask: '#### #### #### ####',
        class_name: 'card_type_instapayment'
    }
];