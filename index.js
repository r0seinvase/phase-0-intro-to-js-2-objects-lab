const employee = {
    name:"Sam",
    streetAddress: "11 Broadway",
}
function updateEmployeeWithKeyAndValue(Objemployee, key, value){
    const newObj = {...Objemployee};

    newObj[key] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign(employee, { [key]: value})
}
function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee; 
}