function getRandNum(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandItemFromArr(array: Array<any>) {
  return array[getRandNum(0, array.length)];
}

function getIndexOfItem(
  targetArr: Array<any>,
  fieldName: string,
  fieldValue: any
) {
  return targetArr.findIndex((item) => item[fieldName] === fieldValue);
}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

function formatDate(date: Date) {
  return {
    date: [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("."),
    time: [padTo2Digits(date.getHours()), padTo2Digits(date.getMinutes())].join(
      ":"
    ),
  };
}

export {
  getRandNum,
  getRandItemFromArr,
  getIndexOfItem,
  padTo2Digits,
  formatDate,
};
