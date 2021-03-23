//------------------------✻✻✻ 유틸리티 ✻✻✻--------------------------

const _ = {
    $: (selector, target = document) => target.querySelector(selector),
    $all: (selector, target = document) => target.querySelectorAll(selector),
    addClass: (node, className) => node.classList.add(className),
    removeClass: (node, className) => node.classList.remove(className),
    setToggle: (node, className) => node.classList.toggle(className),
    contains: (node, className) => node.classList.contains(className),
    removeTransform: (node, attributeName) => node.removeAttribute(attributeName),
    addEvent: (node, event, callback) => node.addEventListener(event, callback),
    setStorageItem: (name, item) => localStorage.setItem(name, JSON.stringify(item)),
    getStorageItem: (item) => item ? JSON.parse(localStorage.getItem(item)) : []
};

export const delay = (ms, data = null) =>
    new Promise((resolve) => setTimeout(() => resolve(data), ms));

export const isKorEngNum = (str) => /[a-zA-Z0-9ㄱ-힣]/gi.test(str);
export const isPossibleInput = (str) => /Key|Numpad|Digit|Backspace/g.test(str);

export default _;