'use server';

import { validateEmail, validateMsg, validateName, validatePrefix, validateTel } from '@/helper/dataValidation';
import nodemailer from 'nodemailer';

export const sendMessage = async (prevState: any, data: FormData) => {
  const { name, email, tel, service, budget, msg, newsletter, prefix } = Object.fromEntries(data);
  const invalidFields = [];
  let isValid = true;

  // Email sending
  const { SMTP_PASS, SMTP_EMAIL, EMAIL_TO } = process.env;
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASS
    }
  });

  // Validate data
  if (!validateName(name.toString())) {
    invalidFields.push({ type: 'name', msg: 'Please enter your full name' });
    isValid = false;
  } else {
    isValid = true;
  }
  
  if (!validateEmail(email.toString())) {
    invalidFields.push({ type: 'email', msg: 'Please enter a properly formatted email address' })
    isValid = false;
  } else {
    isValid = true;
  }
  
  if (!validatePrefix(prefix.toString())) {
    invalidFields.push({ type: 'prefix', msg: 'Please enter a valid prefix number' })
    isValid = false;
  } else {
    isValid = true;
  }
  
  if (!validateTel(tel.toString())) {
    invalidFields.push({ type: 'tel', msg: 'Please provide a valid phone number' })
    isValid = false;
  } else {
    isValid = true;
  }
  
  if (!validateMsg(msg.toString())) {
    invalidFields.push({ type: 'msg', msg: "Please enter details that don't exceed 3500 characters." })
    isValid = false;
  } else {
    isValid = true;
  }

  // Abort if fields aren't valid
  if (!isValid || invalidFields[0]) return { invalidFields, status: 'error' };
  
  // Verify connection
  try {
    await transport.verify();
  } catch (e) {
    return { status: 'error' }
  }

  // Send mail
  try {
    await transport.sendMail({
      from: SMTP_PASS,
      to: EMAIL_TO,
      subject: `Betalab Inquiry: ${service} (${budget})`,
      text: `Name: ${name}\n Email: ${email}\n Phone number: ${prefix} ${tel}\n Budget: ${budget}\n Service: ${service}\n Newsletter: ${newsletter}\n\n Message: ${msg}`
    })

    return { status: 'success' }
  } catch (e) {
    return { status: 'error' }
  }
}