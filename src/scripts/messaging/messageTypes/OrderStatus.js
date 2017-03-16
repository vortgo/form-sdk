import Message from "../Message"

export default class OrderStatus extends Message {

    constructor(type, response) {
        super(type);

        this.response = response;
    }

}
