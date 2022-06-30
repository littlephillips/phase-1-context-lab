/* Your Code Here */

function createEmployeeRecord(employee){
  return {
  
    firstName :employee[0],
    familyName : employee[1],
    title : employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
  
  }
}

function createEmployeeRecords(employeeData){
  return employeeData.map(employee => {
     return  createEmployeeRecord(employee)
    })
  }

function createTimeInEvent ( dateStamp){
  let [date, hour] = dateStamp.split(" ")

    this.timeInEvents.push({
    type : "TimeIn",
    hour : parseInt(hour, 10),
    date,
  })
  return this;
}


function createTimeOutEvent( dateStamp){
  let [date, hour] = dateStamp.split(" ")

    this.timeOutEvents.push({
    type : "TimeOut",
    hour : parseInt(hour, 10),
    date,
  })
  return this;
}

function hoursWorkedOnDate(specificDate){
  let hoursWorked =this.timeInEvents.find(event => {
    return event.date === specificDate;
  })

  let hoursOff = this.timeOutEvents.find(event => {
    return event.date === specificDate;
  })
  return (hoursOff.hour - hoursWorked.hour) / 100
 }


function wagesEarnedOnDate ( specificDate){
  let wagesOwed = hoursWorkedOnDate.call(this, specificDate)
  * this.payPerHour;
  return parseFloat(wagesOwed.toString())
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



let findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(function(rec){
      return rec.firstName === firstName
    })
  }
  
  let calculatePayroll = function(arrayOfEmployeeRecords){
      return arrayOfEmployeeRecords.reduce(function(memo, rec){
          return memo + allWagesFor.call(rec)
      }, 0)
  }
  
  