import isSamsung from './isSamsung'
import getAndroidVersion from './getAndroidVersion'

export default function androidInputPolyfill(callback) {
    //проверка для исправления проблем с курсором на моб устройствах в полях ввода с маской
    try {
        if (parseInt(getAndroidVersion()) < 6 || isSamsung) {
            setTimeout(callback, 10);
        } else {
            callback()
        }
    } catch (error) {
        callback();
        console.error(error);
    }


}