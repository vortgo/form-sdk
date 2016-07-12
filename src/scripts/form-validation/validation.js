import {App} from '../utils/validation';
import {model} from './model';
import set from 'lodash/set';
import {componentList} from './component-list';
import {FORM_NAME, CHECKSUM_SELECTOR} from './constants';

const app = new App();

const $checksum = document.querySelector(CHECKSUM_SELECTOR);

set(model, `${FORM_NAME}.checkSum`, $checksum.value);

app.model(model);

componentList.forEach(component => {
    if (document.querySelector(component.selector)) {
        app.component(component.selector, component.component);
    }
});

app.bootstrap(document.body);
