const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordPattern = /^[0-9a-zA-Z]+$/;

export const isEmailValid = (
  value: string,
  message = 'Please enter a valid email address!',
) => {
  if (!emailPattern.test(value)) return message;
  else {
    return;
  }
};

export const isPasswordValid = (
  value: string,
  message = 'Password Must be alphanumeric e.g @!Afu/12.',
) => {
  if (passwordPattern.test(value)) return message;
};
