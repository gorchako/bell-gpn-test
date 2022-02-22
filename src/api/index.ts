interface FakeItem {
  id: number;
  name: string;
  items: Array<{
    id: number;
    name: string;
  }>;
}

const fakeData: Array<FakeItem> = [];
const names: Array<string> = ["One", "Two", "Three", "Four", "Five"];

export default function fillFakeData() {
  for (let i = 0; i < 100; i++) {
    fakeData.push({
      id: i,
      name: getRandItemFromArr(names),
      items: [],
    });

    for (let j = 0; j < 5; j++) {
      fakeData[i].items.push({
        id: j,
        name: getRandItemFromArr(names),
      });
    }
  }

  return fakeData;
}

function getRandNum(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandItemFromArr(array: Array<any>) {
  return array[getRandNum(0, array.length)];
}
