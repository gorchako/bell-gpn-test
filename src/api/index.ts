import { FakeItem } from "@/interface";
import { getRandItemFromArr } from "@/helpers";

export default function fillFakeData() {
  const fakeData: Array<FakeItem> = [];
  const names: Array<string> = ["One", "Two", "Three", "Four", "Five"];

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
