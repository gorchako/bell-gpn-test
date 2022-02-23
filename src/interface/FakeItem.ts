export interface FakeItem {
  id: number;
  name: string;
  items: Array<{
    id: number;
    name: string;
  }>;
}