import emailjs from 'emailjs-com';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

export function sendEmail(data) {
  if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
    console.warn('EmailJS keys not set. Message will be logged only.');
    console.log('Email message:', data);
    return Promise.resolve('No email was sent. Keys missing.');
  }

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID);
}
