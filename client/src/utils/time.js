export default {
  diff_mins: (dt2, dt1) => {
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  },
  diff_hours: (dt2, dt1) => {
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60 * 60;
    return Math.abs(Math.round(diff));
  },

  diff_days: (dt2, dt1) => {
    const oneDay = 1000 * 60 * 60 * 24;
    let diff = dt2.getTime() - dt1.getTime();
    return Math.abs(Math.round(diff / oneDay));
  },
};
