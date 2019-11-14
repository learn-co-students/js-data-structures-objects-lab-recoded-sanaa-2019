// Write your solution in this file!
let driver= { foo: "bar" };
function updateDriverWithKeyAndValue(driver, key, value){
let keyna=key;
  let newdriver=Object.create(driver);
  newdriver[keyna]=value;
 return newdriver;
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]=value;
  return driver;

}
function deleteFromDriverByKey(driver, key){
  let newdriver=Object.assign({},driver);
  let keyna=key;
  delete newdriver[keyna];
   return newdriver;
   
}