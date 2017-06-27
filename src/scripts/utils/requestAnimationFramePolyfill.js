import isSamsung from './isSamsung'

export default function requestAnimationFramePolyfill(callback) {
    //проверка для исправления проблем с курсором на моб устройствах в полях ввода с маской
    try {
        if (isSamsung) {
            if ('requestAnimationFrame' in window && typeof requestAnimationFrame === 'function') {
                requestAnimationFrame(callback);
            } else {
                setTimeout(callback, 0);
            }
        } else {
            callback()
        }
    } catch (error) {
        callback();
        console.error(error);

    }


}