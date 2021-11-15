const sorterPromise = (arr = []) => new Promise((resolve, reject) => {
  const isStrings = arr.every((v) => typeof v === 'string');
  isStrings ? resolve(arr.sort()) : reject('Error: Not all elements are string type!');
});

// export default sorterPromise;
export default sorterPromise;
