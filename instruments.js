var JSONtbl = [
  {
    "zipcode":"01702",
    "address":"334 CONCORD ST",
    "County":"MIDDLESEX"
  },
  {
    "zipcode":"02482",
    "address":"27 Atwood St",
    "County":"NORFOLK"
  },
  {
    "zipcode":"02459",
    "address":"189 Cypress St",
    "County":"MIDDLESEX"
  }
];
function testFormFields() {
  document.getElementById("zipcode").value = JSONtbl[1].zipcode;
  document.getElementById("address").value = "hardcoded";
}
var instruments = {
  "instruments": [
    {
      "brand": "LAP",
      "type": "Multimeter",
      "model": "MAS830B"
    },
    {
      "brand": "LAP",
      "type": "Multimeter",
      "model": "MS8306D"
    },
    {
      "brand": "KEWTECH",
      "type": "Multimeter",
      "model": "KT111"
    }
  ]
}

function processInstruments() {
    testFormFields();

    var instrument0 = instruments['instruments'][0];
    var instrument1 = instruments['instruments'][1];
    var instrument2 = instruments['instruments'][2];

    document.getElementById("instrument0Brand").innerHTML = instrument0['brand'];
    document.getElementById("instrument0Model").innerHTML = instrument0['model'];
    document.getElementById("instrument0Type").innerHTML = instrument0['type'];
    document.getElementById("instrument1Brand").innerHTML = instrument1['brand'];
    document.getElementById("instrument1Model").innerHTML = instrument1['model'];
    document.getElementById("instrument1Type").innerHTML = instrument0['type'];
    document.getElementById("instrument2Brand").innerHTML = instrument2['brand'];
    document.getElementById("instrument2Model").innerHTML = instrument2['model'];
    document.getElementById("instrument2Type").innerHTML = instrument0['type'];
}
// Customer Dashboard
var customerInstruments = {
  "instruments": [
    {
      "name": "Digital Multimeter",
      "type": "Multimeter",
      "manufacturer": "Fluke",
      "model": "114",
      "serial": "26500991",
      "dateCertified": "11/19/2020",
      "certificate":"link, pdf img"
    }
  ]
}
function processCustomerInstrumentList() {
  var instrument0 = customerInstruments['instruments'][0];
  
  document.getElementById("instrument0Name").innerHTML = instrument0['name'];
  // document.getElementById("instrument0Type").innerHTML = instrument0['type'];
  // document.getElementById("instrument0Manufacturer").innerHTML = instrument0['manufacturer'];
  document.getElementById("instrument0Model").innerHTML = instrument0['model'];
  document.getElementById("instrument0Serial").innerHTML = instrument0['serial'];
  document.getElementById("instrument0DateCertified").innerHTML = instrument0['dateCertified'];
  document.getElementById("instrument0Certificate").innerHTML = instrument0['certificate'];
  
}
//Admin Dashboard - Pullman
var jobs = {
 "jobs": [
   {
    
     "orderNumber": "051672",
     "jobNumber": "01",
     "instrument": "Fluke 114 Multimeter",
     "procedure": "123-abc",
     "company": "ABC Electric",
     "dateRequested": "11/15/2021"
   }
 ]
}

function processMyJobs() {
  var data = jobs['jobs'][0];
  
  
  document.getElementById("jobOrderNumber").innerHTML = data['orderNumber'];
  document.getElementById("jobNumber").innerHTML = data['jobNumber'];
  document.getElementById("jobInstrument").innerHTML = data['instrument'];
  document.getElementById("jobProcedure").innerHTML = data['procedure'];
  document.getElementById("jobCompany").innerHTML = data['company'];
  document.getElementById("jobDateRequested").innerHTML = data['dateRequested'];
  
}

// 10/14/21 Not currently working completely - not removing checkbox (not implemented) leaves blank dropdown 
// for status and leaves driver in assignedTo
function resetMyJobs() {
  var data = jobs['jobs'][0];

  document.getElementById("noStatus").innerHTML = ""; 
  document.getElementById("unassigned").innerHTML = "";
  document.getElementById("jobOrderNumber").innerHTML = "";
  document.getElementById("jobNumber").innerHTML = "";
  document.getElementById("jobInstrument").innerHTML = "";
  document.getElementById("jobProcedure").innerHTML = "";
  document.getElementById("jobCompany").innerHTML = "";
  document.getElementById("jobDateRequested").innerHTML = "";
}

//Delivery Dashboard
var jobs = {
  "jobs": [
    {
     
      "orderNumber": "051672",
      "jobNumber": "01",
      "instrument": "Fluke 114 Multimeter",
      "procedure": "123-abc",
      "company": "ABC Electric",
      "dateRequested": "11/15/2021",
      "assignedTo": "Driver",
      "status": "Schedule"
    }
  ]
 }
