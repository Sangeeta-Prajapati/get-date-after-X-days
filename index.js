const addDays = require("date-fns/addDays");
const getDateAfterGivenDate = (days) => {
  const newDate = addDays(new Date(2020, 07, 22), day);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  } - ${newDate.getFullYear()}`;
};
module.exports = getDateAfterGivenDate;
