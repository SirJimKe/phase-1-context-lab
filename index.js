/* Your Code Here */
function createEmployeeRecord(employeeArray){
    const employeeObj = {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    return employeeObj;
}

function createEmployeeRecords(records) {

    return records.map(createEmployeeRecord)
}

function createTimeInEvent(timeStamp){

    const timeInObj = {
        type: "TimeIn",
        hour: parseInt(timeStamp.split(' ')[1]),
        date: timeStamp.split(" ")[0] 
    }
    this.timeInEvents.push(timeInObj)
    return this;

}

function createTimeOutEvent(timeStamp){

    const timeOutObj = {
        type: "TimeOut",
        hour: parseInt(timeStamp.split(' ')[1]),
        date: timeStamp.split(" ")[0] 
    }
    this.timeOutEvents.push(timeOutObj)
    return this;
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(day => date === day.date)
    const timeOut = this.timeOutEvents.find(day => day.date)
    return(timeOut.hour - timeIn.hour) /100;

}

function wagesEarnedOnDate(date){
    const rate = this.payPerHour;
    return hoursWorkedOnDate.call(this, date)*rate;
}

function calculatePayroll(array){
    return array.reduce((memo, rec) => {memo + allWagesFor.call(rec), 0})
}

function findEmployeeByFirstName(arr, firstName){
    let employee = arr.find((record) => record.firstName === firstName)

    return employee
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

