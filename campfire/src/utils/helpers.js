/**
 * Returns true if the given email is of valid form, as determined by regex
 * @param {string} email
 */
export const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

/**
 * Returns true if the email is unique (unused); otherwise false
 * @param {string} email
 */
export const isUnusedEmail = email => true;

/**
 * Returns the appropriate college for the given email
 * @param {string} email
 */
export const extractCollege = (email) => {
  // TODO: extract and store the college name from the username (probably with some sort of "College ID")
};
