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

export { getRandNum, getRandItemFromArr, getIndexOfItem };
