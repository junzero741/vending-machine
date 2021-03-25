const createSectionWithClassname = (app, classname) => {
  const section = document.createElement("section");
  section.classList.add(classname);
  app.appendChild(section);
};

export { createSectionWithClassname };