function getPickupsToday() {
  var data = jobs['jobs'][0];
  document.getElementById("jobOrderNumber").innerHTML = data['orderNumber'];
  document.getElementById("jobNumber").innerHTML = data['jobNumber'];
  document.getElementById("jobInstrument").innerHTML = data['instrument'];
  document.getElementById("jobProcedure").innerHTML = data['procedure'];
  document.getElementById("jobCompany").innerHTML = data['company'];
  document.getElementById("jobDateRequested").innerHTML = data['dateRequested'];
}

function getMyJobs() {

}
function processDeliveryJobs() {
  getPickupsToday();
  getMyJobs();
}

//Job Details
var jobDetails = {
  "job": [
    {
     
      "jobNumber": "051672-01",
      "dateReceived": "11/15/2021",
      "orderNumber": "051672",
      "invoiceNumber": "456123",
      "dispatchDate": "ABC Electric",
      "calibrationDate": "11/15/2021",
      "calibrationDue": "11/15/2022",
      "certificateNum": "1234567",
      "assignedTo": "Admin",
      "status": "In Progress"
    }
  ],
  "instrumentDetails": [
    {
      "category": "MultiMeter (up to 4 digits)",
      "manufacturer": "Fluke",
      "modelNumber": "114",
      "serialNumber": "26500991",
      "procedureNumber": "123-abc"
    }
  ],
  "testDetails": [
    {
     
      "testTitle": "051672",
      "testType": "01",
      "testRangeStart": "Fluke 114 Multimeter",
      "testRangeEnd": "123-abc"
    }
  ],
  "testInput": [
    {
     
      "testInput1": "051672",
      "testInput2": "01",
      "testInput3": "Fluke 114 Multimeter",
      "testInput4": "123-abc"
    }
  ],
  "certificateDetails": [
    {
     "unkown": "test"
    }
  ],
  "comment": [
    {
      "userName": "Engineer",
      "comments": "Replaced batteries - test able to be run"
    }
  ],
  "jobHistory": [
    {
      "dateTime": "9:05 am 11/10/21",
      "action": "job assigned to Delivery ",
      "employee": "Admin"
    },
    {
      "dateTime": "10:30 am 11/15/21",
      "action": "status changed to Picked Up - In Transit ",
      "employee": "Delivery"
    },
    {
      "dateTime": "11:30 am 11/15/21",
      "action": "status changed to Booked In ",
      "employee": "Delivery"
    },
    {
      "dateTime": "1:30 pm 11/15/21",
      "action": "status changed to Testing In Progress ",
      "employee": "Engineer"
    }
  ]

 }
//this function is called onload - add other functions here
function getJobDetails(){
  getJobSummaryBar();
  getJobInfo();
  getInstrumentDetails();
  
}
function getJobSummaryBar(){
  var data = jobDetails['job'][0];
  var man = jobDetails['instrumentDetails'][0].manufacturer;
  var model = jobDetails['instrumentDetails'][0].modelNumber;
  var category = jobDetails['instrumentDetails'][0].category;
  document.getElementById("summaryUserName").innerHTML = data.assignedTo;
  document.getElementById("summaryJobDateReceived").innerHTML = data.dateReceived;
  document.getElementById("summaryInstrumentManAndModel").innerHTML = man +" "+ model +" "+ category;
  document.getElementById("summaryInstrumentOwner").innerHTML = data.instrumentOwner;
  document.getElementById("summaryJobNumber").innerHTML = data.jobNumber;
  document.getElementById("summaryJobStatus").innerHTML = data.status;

}
function getJobInfo(){
  var data = jobDetails['job'][0];
  // console.log(jobDetails);
  document.getElementById("infoJobNumber").value = data.jobNumber;
  document.getElementById("infoDateReceived").value = data.dateReceived;
  document.getElementById("infoOrderNumber").value = data.orderNumber;
  document.getElementById("infoInvoiceNumber").value = data.invoiceNumber;
  document.getElementById("infoDispatchDate").value = data.dispatchDate;
  document.getElementById("infoCalibrationDate").value = data.calibrationDate;
  document.getElementById("staticCalibrationDue").value = data.calibrationDue;
  document.getElementById("staticCertificateNum").value = data.certificateNum;
}
function getInstrumentDetails(){
  var data = jobDetails['instrumentDetails'][0];
  document.getElementById("description").value = data.category;
  document.getElementById("manufacturer").value = data.manufacturer;
  document.getElementById("modelNumber").value = data.modelNumber;
  document.getElementById("serialNumber").value = data.serialNumber;
  document.getElementById("procedureNum").value = data.procedureNumber;
}
function getTestDetails(){

}
function certificateDetails(){

}
function getComments() {

}
function getJobHistory(){
  var data = jobDetails['jobHistory'][0];
  document.getElementById("").value = JSONtbl[1].address;
}