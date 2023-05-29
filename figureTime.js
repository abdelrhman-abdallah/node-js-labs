const configureGreeting = (date) => {
  let greeting = "";
  let timeinHour = date.getHours();
  if (timeinHour >= 0 && timeinHour < 5) {
    greeting =
      "THIS IS MADNESS ITS AFTER MIDNIGHT WHAT ARE YOU DOING HERE !!!!!!!!!!!!";
  } else if (timeinHour >= 5 && timeinHour < 12) {
    greeting = "Good Morning!!!";
  } else if (timeinHour >= 12 && timeinHour < 19) {
    greeting = "Good Afternoon!!!";
  } else {
    greeting = "Good Evenning!!!";
  }
  return greeting;
};

module.exports = configureGreeting;
