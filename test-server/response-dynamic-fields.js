const response_dynamic_fields = {
    "fields": {
        "card_number": true,
        "card_exp_month": true,
        "card_exp_year": false,
        "card_holder": false,
        "card_cvv": false,
        "cpf": false,
        "dni": false,
        "personal_id": false,
        "address": false,
        "city": false,
        "zip_code": false,
        "card_exp_month_select": false,
        "card_exp_year_select": false,
        "state": false,
        "card_pin": false,
        "card_exp_date": false
    }
};


module.exports = response_dynamic_fields;
