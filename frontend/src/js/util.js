//------------------------✻✻✻ 유틸리티 ✻✻✻--------------------------

export const _ = {
    $: (selector) => document.querySelector(selector),
    $all: (selector) => document.querySelectorAll(selector),
    addClass: (node, className) => node.classList.add(className),
    removeClass: (node, className) => node.classList.remove(className),
    setToggle: (node, className) => node.classList.toggle(className),
    contains: (node, className) => node.classList.contains(className),
    removeTransform: (node, attributeName) => node.removeAttribute(attributeName),
    addEvent: (node, event, callback) => node.addEventListener(event, callback),
    setStorageItem: (name, item) => localStorage.setItem(name, JSON.stringify(item)),
    getStorageItem: (item) => item ? JSON.parse(localStorage.getItem(item)) : []
}
