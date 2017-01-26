/**
 * Base class for every Message.
 */
class Message {
    constructor(type) {
        this.type = type;
    }

    toJSONString() {
        return JSON.stringify(this);
    }
}

export {Message as default}