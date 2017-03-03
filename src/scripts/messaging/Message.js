/**
 * Base class for every Message.
 */
export default class Message {
    constructor(type) {
        this.type = type;
    }

    toJSONString() {
        try {
            return JSON.stringify(this);
        } catch (error) {
            console.error(error);
        }

    }
}
