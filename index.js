// Write your solution in this file!
const driver = {
  name: 'Sam',
  address: '12 Broadway'
};

function updateDriverWithKeyAndValue(driver,key,value){
  return Object.assign({},driver,{[key]:value});
}
function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
  return Object.assign(driver,{[key]:value});
}
function deleteFromDriverByKey(driver,key){
  const obj = Object.assign({},driver);
  delete obj[key];
  return obj;
}
function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key];
  return driver;
}
