import Message from "../Message"
/**
 * Contains ability for working with height of window.
 */
export default class WindowHeight extends Message {

    /**
     * Param should be string or integer
     * @param value
     */
    setHeight(value) {
        const height = parseInt(value);

        if (isNaN(height)) {
            throw new Error('Height cannot be parsed as integer value.');
        }

        this.height = height;
    }

}
