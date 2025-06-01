// import { users } from '../assets/mock_users.js'

const users = [
  { id: 1, name: "abc", email: "abc@def.com", password: "abc@123" },
];

export const registerUser = (user) => {
  users.push({ ...user, id: users.length + 1 });
  return true;
};

export const authenticateUser = (reqUser) => {
  let isAuth = false;
  users.forEach((user) => {
    if (user.email === reqUser.email && user.password === reqUser.password) {
      isAuth = true;
    }
  });
  return isAuth;
};
