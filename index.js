// Write your solution in this file

let driver = {"name":"Mohammed"};



function updateDriverWithKeyAndValue(driver, key, value){
    let NewObj= Object.assign({},driver, {[key]:value});
    console.log(NewObj);
    return NewObj;
    
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key,value){
    
    return Object.assign(driver,{[key]:value});
}

function deleteFromDriverByKey(driver, key){
    let nOb=Object.assign({},driver);
    delete nOb[key];
    return nOb; 
}
function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    console.log(driver);
    return driver;
}
updateDriverWithKeyAndValue(driver,"age","25");
console.log(drivers);
destructivelyUpdateDriverWithKeyAndValue(driver,"age","25");

deleteFromDriverByKey(driver,"age");
destructivelyDeleteFromDriverByKey(driver,"age");
