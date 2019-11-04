// Write your solution in this file!

const driver={color:"red",shape:"shpere"}
function updateDriverWithKeyAndValue(driver, key, value){
    let driver1= Object.assign({}, driver, { [key]: value });
    return driver1;
    
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    let driver2= driver;
    driver2[key]=value;
    return driver2;
}



function deleteFromDriverByKey(driver, key){
    let driver3 = Object.assign({},driver);
    delete driver3[key];
    return driver3;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    let driver4=driver;
    delete driver4[key];
    return driver4;
}

