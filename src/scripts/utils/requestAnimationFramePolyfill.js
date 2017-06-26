/**
 * Created by Seminog.Vladislav on 26.06.17.
 */

export default function requestAnimationFramePolyfill(callback) {
    if('requestAnimationFrame' in window && typeof requestAnimationFrame === 'function'){
        requestAnimationFrame(callback);
    } else {
        setTimeout(callback, 0);
    }

}