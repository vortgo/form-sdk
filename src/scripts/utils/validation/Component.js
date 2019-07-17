/**
 * Provides class to extend all components from
 */
export class Component {

  constructor(element, app, model) {
    this.element = element;
    this.app = app;
    this.model = model;
  }

  update(element) {
    // implemented in concrete classes
  }

    getValue() {
        return this.element.value;
    }

}
