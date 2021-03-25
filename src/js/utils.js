export const _ = {
  $: (selector, element = document) => element.querySelector(selector),
  $$: (selector, element = document) => element.querySelectorAll(selector),
};

export const request = async (url) => {
  const data = await fetch(url);
  return data.json();
};

export const getRandom = (value) => parseInt(Math.random().toFixed(2) * value + 1000);

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
