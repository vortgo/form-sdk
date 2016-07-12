export function showErrors($form, data) {

    for (var i in data.error.messages) {
        var tmpEl = $form.querySelector('.'+i);
        if (tmpEl) {
            tmpEl.classList.add('error');
            tmpEl.classList.add('dirty');
        }
    }
}