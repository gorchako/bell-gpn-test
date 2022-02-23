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
  date: string;
}

export interface State {
  items: Array<FakeItem>;
  actionsHistory: Array<ItemAction>;
  isItemsLoaded: boolean;
  isLoading: boolean;
}