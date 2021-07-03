/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const remove = (node) => {
  if (node && node.parentNode) {
    node.parentNode.removeChild(node);
    return node;
  }
  return null;
};

const toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);

const attribute = (node, attr, val) => {
  if (node) {
    if (typeof val === 'undefined') {
      return node.getAttribute(attr);
    }
    if (!val && val !== '') {
      node.removeAttribute(attr);
    } else {
      node.setAttribute(attr, String(val));
    }
  }
};

const childElements = (node) => (node ? Array.from(node.children) : []);

const childNodes = (node) => (node ? toArray(node.childNodes) : []);

const clear = (node) => {
  if (node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
    return node;
  }
  return null;
};

const isDocument = (element) =>
  'nodeType' in element && element.nodeType === document.DOCUMENT_NODE;

const isWindow = (node) => {
  if ('window' in node && node.window === node) return node;
  if (isDocument(node)) return node.defaultView || false;

  return false;
};

const hasClass = (element, className) => {
  if (element.classList)
    return !!className && element.classList.contains(className);

  return (
    ` ${element.className.baseVal || element.className} `.indexOf(
      ` ${className} `
    ) !== -1
  );
};

const replaceClassName = (origClass, classToRemove) =>
  origClass
    .replace(new RegExp(`(^|\\s)${classToRemove}(?:\\s|$)`, 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '');

const removeClass = (element, className) => {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute(
      'class',
      replaceClassName(
        (element.className && element.className.baseVal) || '',
        className
      )
    );
  }
};

const addClass = (element, className) => {
  if (element.classList) element.classList.add(className);
  else if (!hasClass(element, className))
    if (typeof element.className === 'string')
      element.className = `${element.className} ${className}`;
    else
      element.setAttribute(
        'class',
        `${(element.className && element.className.baseVal) || ''} ${className}`
      );
};

const toggleClass = (element, className) => {
  if (element.classList) element.classList.toggle(className);
  else if (hasClass(element, className)) removeClass(element, className);
  else addClass(element, className);
};

const qsa = (element, selector) => toArray(element.querySelectorAll(selector));

const parents = (node) => {
  let nextNode = null;
  const nodes = [];

  nextNode = node ? node.parentElement : null;
  while (nextNode && nextNode.nodeType !== 9) {
    nodes.push(nextNode);
    nextNode = nextNode.parentElement || null;
  }

  return nodes;
};

const mapObj = (obj, callback) => {
  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      callback(key, obj[key]);
    }
  }
};

const createElement = (tagName) => document.createElement(tagName);

const createElementsObj = (obj) => {
  const elementObj = {};
  mapObj(obj, (key, value) => {
    elementObj[key] = createElement(value);
  });
  return elementObj;
};

const appendNodes = (elementsObj, obj) => {
  mapObj(obj, (key, value) => {
    value.forEach((node) => {
      elementsObj[key].appendChild(elementsObj[node]);
    });
  });
};

const setClasses = (elementsObj, obj) => {
  mapObj(obj, (key, value) => {
    if (Array.isArray(value)) {
      value.forEach((className) => addClass(elementsObj[key], className));
    } else addClass(elementsObj[key], value);
  });
};

const setTextContents = (elementsObj, obj) => {
  // eslint-disable-next-line no-param-reassign
  mapObj(obj, (key, value) => {
    elementsObj[key].textContent = value;
  });
};
