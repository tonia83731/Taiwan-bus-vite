export function MakeTime(time) {
  // if(!time) return

  const makeTime = new Date(time);
  // if(isNaN(time)) return time

  const year = makeTime.getFullYear();
  const month = makeTime.getMonth() + 1;
  const day = makeTime.getDate();
  let hour = makeTime.getHours();
  let mins = makeTime.getMinutes();

  hour = hour > 12 ? `下午 ${hour - 12}` : `上午 ${hour}`;
  mins = mins.toString().padStart(2, "0");

  return `${hour}: ${mins} · ${year} 年 ${month} 月 ${day} 日`;
}
