import request from 'superagent';
import 'spin/dist/spin.min';

import {showErrors} from './error-result';
import {decline} from './decline-result';
import {approve} from './approved-result';

import {opts} from './spinner-opts';
import {FORM_NAME} from '../constants';

import {
  STATUS_APPROVED,
  STATUS_DECLINED,
  STATUS_PROCESSING,
  STATUS_ERROR
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
    .set('Accept', 'application/json')
    .set('X-Requested-With', 'XMLHttpRequest')
    .end((err, res) => {

      if (!res) return;

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

      if (res.body.order) {
        switch (res.body.order.status) {

          case STATUS_PROCESSING:
            var checkSum = data;

            if (typeof(data) == 'object') {
              checkSum = data[FORM_NAME].checksum;
            }
            console.log('get answer', data);

            statusRequest(checkSum, $form);

            break;

          case STATUS_DECLINED:
            console.warn('order declined');
            if (res.body.redirect_url) {
              decline(res.body.redirect_url);
            }
            stopSpinner();
            break;

          case STATUS_APPROVED:
            console.log('order approved');
            if (res.body.redirect_url) {
              approve(res.body.redirect_url);
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

function statusRequest(checkSum, $form) {

  const target = document.querySelector('body');
  const stopSpinner = stopSpinnerWithTarget.bind(undefined, spinner, target);

  var timeNow = new Date();
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
    .set('Accept', 'application/json')
    .set('X-Requested-With', 'XMLHttpRequest')
    .end((err, res) => {

      if (!res) return;

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
              decline(res.body.redirect_url);
            }
            stopSpinner();

            break;

          case STATUS_APPROVED:
            console.log('order approved');
            if (res.body.redirect_url) {
              approve(res.body.redirect_url);
            }
            stopSpinner();

            break;
        }
      }
    });

  target.classList.add('opaque');
  spinner.spin(target);
}
