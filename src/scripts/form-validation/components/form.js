import {Component} from '../../utils/validation';
import {sendForm} from '../send-form';
import {trackErrorEvent} from '../utils/trackingEvent';

export class Form extends Component {

    constructor(...args) {
        super(...args);

        this.element.addEventListener('submit', this.handleFormSubmit.bind(this));
    }

    isValid() {
        return true;
    }

    componentExists(component) {
        return component.element.id && !!document.querySelector(`#${component.element.id}`);
    }

    formIsValid() {
        const components = this.app.components;
        let formIsValid = true;
        this.invalidFields = [];

        components.forEach(component => {
            component.model.set(component.full_name, component.getValue());
            component.dirty = true;
            component.setValidationMark && component.setValidationMark(component.isValid())
            component.setDirty && component.setDirty()

            if (this.componentExists(component) && !component.isValid()) {
                formIsValid = false;
                this.invalidFields.push(component.element);
            }
        });

        return formIsValid;
    }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log(this.model.params);

        if (this.formIsValid()) {
            sendForm(this.element, this.model.params);

        } else {
            console.log('Form is invalid');

            if (this.invalidFields.length) {
                this.invalidFields[0].focus();
            }

            //event for matomo tracking
            trackErrorEvent(this.invalidFields);

        }

    }

}
