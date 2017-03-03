import Message from "../Message"

export default class OrderStatus extends Message {

    constructor(type, status) {
        super(type);

        this.status = status;
    }

}
