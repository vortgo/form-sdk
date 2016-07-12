import {ELEMENTS} from './symbols';
import forEach from 'lodash/forEach';

export function initComponent (ctor, elements, app) {
  forEach(elements, element => {
    if (!app[ELEMENTS].has(element)) {
      var instance = new ctor(element, app, app.data);
      app.register(instance);
    }
  });
}
