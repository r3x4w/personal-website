function readingTime(str) {
  const totalCount = str.split(' ').length;
  const wordsPerMinute = 200;
  const minutes = totalCount / wordsPerMinute;
  const displayed = Math.ceil(parseFloat(minutes.toFixed(0)));

  return displayed >= 1 ? displayed : 1;
}

export default readingTime;
