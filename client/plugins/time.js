const timeLeft = (data) => {
  const current = new Date().getTime();
  const numericTime = new Date(data).getTime();
  const gap = current - numericTime;
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;

  if (gap < minute) {
    return "방금";
  } else if (gap < hour) {
    return `${parseInt(gap / minute)}분`;
  } else if (gap < day) {
    return `${parseInt(gap / hour)}시간`;
  } else {
    return `${parseInt(gap / day)}일`;
  }
};

export default function ({}, inject) {
  inject("time", timeLeft);
}
