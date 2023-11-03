import userService from "./user.service";

const validateUsername = async (username: string) => {
  const user = await userService.getUserByParams({ username });
  return user ? false : true;
}

const validateEmail = async (email: string) => {
  const user = await userService.getUserByParams({ email });
  return user ? false : true;
}

const validatePhoneNumber = async (phoneNumber: string) => {
  const user = await userService.getUserByParams({ phoneNumber });
  return user ? false : true;
}

export const validateService = {
  validateUsername,
  validateEmail,
  validatePhoneNumber
}