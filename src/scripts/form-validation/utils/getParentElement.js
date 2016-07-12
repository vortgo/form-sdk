import {getName} from './getName';

export function getParentElement(element) {
    const className = getName(element);

    return document.getElementsByClassName(className)[0];
}

