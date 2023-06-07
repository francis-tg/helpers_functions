
const compositions = [
  {
    price:750,
    productName:"Lager",
   
   
  },
   {
    price:750,
    productName:"Lager2",
 
   
  },
  {
    price:750,
    productName:"Fufu",
    tag:8188
  },
  {
    price:750,
    productName:"Soupe de porc",
    tag:8188
  }
]
function groupObjectsByValue(objects, key) {
  const groupedObjects = {};

  for (const object of objects) {
    const value = object[key];
    if (groupedObjects[value]) {
      groupedObjects[value].push(object);
    } else {
      groupedObjects[value] = [object];
    }
  }

  return Object.values(groupedObjects);
}

console.log(groupObjectsByValue(compositions,"tag"))

