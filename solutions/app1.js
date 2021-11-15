const converterPromise = (arr = []) => new Promise((resolve, reject) => {
  const isStrings = arr.every((v) => typeof v === 'string');
  if (!isStrings) { reject('Error: Not all elements are string type!'); } else { resolve(arr.map((v) => v.toUpperCase())); }
});

// export default converterPromise;
export default converterPromise;
