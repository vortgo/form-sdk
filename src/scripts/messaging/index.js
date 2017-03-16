import MessagingSystem from "./MessagingSystem";
import WindowHeight from "./messageTypes/WindowHeight";

try {
    const Messaging = new MessagingSystem();
    const ConcreteMessage = new WindowHeight("windowHeight");

    function postHeightMessage () {
        const body = document.body,
            html = document.documentElement;

        const height = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);


        ConcreteMessage.setHeight(height);

        Messaging.sendToDomParent(ConcreteMessage, window);
    }

    window.addEventListener('load', postHeightMessage);
    window.addEventListener('resize', postHeightMessage);

} catch (err) {
    console.warn('Something went wrong.');
}
