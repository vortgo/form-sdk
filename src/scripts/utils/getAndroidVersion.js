export default function getAndroidVersion (ua) {
    ua = (ua || navigator.userAgent).toLowerCase();
    let match = ua.match(/android\s([0-9\.]*)/);
    return match ? match[1] : false;
}