import assign from 'lodash/assign';
import reduce from 'lodash/reduce';
import {componentList} from './component-list';
import {FORM_NAME} from './constants';

export var model = {

    [FORM_NAME]: reduce(componentList, (result, component) => {
        let $componentElement = document.querySelector(component.selector);

        if ($componentElement && component.model) {
            return assign({}, result, {
                [component.name]: component.defaultValue
            });

        }

        return result;

    }, {})
};
