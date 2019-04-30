const arrayToObject = (array) => {
  return array.reduce((acc, value) => {
    if (value) acc[value] = true;
    return acc;
  }, {});
};

export const generateClassName = (elementClass, modifiers, noElementClass = false) => {
  if (!modifiers) return elementClass;
  const modifiersObject = typeof modifiers === 'string' ? arrayToObject(modifiers.split(' ')) :
    ((modifiers instanceof Array) ? arrayToObject(modifiers) : modifiers);
  const modifiersClasses = Object.keys(modifiersObject).reduce((acc, key) => {
    const modifier = modifiersObject[key];
    const value = (typeof modifier === 'function') ? modifier() : modifier;
    if (value) acc.push(`${elementClass}--${key}`);
    return acc;
  }, []);
  return (noElementClass ? modifiersClasses : [elementClass, ...modifiersClasses]).join(' ');
};
