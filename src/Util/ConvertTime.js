/**
 *
 * @param {int} time time in seconds since midnight
 * @returns hour:min since midnight or minutes if time is less than 60 minutes away from current time
 */
export default function ConvertTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);

  function secondsSinceMidnight() {
    var d = new Date(),
      e = new Date(d);
    return (e.getTime() - d.setHours(0, 0, 0, 0)) / 1000;
  }
  if (
    (time - secondsSinceMidnight() < 3000) &
    (time - secondsSinceMidnight() > 0)
  ) {
    return `${Math.round((time - secondsSinceMidnight()) / 60)} min`;
  } else {
    return `${hours}:${minutes.toString().padStart(2, "0")}`;
  }
}
