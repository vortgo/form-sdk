const response_error = {
    status: "error",
    error: {
        code: "2.01",
        messages: {
            card_cvv: [
                "This value should not be blank."
            ],
            card_exp_month: [
                "This value should not be blank."
            ],
            card_exp_year: [
                "This value should not be blank."
            ],
            card_number: [
                "This value should not be blank."
            ],
            zip_code: [
                "This value should not be blank."
            ],
            general: [
                "Transaction with orderId = 000731 is already in processing."
            ]
        }
    }
};

module.exports = response_error;
