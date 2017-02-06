import {Component} from '../../utils/validation';
import {VALID, INVALID} from './../classNames';
import {getParentElement} from '../utils/getParentElement';
import {getName} from '../utils/getName';
import {FORM_NAME} from '../constants';

export class Select extends Component {
    constructor(...args) {
        super(...args);

        this.parent = getParentElement(this.element);

        const name = getName(this.element);
        this.full_name = [FORM_NAME, name].join('.');

        this.element.addEventListener('change', this.onChange.bind(this));
        this.element.addEventListener('blur', this.onChange.bind(this));
    }

    onChange(event) {
        this.model.set(this.full_name, event.target.value);
        this.dirty = true;
        this.setValidationMark(this.isValid());
        this.setDirty();
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

    setDirty() {
        if (this.dirty) {
            this.parent.classList.add('dirty');
        }
    }

}
