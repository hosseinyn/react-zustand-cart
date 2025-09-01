import { create } from "zustand";

const useStoreProductsCount = create((set) => ({
  count: 0,
  setCount: (value) => {
    localStorage.setItem("products_count", value);
    set({ count: value });
  },
  increaseCount: () =>
    set((state) => {
      const newCount = state.count + 1;
      localStorage.setItem("products_count", newCount);
      return { count: newCount };
    }),
  decrementCount: () =>
    set((state) => {
      const newCount = state.count - 1;
      localStorage.setItem("products_count", newCount);
      return { count: newCount };
    }),
  removeAllProducts: () => {
    localStorage.setItem("products_count", 0);
    set({ count: 0 });
  },
}));

const useStoreProducts = create((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => {
      const newProducts = [...state.products, product];
      localStorage.setItem("products", JSON.stringify(newProducts));
      return { products: newProducts };
    }),
  setProducts: (value) => {
    set({ products: value });
  },
  removeProduct: (name) =>
    set((state) => {
      const newProducts = state.products.filter(
        (product) => product.name !== name
      );
      localStorage.setItem("products", JSON.stringify(newProducts));
      return { products: newProducts };
    }),
  removeOneProduct: (name) =>
    set((state) => {
      let removed = false;
      const newProducts = state.products.filter((p) => {
        if (!removed && p.name === name) {
          removed = true;
          return false;
        }
        return true;
      });
      localStorage.setItem("products", JSON.stringify(newProducts));
      return { products: newProducts };
    }),
  clearProducts: () => {
    localStorage.setItem("products", JSON.stringify([]));
    set({ products: [] });
  },
}));

const useStorePrice = create((set) => ({
  price: 0,
  increasePrice: (amount) =>
    set((state) => {
      const newPrice = state.price + amount;
      localStorage.setItem("prices", newPrice);
      return { price: newPrice };
    }),
  setPrice: (amount) => {
    localStorage.setItem("prices", amount);
    set({ price: amount });
  },
  decrementPrice: (amount) =>
    set((state) => {
      const newPrice = state.price - amount;
      localStorage.setItem("prices", newPrice);
      return { price: newPrice };
    }),
  clearPrices: () => {
    localStorage.setItem("prices", 0);
    set({ price: 0 });
  },
}));

export { useStoreProductsCount, useStoreProducts, useStorePrice };
