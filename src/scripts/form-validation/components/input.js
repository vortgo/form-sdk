import { Component } from '../../utils/validation';
import { VALID, INVALID } from './../classNames';
import { getParentElement } from '../utils/getParentElement';
import { getName } from '../utils/getName';
import {Interceptor} from '../../utils/interceptor';
import {rules} from '../interceptor-rules';
import {FORM_NAME} from '../constants';

export class Input extends Component {
    constructor(...args) {
        super(...args);

        this.parent = getParentElement(this.element);

        const name = getName(this.element);
        this.full_name = [FORM_NAME, name].join('.');

        const elementRules = rules[name];
        if (elementRules) {
            this.interceptor = new Interceptor(this.element)
                .pattern(elementRules.pattern)
                .mask(elementRules.mask, elementRules.delimiter)
                .intercept(this.intercept.bind(this));
        }

        this.element.addEventListener('blur', this.onBlur.bind(this));
    }

    intercept(value) {
        this.model.set(this.full_name, value);
        this.dirty = true;
        this.setValidationMark(this.isValid());

        return value;
    }

    setValidationMark(isValid) {
        if (isValid) {
            this.parent.classList.add(VALID);
            this.parent.classList.remove(INVALID);
        } else {
            this.parent.classList.remove(VALID);
            this.parent.classList.add(INVALID);
        }
    }

    onBlur(event) {
        this.setDirty();
    }

    setDirty() {
        if (this.dirty) {
            this.parent.classList.add('dirty');
        }
    }

}
