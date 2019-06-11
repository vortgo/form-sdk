import remove from 'lodash/remove';
import {Model} from './Model';
import {initComponent} from './initComponent';
import {COMPONENTS, ELEMENTS} from './symbols';
import i18next from "i18next";
const enLang = require("../../../translations/en.json");
const ruLang = require("../../../translations/ru.json");

/**
 * Exposes the main public interface to manage application.
 */
export class App {

    constructor() {
        this[COMPONENTS] = {};
        this[ELEMENTS] = new Set();
        this.components = [];
        this.data = new Model();
        this.data.on('change', this.update.bind(this));
    }

    /**
     * Registers application model with some predefined data
     * @param  {any} data model data
     * @return {App}
     */
    model(data) {
        this.data.reset(data);
        return this;
    }

    /**
     * Registers component constructor bound to selector.
     * @param  {String} selector selector to bind component instance to
     * @param  {Function} ctor   component constructor
     * @return {App}
     */
    component(selector, ctor) {
        this[COMPONENTS][selector] = ctor;
        return this;
    }

    /**
     * Instantiates all registered components within element.
     * @param  {Element} root
     */
    bootstrap(root) {
        Object.keys(this[COMPONENTS]).forEach((selector) => {
            var elements = root.querySelectorAll(selector);
            initComponent(this[COMPONENTS][selector], elements, this);
        });
        this.initTranslation();
    }

    /**
     * Invokes all components' `update` function
     */
    update(element) {
        this.components.forEach(component => component.update && component.update(element));
    }

    /**
     * Registers component instance within application.
     * @param  {Component} component
     */
    register(component) {
        this.components.push(component);
        this[ELEMENTS].add(component.element);
    }

    /**
     * Removes component instance from application
     * @param  {Component} component
     */
    destroy(component) {
        remove(this.components, component);
    }

    initTranslation() {
        i18next.init({
            getAsync: false,
            lng: document.getElementsByTagName('body')[0].getAttribute('lang') || 'en',
            fallbackLng: ['en'],
            debug: false,
            resources: {
                en: {
                    translation: enLang
                },
                ru: {
                    translation: ruLang
                },
            }
        }).then();
    }

}
