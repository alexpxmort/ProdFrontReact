
export const setPropertySelect = (obj:any) => {
  const _obj = {
    value: obj.id,
    label: obj.name ? obj.name : (
      obj.nome ? obj.nome : ''
    ),
  };

  return _obj;
};

export const isArray = function (obj:any) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

export const initializeOptionsSelect = (options:any, isObject = false) => {
  const _options = options.reduce((optionTransform:any, optionActual:any) => {
    optionTransform = [...optionTransform, {
      value: (isObject) ? optionActual : optionActual.id,
      label: optionActual.name ? optionActual.name : (
        optionActual.nome ? optionActual.nome : ''
      ),
    }];

    return optionTransform;
  }, [{
    value: null,
    label: '-----',
  }]);



  return _options;
};
