export default (text = "Hello Web!") => {
  const element = document.createElement("h1");

  element.innerHTML = text;

  return element;
};
