import request from 'superagent';
import 'spin/dist/spin.min';

import {showErrors} from './error-result';
import {decline} from './decline-result';
import {approve} from './approved-result';
import {authOk} from './auth-ok-result';
import {authFailed} from './auth-failed-result';
import {verify} from './verify-result';
import {trackProcessing} from '../utils/trackingEvent';

import {opts} from './spinner-opts';
import {FORM_NAME} from '../constants';

import MessagingSystem from "../../messaging/MessagingSystem";
import OrderStatus from "../../messaging/messageTypes/OrderStatus";

import {
    STATUS_APPROVED,
    STATUS_AUTH_OK,
    STATUS_AUTH_FAILED,
    STATUS_DECLINED,
    STATUS_PROCESSING,
    STATUS_VERIFY
} from './order-statuses';

import {
  FORM_SEND_TIMEOUT,
  FORM_SEND_TIME
} from './request-params';

function stopSpinnerWithTarget(spinner, target) {
  spinner.stop();
  target.classList.remove('opaque');
}

const spinner = new Spinner(opts);

var startProcessing;

export function sendForm($form, data) {

  const url = $form.getAttribute('action');
  const target = document.querySelector('body');

  const stopSpinner = stopSpinnerWithTarget.bind(undefined, spinner, target);

  startProcessing = new Date();
  startProcessing = startProcessing.getHours() * 3600 + startProcessing.getMinutes() * 60 + startProcessing.getSeconds();

  request
    .post(url)
    .type('json')
    .send(data)
    .accept('json')
    .set('X-Requested-With', 'XMLHttpRequest')
    .end((err, res) => {

      if (!res) return;

      if (!res.body) {
        res.body = JSON.parse(res.text)
      }

      console.warn('yay got ' + JSON.stringify(res.body));
      //console.log('payment status', res.body.order.status);

      if (err || !res.ok) {
        console.error('Oh no! error');
        stopSpinner();
        return;
      }

      if (res.body.error) {
        console.log('status error');
        showErrors($form, res.body);
        stopSpinner();
        return;
      }

      pushPostMessageWithResponse(res.body);
        trackProcessing();

      if (res.body.order) {
        switch (res.body.order.status) {

          case STATUS_PROCESSING:
            let checkSum = data;

            if (typeof(data) == 'object') {
              checkSum = data[FORM_NAME].checksum;
            }
            console.log('get answer', data);
            statusRequest(checkSum);
            break;

          case STATUS_DECLINED:
            console.warn('order declined');
            if (res.body.redirect_url) {
                trackProcessing(STATUS_DECLINED);
              decline(res.body.redirect_url);
            }
            stopSpinner();
            break;

          case STATUS_APPROVED:
            console.log('order approved');
            if (res.body.redirect_url) {
                trackProcessing(STATUS_APPROVED);
                approve(res.body.redirect_url);
            }
            stopSpinner();
            break;

            case STATUS_AUTH_OK:
                console.log('order auth_ok');
                if (res.body.redirect_url) {
                    trackProcessing(STATUS_AUTH_OK);
                    authOk(res.body.redirect_url);
                }
                stopSpinner();
                break;

            case STATUS_AUTH_FAILED:
                console.log('order auth_failed');
                if (res.body.redirect_url) {
                    trackProcessing(STATUS_AUTH_OK);
                    authFailed(res.body.redirect_url);
                }
                stopSpinner();
                break;

          case STATUS_VERIFY:
            console.log('order verify');
            if (res.body.verify_url) {
                trackProcessing(STATUS_VERIFY);
              verify(res.body.verify_url);
            }
            stopSpinner();
            break;
        }
      }


      /* if 'processing' make another request */
    });

  target.classList.add('opaque');
  spinner.spin(target);

}

function statusRequest(checkSum) {

  const target = document.querySelector('body');
  const stopSpinner = stopSpinnerWithTarget.bind(undefined, spinner, target);

  let timeNow = new Date();
  timeNow = timeNow.getHours() * 3600 + timeNow.getMinutes() * 60 + timeNow.getSeconds();

  if ((timeNow-startProcessing) >= FORM_SEND_TIME) {
    stopSpinner();
    return false;
  }

  const statusUrlElement = document.querySelector('#signedpay-purchase-status-url');
  if (!statusUrlElement) {
    return;
  }

  const url = statusUrlElement.value;

  request
    .post(url)
    .type('json')
    .send(JSON.stringify({checkSum}))
    .accept('json')
    .set('X-Requested-With', 'XMLHttpRequest')
    .end((err, res) => {

      if (!res) return;

      if (!res.body) {
        res.body = JSON.parse(res.text)
      }

      console.warn('yay got ' + JSON.stringify(res.body));

      if (err || !res.ok) {
        console.error('Oh no! error');
        stopSpinner();
        return;
      }

      if (res.body.error) {
        console.log('status error');
        stopSpinner();
      }

      console.log('get answer', res);
      pushPostMessageWithResponse(res.body);
      if (res.body.order) {
        switch (res.body.order.status) {

          case STATUS_PROCESSING:
            setTimeout(_ => {
              console.log('status processing');
              statusRequest(checkSum)
            }, FORM_SEND_TIMEOUT);
            break;

          case STATUS_DECLINED:
            console.warn('order declined');
            if (res.body.redirect_url) {
                trackProcessing(STATUS_DECLINED);
              decline(res.body.redirect_url);
            }
            stopSpinner();
            break;

          case STATUS_APPROVED:
            console.log('order approved');
            if (res.body.redirect_url) {
                trackProcessing(STATUS_APPROVED);
              approve(res.body.redirect_url);
            }
            stopSpinner();
            break;

            case STATUS_AUTH_OK:
                console.log('order auth_ok');
                if (res.body.redirect_url) {
                    trackProcessing(STATUS_AUTH_OK);
                    authOk(res.body.redirect_url);
                }
                stopSpinner();
                break;

            case STATUS_AUTH_FAILED:
                console.log('order auth_failed');
                if (res.body.redirect_url) {
                    trackProcessing(STATUS_AUTH_OK);
                    authFailed(res.body.redirect_url);
                }
                stopSpinner();
                break;

          case STATUS_VERIFY:
            console.log('order verify');
            if (res.body.verify_url) {
                trackProcessing(STATUS_VERIFY);
              verify(res.body.verify_url);
            }
            stopSpinner();
            break;
        }
      }
    });

  target.classList.add('opaque');
  spinner.spin(target);
}

function pushPostMessageWithResponse(response) {
  try {
    let Messaging = new MessagingSystem();
    let OrderStatusMessage = new OrderStatus('orderStatus', response);

      Messaging.sendToDomParent(OrderStatusMessage, window);

  } catch (err) {
    console.warn('Something went wrong.');
  }
}
