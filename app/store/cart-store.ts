import { create } from "zustand";

export interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
}

export const useCartStore = create<CartStore>()((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
}));
