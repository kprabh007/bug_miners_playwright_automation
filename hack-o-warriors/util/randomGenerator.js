var random_name = require("random-indian-name");

const generateRandomEmail = () => {
  const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
  let email = "";
  for (var i = 0; i < 10; i++) {
    email += chars[Math.floor(Math.random() * chars.length)];
  }
  email = email + "@gmail.com";
  console.log(`email generated - ${email}`);
  return email;
};

const generateRandomPhone = () => {
  const numbers = "1234567890";
  let phone = "9";
  for (var i = 0; i < 9; i++) {
    phone += numbers[Math.floor(Math.random() * numbers.length)];
  }
  console.log(`phone generated - ${phone}`);
  return phone;
};

const generteRandomPassword = () => {
  const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
  let pwd = "";
  for (var i = 0; i < 10; i++) {
    pwd += chars[Math.floor(Math.random() * chars.length)];
  }
  console.log(`password generated - ${pwd}`);
  return pwd;
};

const generateRandomName = () => {
  let fName = random_name({ first: true });
  let lName = random_name({ last: true });
  console.log(`name generated - ${fName}, ${lName}`);
  return {
    firstName: fName,
    lastName: lName,
  };
};

const selectRandomRole = () => {
  const roles = ["Designer", "Developer", "BXD", "QA"];
  const selectedRole = roles.at(Math.floor(Math.random() * 4));
  console.log(`selected role - ${selectedRole}`);
  return selectedRole;
};

const generateUser = () => {
  let name = generateRandomName();
  let user = {
    firstName: name.firstName,
    lastName: name.lastName,
    email: generateRandomEmail(),
    password: generteRandomPassword(),
    phone: generateRandomPhone(),
    role: selectRandomRole(),
  };
  return user;
};

module.exports = { generateUser };
