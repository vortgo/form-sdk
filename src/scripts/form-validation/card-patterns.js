export const card_patterns = [
    {
        regular_expression: /^3[47][0-9]{13}$/,
        partial_regular_expression: /^(3[47])/,
        pattern: /^[0-9]{0,15}/,
        luhn_algorithm: true,
        card_brand_name: 'AMERICAN EXPRESS',
        card_mask: '#### ###### #####',
        class_name: 'card_type_amex'
    },
    {
        regular_expression: /^5[1-5][0-9]{14}$/,
        partial_regular_expression: /^(5[1-5])/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'MASTERCARD',
        card_mask: '#### #### #### ####',
        class_name: 'card_type_mastercard'
    },
    {
        regular_expression: /^(222[1-9][0-9]{12}|22[3-9][0-9]{13}|2[3-6][0-9]{14}|27[0-1][0-9]{13}|2720[0-9]{12})$/,
        partial_regular_expression: /^(222|22[3-9]|27|2[3-6]|27[0-1]|2720)/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'MASTERCARD',
        card_mask: '#### #### #### ####',
        class_name: 'card_type_mastercard'
    },
    {
        regular_expression: /^((60110|6011[2-4])[0-9]{11,14}|(601174|60117[7-9]|60118[6-9]|60119[0-9])[0-9]{10,13})$/,
        partial_regular_expression: /^((60110|6011[2-4])|(601174|60117[7-9]|60118[6-9]|60119[0-9]))/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: true,
        card_brand_name: 'DISCOVER',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_discover'
    },
    {
        regular_expression: /^((62212[6-9]|62292[0-5])[0-9]{10,13}|(6229[0-1]|6221[3-9])[0-9]{11,14}|(628[2-8]|622[2-8])[0-9]{12,15}|(64[4-9]|62[4-6])[0-9]{13,16}|65[0-9]{14,17})$/,
        partial_regular_expression: /^(62212[6-9]|62292[0-5]|6229[0-1]|6221[3-9]|628[2-8]|622[2-8]|64[4-9]|62[4-6]|65[0-9])/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: true,
        card_brand_name: 'DISCOVER',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_discover'
    },
    {
        regular_expression: /^(506(099|1([0-8][0-9]|9[0-8]))[0-9]{10,13})$/,
        partial_regular_expression: /^(506(099|1([0-8][0-9]|9[0-8])))/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: false,
        card_brand_name: 'VERVE',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_verve'
    },
    {
        regular_expression: /^((521090|528649|528668|551609)[0-9]{10,13})$/,
        partial_regular_expression: /^(521090|528649|528668|551609)/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: false,
        card_brand_name: 'VERVE',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_verve'
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
        regular_expression: /^220[0-4][0-9]{10,15}$/,
        partial_regular_expression: /^(220[0-4])/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: true,
        card_brand_name: 'NSPK MIR',
        card_mask: '#### #### #### #### ###',
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
        regular_expression: /^7444[0-9]{12,15}$/,
        partial_regular_expression: /^(7444)/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: false,
        card_brand_name: 'MAESTRO',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_maestro'
    },
    {
        regular_expression: /^(5[6-9][0-9]{10,17})$/,
        partial_regular_expression: /^(5[6-9])/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: true,
        card_brand_name: 'MAESTRO',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_maestro'
    },
    {
        regular_expression: /^((6[6-9]|63)[0-9]{10,17}|(62[397]|64[0-3])[0-9]{9,16}|(601[023456789]|628[01])[0-9]{8,15})$/,
        partial_regular_expression: /^((6[6-9]|63)[0-9]|(62[397]|64[0-3])[0-9]|(601[023456789]|628[01])[0-9])/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: false, //could fall RuPay cards
        card_brand_name: 'MAESTRO',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_maestro'
    },
    {
        regular_expression: /^((30[0-5]|35[3-8])[0-9]{13,16}|(3095|352[8-9])[0-9]{12,15}|36[0-9]{12,17}|3[8-9][0-9]{14,17})$/,
        partial_regular_expression: /^(30[0-5]|3095|352[8-9]|36|3[8-9])/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: true,
        card_brand_name: 'DISCOVER',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_discover'
    },
    {
        regular_expression: /^(35[019][0-9]{13}|352[0-7][0-9]{12})$/,
        partial_regular_expression: /^(350|351|359|352[0-7}])/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: true,
        card_brand_name: 'JCB',
        card_mask: '#### #### #### ####',
        class_name: 'card_type_jcb'
    },
    {
        regular_expression: /^50[0-9]{10,17}$/,
        partial_regular_expression: /^(50[0-9])/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: false, //some cards could fail
        card_brand_name: 'MAESTRO',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_maestro'
    },
    {
        regular_expression: /^((6289|6220|622[0-1])[0-9]{8,15}|61[0-9]{10,17}|(60[023456789]|62[01])[0-9]{9,16}|(6011[15678]|6229[3-9])[0-9]{7,14}|60118[0-5][0-9]{6,13})$/,
        partial_regular_expression: /^(6289|6220|622[0-1]|61[0-9]|60[023456789]|62[01]|6011[15678]|6229[3-9]|60118[0-5])/,
        pattern: /^[0-9]{0,19}/,
        luhn_algorithm: false, //could fall RuPay cards
        card_brand_name: 'MAESTRO',
        card_mask: '#### #### #### #### ###',
        class_name: 'card_type_maestro'
    },
    {
        regular_expression: /^9792[0-8][0-9]{11}$/,
        partial_regular_expression: /^(9792[0-8][0-9])/,
        pattern: /^[0-9]{0,16}/,
        luhn_algorithm: false,
        card_brand_name: 'TROY',
        card_mask: '#### #### #### ####',
        class_name: 'card_type_troy'
    }
    ]