export const _ = {
  $: (selector, element = document) => element.querySelector(selector),
  $$: (selector, element = document) => element.querySelectorAll(selector),
};

export const url = {
  prod: "http://localhost:9000/prod",
};

export const request = async (url) => {
  const data = await fetch(url);
  return data.json();
};

export const currency = {
  units: [10, 50, 100, 500, 1000, 5000, 10000],
};

export const initNum = 0;

export const defaultValue = 100000;

export const getRandom = (value) => parseInt(Math.random().toFixed(2) * value + 1000);
