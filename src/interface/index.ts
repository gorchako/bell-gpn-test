export interface FakeItem {
  id: number;
  name: string;
  items: Array<{
    id: number;
    name: string;
  }>;
  isSelected?: boolean;
}

export interface ItemAction {
  action: string;
  item: FakeItem;
  date: object;
}

export interface State {
  items: Array<FakeItem>;
  actionsHistory: Array<ItemAction>;
}