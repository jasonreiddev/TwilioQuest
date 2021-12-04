let getLaserSetting = (password) => (password == "please" ? "OFF" : "ON");

console.log(getLaserSetting());
console.log(getLaserSetting("please"));
