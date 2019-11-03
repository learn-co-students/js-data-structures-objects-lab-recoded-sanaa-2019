// Write your solution in this file!

const driver={
    name: "taghreed",
    age: 26
};

function updateDriverWithKeyAndValue(driver, key, value){
    let driver2= Object.assign({}, driver, { [key]: value });
    console.log(driver2);
    return driver2;
    
}

updateDriverWithKeyAndValue(driver, "name", "Reham");
//console.log(updateDriverWithKeyAndValue(drivers, "name", "Reham"))
console.log(driver)

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    let driver3= driver;
    driver3[key]=value;
    console.log(driver3);
    return driver3;
}
destructivelyUpdateDriverWithKeyAndValue(driver, "age", "40");
console.log(driver)

function deleteFromDriverByKey(driver, key){
    let driver4 = Object.assign({},driver);
    delete driver4[key];
    console.log(driver4);
    return driver4;
}
deleteFromDriverByKey(driver, "age")
console.log(driver)

function destructivelyDeleteFromDriverByKey(driver, key){
    let driver5=driver;
    delete driver5[key];
    console.log(driver5);
    return driver5;
}
destructivelyDeleteFromDriverByKey(driver, "name")
console.log(driver)
