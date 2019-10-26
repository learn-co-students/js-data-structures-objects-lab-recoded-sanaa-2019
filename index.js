// Write your solution in this file!
const driver ={};
function updateDriverWithKeyAndValue(driver ,key, value){
    const d = {...driver};
    d[key]=value;
    return d;
}
function destructivelyUpdateDriverWithKeyAndValue(driver , key , value){
    driver[key] = value;
    return driver;
}
function destructivelyDeleteFromDriverByKey(driver , key ) {
    delete driver[key];
    return driver;
}
function deleteFromDriverByKey(driver , key ) {
    const d =  {...driver};
    delete d[key];
    return d;
}