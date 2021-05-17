export const convertMS = (milliseconds, time) => {
  var day, hour, minute, seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  if (time === 'hour') {
    if (hour > 12) {
      return hour - 17;
    } else {
      return hour - 5;
    }
  } else if (time === 'minute') {
    return minute;
  }
};
