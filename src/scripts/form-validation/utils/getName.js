
export function getName($element) {
    return $element.getAttribute('name').replace(/pay_form\[(.+)\]/, '$1');
}
