import MessagingSystem from "./MessagingSystem";
import Message from "./Message";
import WindowHeight from "./messageTypes/WindowHeight";

try {
    var Messaging = new MessagingSystem();
    var ConcreteMessage = new WindowHeight("windowHeight");
    window.addEventListener("load", function (event){
        var body = document.body,
            html = document.documentElement;

        var height = Math.max( body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight );


        ConcreteMessage.setHeight(height);

        Messaging.sendToDomParent(ConcreteMessage, window);
    });

} catch (err) {
    console.warn("Something goes wrong.");
}

export {Messaging, ConcreteMessage};