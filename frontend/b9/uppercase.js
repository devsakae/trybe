const uppercase = (str, callback) => {
  // console.log(str);
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

module.exports = uppercase;