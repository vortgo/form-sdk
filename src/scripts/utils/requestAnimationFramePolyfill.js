/**
 * Created by Seminog.Vladislav on 26.06.17.
 */

export default function requestAnimationFramePolyfill(callback) {
    //проверка userAgent Samsung devices
    if (navigator.userAgent.match(/SAMSUNG|Samsung|SGH-[I|N|T]|GT-[I|N]|SM-[N|P|T|Z|J|G|A]|SHV-E|SCH-[I|J|R|S]|SPH-L/i)) {
        if ('requestAnimationFrame' in window && typeof requestAnimationFrame === 'function') {
            requestAnimationFrame(callback);
        } else {
            setTimeout(callback, 0);
        }
    } else {
        callback()
    }

}