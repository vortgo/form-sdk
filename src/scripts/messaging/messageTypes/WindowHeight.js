import Message from "./../Message"
/**
 * Contains ability for working with height of window.
 */
class WindowHeight extends Message {

    /**
     * Param should be string or integer
     * @param height
     */
    setHeight(height) {
        height = parseInt(height);

        if (isNaN(height)) {
            throw new Error('Height cannot be parsed as integer value.');
        }

        this.height = height;
    }

}

export {WindowHeight as default}