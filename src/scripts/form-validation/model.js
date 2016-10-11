import {componentList} from './component-list';
import {FORM_NAME} from './constants';

export var model = {

    [FORM_NAME]: componentList.reduce((result, component) => {
        let $componentElement = document.querySelector(component.selector);

        if ($componentElement && component.model) {
            return Object.assign({}, result, {
                [component.name]: component.defaultValue
            });
        }

        return result;

    }, {})
};
