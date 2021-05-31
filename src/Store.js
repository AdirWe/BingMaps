import create from "zustand";

export const useStore = create((set) => ({
  poligons: [
    {
      center: [70.0827, 80.2707],
      radius: 10,
      points: 10,
      option: { fillColor: "green", strokeThickness: 2 },
    },
    {
      center: [30.0827, 10.2707],
      radius: 30,
      points: 30,
      option: { fillColor: "green", strokeThickness: 2 },
    },
    {
      center: [6.0827, 40.2707],
      radius: 5,
      points: 3,
      option: { fillColor: "green", strokeThickness: 2 },
    },
    {
      center: [40.0827, 90.2707],
      radius: 54,
      points: 10,
      option: { fillColor: "green", strokeThickness: 2 },
    },
  ],

  add: (name, newItem) =>
    set((state) => ({
      [name]: [newItem, ...state[name]],
    })),
  remove: (name, index) =>
    set((state) => ({
      [name]: state[name].filter((_, i) => i !== index),
    })),
  editItem: (name, index, newItem) =>
    set((state) => ({
      [name]: state[name].map((item, i) => {
        if (i !== index) {
          return item;
        }
        return newItem;
      }),
    })),
  init: (name, value) =>
    set(() => ({
      [name]: value,
    })),
}));
