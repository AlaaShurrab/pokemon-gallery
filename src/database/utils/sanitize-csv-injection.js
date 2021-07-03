const isArray = (a) => Array.isArray(a);

const isObject = (o) =>
  o === Object(o) && !isArray(o) && typeof o !== 'function';

const possibleCsvInject = RegExp(/^(=|"=|\+|"\+|-|"-|@|"@)/);

const sanitizeCSVInjection = (params) => {
  if (isObject(params)) {
    const filteredObj = {};

    Object.entries(params).forEach(([key, _value]) => {
      if (isArray(_value) || isObject(_value)) {
        sanitizeCSVInjection(_value);
      }

      let value = _value;
      if (possibleCsvInject.test(_value)) {
        value = `\t${_value}`;
      }
      filteredObj[key] = value;
    });

    return filteredObj;
  }

  if (isArray(params)) {
    return params.map((value) => sanitizeCSVInjection(value));
  }

  if (typeof params === 'string') {
    let value = params;
    if (possibleCsvInject.test(params)) {
      value = `\t${params}`;
    }
    return value;
  }

  return params;
};

export default sanitizeCSVInjection;
