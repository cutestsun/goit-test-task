export const updateArray = (oldArray, newArray) => {
  const oldIds = new Set(oldArray.map((item) => item.id));
  const newIds = new Set(newArray.map((item) => item.id));

  const updatedArray = oldArray.filter((item) => newIds.has(item.id));

  newArray.forEach((item) => {
    if (!oldIds.has(item.id)) {
      updatedArray.push(item);
    }
  });

  return updatedArray;
};
