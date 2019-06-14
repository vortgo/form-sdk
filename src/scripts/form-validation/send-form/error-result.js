export function showErrors($form, data) {
    if (data.error.messages.length > 0) {
        for (var i in data.error.messages) {
            if ('string' === typeof i) {
                continue;
            }
            var tmpEl = $form.querySelector('.' + i);
            if (tmpEl) {
                tmpEl.classList.add('error');
                tmpEl.classList.add('dirty');
            }
        }
    }
}