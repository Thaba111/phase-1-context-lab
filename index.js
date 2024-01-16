// Function 1
function createEmployeeRecord(arr){
    const employee = {
        firstName : arr[0],
        familyName : arr[1],
        title : arr[2],
        payPerHour : arr[3],
        timeInEvents : [],
        timeOutEvents : []
    }
    return employee
}
// Function 2
function createEmployeeRecords(arrayOfArrays){
    return arrayOfArrays.map(arr => createEmployeeRecord(arr))

}
// Function 3
function createTimeInEvent(employeeRecord, dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    employeeRecord.timeInEvents.push({
      type: 'TimeIn',
      hour: parseInt(hour, 10),
      date: date,
    });
  
    return employeeRecord;
}
// Function 4
function createTimeOutEvent(employeeRecord, dateStamp) {
    const [date, hour] = dateStamp.split(' ')
     employeeRecord.timeOutEvents.push({
        type:'TimeOut',
        hour: parseInt(hour,10),
        date: date,
    })
    
    return employeeRecord
}
// Function 5
function hoursWorkedOnDate(employeeRecord,date) {
    const timeInEvent = employeeRecord.timeInEvents.find(event => event.date == date)
    const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date ==date)

    if(timeInEvent && timeOutEvent){
        const timeIn = timeInEvent.hour ;
        const timeOut = timeOutEvent.hour ;
        let result = timeOut - timeIn
        
        if (result>100){
            function numberToArray(num) {
                return num.toString().split('').map(Number);
            }
            let array = numberToArray(result)
            // console.log(array)
            let newarray = array.slice(0,-2)
            // console.log(newarray)
            result = parseInt(newarray.join(''))
            
            
        }
        
        return result 

    }
    return 0

}
// Function 6
function wagesEarnedOnDate (employeeRecord, date = null){
    const noOfHours = hoursWorkedOnDate(employeeRecord,date)
    const payPerHour = employeeRecord.payPerHour;
    const payAmount = noOfHours * payPerHour
    console.log(payAmount)

    return payAmount

}

// Function 7: allWagesFor (Refactored)
function allWagesFor(employeeRecord) {
    return employeeRecord.timeInEvents.reduce((totalWages, timeInEvent) => {
      return totalWages + wagesEarnedOnDate(employeeRecord, timeInEvent.date);
    }, 0);
  }
  
  // Function 8: calculatePayroll (Refactored)
  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employeeRecord) => {
      return totalPayroll + allWagesFor(employeeRecord);
    }, 0);
  }
  // Function 9
function findEmployeeByFirstName(srcArray,firstName){
    for(let i = 0 ; i<= srcArray.length - 1 ; i++){
        if (srcArray[i].firstName === firstName){
            return srcArray[i]
        }
    }
    return undefined
    
}
