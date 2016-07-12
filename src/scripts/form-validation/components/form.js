import forEach from 'lodash/forEach';
import invoke from 'lodash/invoke';
import {Component} from '../../utils/validation';
import {sendForm} from '../send-form';

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

        forEach(components, component => {
            component.dirty = true;
            invoke(component, 'setValidationMark', component.isValid());
            invoke(component, 'setDirty');

            if (this.componentExists(component) && !component.isValid()) {
                formIsValid = false;
                this.invalidFields.push(component.element);
            }
        });

        return formIsValid;
    }

    handleFormSubmit(event) {
        event.preventDefault();

        if (this.formIsValid()) {
            sendForm(this.element, this.model.params);
        } else {
            console.log('Form is invalid');
            console.log(this.model.params);

            if (this.invalidFields.length) {
                this.invalidFields[0].focus();
            }
        }

    }

}
