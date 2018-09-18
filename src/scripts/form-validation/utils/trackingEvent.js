/**
 * Send fields with error for tracking
 * @param fields
 */
import {ieEventPoly} from './ieEventPolyfil';

export function trackErrorEvent(fields) {
    ieEventPoly();
    let event = new CustomEvent('formError', {
        bubbles: true,
        cancelable: true,
        detail: fields
    });
    throwEvent(event)
}

export function trackProcessing(status) {
    ieEventPoly();
    let event;
    if (status) {
        event = new CustomEvent('processingResult',
            {
                bubbles: true,
                cancelable: true,
                detail: status
            });
    } else {
        event = new CustomEvent('startProcessing',
            {
                bubbles: true,
                cancelable: true,
            });
    }

    throwEvent(event)
}

function throwEvent(event) {
    try {
        document.dispatchEvent(event);
    } catch (e) {
        console.warn(e)
    }
}
