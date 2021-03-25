import { _ } from './const';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const createRandomNumber = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);
const moneyComma = (num) => {
  const arr = num.toString().split('');
  const comma = arr.reduce((acc, cur, idx) => {
    if (idx % 3 === arr.length % 3) {
      cur = `,${cur}`;
    }
    acc += cur;
    return acc;
  });
  return comma;
};

const updateInputData = (className, data) => {
  const inputClassName = $(`.${className}`);
  inputClassName.value = `${moneyComma(data)} ${_.money}`;
};

const isEmpty = (data) => +data === 0;
const changeSoldOutColor = (element) => (element.disabled = true);

export { $, $$, createRandomNumber, moneyComma, updateInputData, isEmpty, changeSoldOutColor };
