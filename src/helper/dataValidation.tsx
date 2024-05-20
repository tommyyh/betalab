// Validate name
export const validateName = (name: string) => {
  const length = name.length > 0;

  return length;
};

// Validate email
export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Validate telephone prefix number
export const validatePrefix = (prefix: string) => {
  const onePrefix = String(prefix)
    .toLowerCase()
    .match(/^\+(?:[\d]{1})$/);
  const twoPrefixes = String(prefix)
    .toLowerCase()
    .match(/^\+(?:[\d]{2})$/);
  const threePrefixes = String(prefix)
    .toLowerCase()
    .match(/^\+(?:[\d]{3})$/);

  return onePrefix || twoPrefixes || threePrefixes;
};

// Validate telephone number
export const validateTel = (tel: string) => {
  const format = String(tel)
    .toLowerCase()
    .match(/^[0-9]+$/);
  const length = tel.length <= 15;

  return format && length;
};

// Validate msg
export const validateMsg = (msg: string) => {
  const length = msg.length > 0 && msg.length <= 3500;

  return length;
};
