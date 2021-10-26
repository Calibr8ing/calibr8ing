var jobDetails = {
  "statusOptions": [
     {
       "newJob": "New Job",
       "newPickup": "Pickup",
       "newCourier": "Courier",
       "inHouse": "In House",
       "driving": "In Transit",
       "delivered": "Delivered",
       "bookedIn": "Booked In",
       "testInProgress": "Test In Progress",
       "certificateRequest": "Certificate Requested",
       "certificateProcessing": "Certificate Processing",
       "invoiced": "Invoiced",
       "paidInFull": "Paid In Full"
     }
   ],
 "employees": [
     {
       "admin": "Admin",
       "driver": "Delivery",
       "labTech": "Lab Tech",
       "signingMgr": "Signing Mgr"
     }
   ],
   "job": [
     {
       //#0
       "jobNumber": "051672-01",
       "dateReceived": "11/15/2021",
       "dateCompleted": "",
       "orderNumber": "051672",
       "invoiceNumber": "456123",
       "dispatchDate": "",
       "calibrationDate": "11/15/2021",
       "calibrationDue": "11/15/2022",
       "certificateNum": "1234567",
       "assignedTo": "Admin",
       "status": "In Progress",
       "instrumentCategory": "MultiMeter (up to 4 digits)",
       "instrumentManufacturer": "Fluke",
       "instrumentModelNumber": "114",
       "instrumentSerialNumber": "26500991",
       "instrumentProcedureNumber": "123-abc",
       "procedurePrice": "49.50",
       "contactName": "Shaun Smith",
       "company": "ABC Electric Co",
       "address": "24 Erica Rd, Stacey Bushes, Milton Keynes MK12 6HS, UK",
       "calibrationLocation": "Central",
       "testDetails": [
           {
             "testTitle": "Resistance Measurements",
             "testStep": "01",
             "testType": "123-abc",
             "testRangeStart": "200 ohm",
             "testInput": "Short",
             "display": "00.0 to 00.5",
             "actualDisplay": " ",
             "passFail": "pass",
             "comments": " "
           },
           {
            "testTitle": "Resistance Measurements",
            "testStep": "02",
            "testType": "123-abc",
            "testRangeStart": "2 k ohm",
            "testInput": "Short",
            "display": "0.000 to 0.001",
            "actualDisplay": " ",
            "passFail": "pass",
            "comments": " "
          },
          {
            "testTitle": "Resistance Measurements",
            "testStep": "03",
            "testType": "123-abc",
            "testRangeStart": "20 k ohm",
            "testInput": "1 k ohm",
            "display": ".998 to 1.002",
            "actualDisplay": "",
            "passFail": "pass",
            "comments": ""
          },
          {
            "testTitle": "Resistance Measurements",
            "testStep": "04",
            "testType": "123-abc",
            "testRangeStart": "20 k ohm",
            "testInput": "10 k ohm",
            "display": "9.98 to 10.02",
            "actualDisplay": "",
            "passFail": "pass",
            "comments": ""
          },
          {
            "testTitle": "Resistance Measurements",
            "testStep": "05",
            "testType": "123-abc",
            "testRangeStart": "200 k ohm",
            "testInput": "100 k ohm",
            "display": "99.8 to 100.2",
            "actualDisplay": "",
            "passFail": "pass",
            "comments": ""
          },
          {
            "testTitle": "Resistance Measurements",
            "testStep": "06",
            "testType": "123-abc",
            "testRangeStart": "2000 k ohm",
            "testInput": "1 M ohm",
            "display": "998 to 1002",
            "actualDisplay": "",
            "passFail": "pass",
            "comments": ""
          },
          {
            "testTitle": "Resistance Measurements",
            "testStep": "07",
            "testType": "123-abc",
            "testRangeStart": "2000 M ohm",
            "testInput": "Open",
            "display": "0.10 to 00.00",
            "actualDisplay": "",
            "passFail": "pass",
            "comments": ""
          }
        ]
       },
     {
       //#1
       "jobNumber": "051671-02",
       "dateReceived": "11/12/2021",
       "dateCompleted": "",
       "orderNumber": "051671",
       "invoiceNumber": "456121",
       "dispatchDate": "",
       "calibrationDate": "11/14/2021",
       "calibrationDue": "11/14/2022",
       "certificateNum": "1234566",
       "assignedTo": "Admin",
       "status": "In Progress",
       "instrumentCategory": "Spectrum",
       "instrumentManufacturer": "AdvanTest",
       "instrumentModelNumber": "R3131",
       "instrumentSerialNumber": "31407083",
       "instrumentProcedureNumber": "455-spt",
       "procedurePrice": "39.50",
       "contactName": "Jeff Anderson",
       "company": "Harigate Electric",
       "address": "",
       "calibrationLocation": "Harigate"
     },
     {
       //#2
       "jobNumber": "051671-03",
       "dateReceived": "11/12/2021",
       "dateCompleted": "",
       "orderNumber": "051671",
       "invoiceNumber": "456121",
       "dispatchDate": "",
       "calibrationDate": "11/14/2021",
       "calibrationDue": "11/14/2022",
       "certificateNum": "1234566",
       "assignedTo": "Admin",
       "status": "In Progress",
       "instrumentCategory": "Voltage Source/Monitor",
       "instrumentManufacturer": "AdvanTest",
       "instrumentModelNumber": "TR6143",
       "instrumentSerialNumber": "35234214",
       "instrumentProcedureNumber": "632-vlt",
       "procedurePrice": "69.50",
       "contactName": "Jeff Anderson",
       "company": "Harigate Electric",
       "address": "",
       "calibrationLocation": "Harigate"
     },
     {
       //#3
      "jobNumber": "051673-01",
      "dateReceived": "11/17/2021",
      "dateCompleted": "",
      "orderNumber": "051673",
      "invoiceNumber": "456127",
      "dispatchDate": "",
      "calibrationDate": "",
      "calibrationDue": "11/17/2021",
      "certificateNum": "1234577",
      "assignedTo": "Admin",
      "status": "Courier - In Transit",
      "instrumentCategory": "Megohmmeter",
      "instrumentManufacturer": "3M",
      "instrumentModelNumber": "701",
      "instrumentSerialNumber": "84156254",
      "instrumentProcedureNumber": "987-mgh",
      "procedurePrice": "89.50",
      "contactName": "Sue Christiansen",
       "company": "Hindley Engineering",
       "address": "",
       "calibrationLocation": "Wigan"
      },
      {
        // #4
      "jobNumber": "051674-01",
      "dateReceived": "",
      "dateCompleted": "",
      "orderNumber": "051674",
      "invoiceNumber": "456125",
      "dispatchDate": "",
      "calibrationDate": "",
      "calibrationDue": "11/16/2021",
      "certificateNum": "1234575",
      "assignedTo": "Admin",
      "status": "New Pickup",
      "instrumentCategory": "Clampmeter",
      "instrumentManufacturer": "FlexiClamp",
      "instrumentModelNumber": "A54X",
      "instrumentSerialNumber": "12453424",
      "instrumentProcedureNumber": "453-clp",
      "procedurePrice": "29.50",
      "contactName": "Robert Bailey",
        "company": "XYZ Electric",
        "address": "",
        "calibrationLocation": "Weston-super-Mare"
    },
    {
      //#5
      "jobNumber": "051674-02",
      "dateReceived": "",
      "dateCompleted": "",
      "orderNumber": "051674",
      "invoiceNumber": "456125",
      "dispatchDate": "",
      "calibrationDate": "",
      "calibrationDue": "11/16/2021",
      "certificateNum": "1234576",
      "assignedTo": "Admin",
      "status": "New Pickup",
      "instrumentCategory": "Clampmeter",
      "instrumentManufacturer": "FlexiClamp",
      "instrumentModelNumber": "A56X",
      "instrumentSerialNumber": "12453564",
      "instrumentProcedureNumber": "453-clp",
      "procedurePrice": "29.50",
      "contactName": "Robert Bailey",
      "company": "XYZ Electric",
      "address": "",
      "calibrationLocation": "Weston-super-Mare"
    },
    //jobs for engineer my jobs
    {
      //#6
      "jobNumber": "051676-01",
      "dateReceived": "11/16/2021",
      "dateCompleted": "",
      "orderNumber": "051678",
      "invoiceNumber": "456155",
      "dispatchDate": "",
      "calibrationDate": "",
      "calibrationDue": "11/16/2021",
      "certificateNum": "",
      "assignedTo": "LabTech",
      "status": "Booked In",
      "instrumentCategory": "Megohmmeter",
      "instrumentManufacturer": "3M",
      "instrumentModelNumber": "701",
      "instrumentSerialNumber": "84156254",
      "instrumentProcedureNumber": "987-mgh",
      "procedurePrice": "89.50",
      "contactName": "Robert Bailey",
      "company": "XYZ Electric",
      "address": "48 Warner Close, Hatton, SY6 8XS, UK ",
      "calibrationLocation": "Central"
    },
    {
      //#7
      "jobNumber": "051677-01",
      "dateReceived": "11/16/2021",
      "dateCompleted": "",
      "orderNumber": "051677",
      "invoiceNumber": "456145",
      "dispatchDate": "",
      "calibrationDate": "",
      "calibrationDue": "11/16/2021",
      "certificateNum": "",
      "assignedTo": "LabTech",
      "status": "Booked In",
      "instrumentCategory": "Clampmeter",
      "instrumentManufacturer": "FlexiClamp",
      "instrumentModelNumber": "A56X",
      "instrumentSerialNumber": "12453564",
      "instrumentProcedureNumber": "453-clp",
      "procedurePrice": "29.50",
      "contactName": "Robert Bailey",
      "company": "XYZ Electric",
      "address": "48 Warner Close, Hatton, SY6 8XS, UK ",
      "calibrationLocation": "Central"
    },
    {
      //#8
      "jobNumber": "051677-02",
      "dateReceived": "11/16/2021",
      "dateCompleted": "",
      "orderNumber": "051677",
      "invoiceNumber": "456145",
      "dispatchDate": "",
      "calibrationDate": "",
      "calibrationDue": "11/16/2021",
      "certificateNum": "",
      "assignedTo": "Admin",
      "status": "Booked In",
      "instrumentCategory": "Clampmeter",
      "instrumentManufacturer": "FlexiClamp",
      "instrumentModelNumber": "A56X",
      "instrumentSerialNumber": "12453564",
      "instrumentProcedureNumber": "453-clp",
      "procedurePrice": "29.50",
      "contactName": "Robert Bailey",
      "company": "XYZ Electric",
      "address": "48 Warner Close, Hatton, SY6 8XS, UK ",
      "calibrationLocation": "Central"
    },
    
   ],
   "parts":[
     {
       "stockNumber": "8236-463",
       "category": "Batteries",
       "part": "AAA",
       "qty": "",
       "cost": "1.12",
       "price": "1.25",
       "total": "0"
     },
     {
      "stockNumber": "8236-463",
      "category": "Batteries",
      "part": "AA",
      "qty": "",
      "cost": "1.15",
      "price": "1.30",
      "totalCost": "6.90",
      "totalPrice": "7.80",

    },
    {
      "stockNumber": "8236-463",
      "category": "Batteries",
      "part": "9v",
      "qty": "",
      "cost": "2.20",
      "price": "2.45",
      "total": ""
    },
    {
      "stockNumber": "1006-454",
      "category": "Lead - Test",
      "part": "Megger TL#-C9v",
      "qty": "",
      "cost": "7.20",
      "price": "8.45",
      "total": ""
    }
   ]
   
 }

 function instrumentLoad(){
  var data = jobDetails['job'][0];
  var man = jobDetails['job'][0].instrumentManufacturer;
   var category = jobDetails['job'][0].instrumentCategory;

   document.getElementById("instrumentName").innerHTML = man + " " + category;
   document.getElementById("instrumentModel").innerHTML = data.instrumentModelNumber;
   document.getElementById("serialNumber").innerHTML = data.instrumentSerialNumber;
   document.getElementById("certificationDate").innerHTML = data.calibrationDate;
   document.getElementById("certificationLocation").innerHTML = data.calibrationLocation;
   
 }
 function getCustomerAddress(){
  var data = jobDetails['job'][0];
  
  document.getElementById("street").innerHTML = "24 Erica Rd";
   document.getElementById("town").innerHTML = "Stacey Bushes, Milton Keynes";
   document.getElementById("postcode").innerHTML = "MK12 6HS";
   document.getElementById("country").innerHTML = "UK";
 }
 //certificates
function processCertificates(){
    getCertificates();
}
function getCertificates(){
     var data = jobDetails['job'][0];


   document.getElementById("jobOrderNumber").innerHTML = data.orderNumber;
   document.getElementById("jobNumber").innerHTML = data.jobNumber;
   document.getElementById("certificateNum").innerHTML = data.certificateNum;
   document.getElementById("instrumentManufacturer").innerHTML = data.instrumentManufacturer;
   document.getElementById("jobInstrument").innerHTML = data.instrumentCategory;
   document.getElementById("jobCompany").innerHTML = data.company;
   document.getElementById("jobDateRequested").innerHTML = data.dateReceived;
   document.getElementById("status").innerHTML = "Awaiting Certification";
}
function processCustomerInstrumentList2() {
  var data = jobDetails['job'][0];
  //get current orders
  document.getElementById("orderNumber").innerHTML = data.orderNumber;
  document.getElementById("status").innerHTML = "Order Submitted";
  document.getElementById("orderDate").innerHTML = data.dateReceived;

  //getExpiringSoon
  document.getElementById("instrumentCategory").innerHTML = data.instrumentCategory;
  document.getElementById("instrumentModelNumber").innerHTML = data.instrumentModelNumber;
  document.getElementById("instrumentSerialNumber").innerHTML = data.instrumentSerialNumber;
  document.getElementById("calibrationDate").innerHTML = data.calibrationDue;
  document.getElementById("instrument0Certificate").innerHTML = " ";

}
 //Index
  function processCustomerInstrumentList() {
        getCustomerInstruments();
        getCustomerInvoice();

 }
 function getCustomerInstruments(){
    var data = jobDetails['job'][0];

    document.getElementById("instrumentCategory").innerHTML = data.instrumentCategory;
    // document.getElementById("instrument0Type").innerHTML = instrument0['type'];
    // document.getElementById("instrument0Manufacturer").innerHTML = instrument0['manufacturer'];
    document.getElementById("instrumentModelNumber").innerHTML = data.instrumentModelNumber;
    document.getElementById("instrumentSerialNumber").innerHTML = data.instrumentSerialNumber;
    document.getElementById("calibrationDate").innerHTML = data.calibrationDue;
    document.getElementById("instrument0Certificate").innerHTML = " ";

 }
 function getCustomerInvoice(){
    var data = jobDetails['job'][0];


   document.getElementById("jobOrderNumber").innerHTML = data.orderNumber;
   document.getElementById("jobNumber").innerHTML = data.jobNumber;
   document.getElementById("invoiceNumber").innerHTML = data.invoiceNumber;
   document.getElementById("instrumentManufacturer").innerHTML = data.instrumentManufacturer;
   document.getElementById("jobInstrument").innerHTML = data.instrumentCategory;
   document.getElementById("jobDateRequested").innerHTML = data.dateReceived;
   document.getElementById("paymentStatus").innerHTML = "Awaiting Payment";
 }
 //Job Details

 function getJobDetails(){
   getJobSummaryBar();
   getJobInfo();
   getInstrumentDetails();
   
 }
 function getJobSummaryBar(){
   var data = jobDetails['job'][0];
   var man = jobDetails['job'][0].instrumentManufacturer;
   var model = jobDetails['job'][0].instrumentModelNumber;
   var category = jobDetails['job'][0].instrumentCategory;
   document.getElementById("summaryUserName").innerHTML = data.assignedTo;
   document.getElementById("summaryJobDateReceived").innerHTML = data.dateReceived;
   document.getElementById("summaryInstrumentManAndModel").innerHTML = man +" "+ model +" "+ category;
   document.getElementById("summaryInstrumentOwner").innerHTML = data.company;
   document.getElementById("summaryJobNumber").innerHTML = data.jobNumber;
   document.getElementById("summaryJobStatus").innerHTML = data.status;
 
 }
 function getJobSummaryBar4(){
  var data = jobDetails['job'][0];
  var man = jobDetails['job'][0].instrumentManufacturer;
  var model = jobDetails['job'][0].instrumentModelNumber;
  var category = jobDetails['job'][0].instrumentCategory;
  document.getElementById("summaryUserName").innerHTML = data.assignedTo;
  document.getElementById("summaryJobDateReceived").innerHTML = data.dateReceived;
  document.getElementById("summaryInstrumentManAndModel").innerHTML = man +" "+ model +" "+ category;
  document.getElementById("summaryInstrumentOwner").innerHTML = data.company;
  document.getElementById("summaryJobNumber").innerHTML = data.jobNumber;
  document.getElementById("summaryJobStatus").innerHTML = "Delivered - at Site";

}
function getJobSummaryBar5(){
  var data = jobDetails['job'][0];
  var man = jobDetails['job'][0].instrumentManufacturer;
  var model = jobDetails['job'][0].instrumentModelNumber;
  var category = jobDetails['job'][0].instrumentCategory;
  document.getElementById("summaryUserName").innerHTML = "Lab";
  document.getElementById("summaryJobDateReceived").innerHTML = data.dateReceived;
  document.getElementById("summaryInstrumentManAndModel").innerHTML = man +" "+ model +" "+ category;
  document.getElementById("summaryInstrumentOwner").innerHTML = data.company;
  document.getElementById("summaryJobNumber").innerHTML = data.jobNumber;
  document.getElementById("summaryJobStatus").innerHTML = "Booked In";

}
 function getJobInfo(){
   var data = jobDetails['job'][0];
   // console.log(jobDetails);
   document.getElementById("infoJobNumber").value = data.company;
   document.getElementById("infoDateReceived").value = data.dateReceived;
   document.getElementById("infoOrderNumber").value = data.orderNumber;
  //  document.getElementById("infoInvoiceNumber").value = data.invoiceNumber;
   document.getElementById("infoInvoiceNumber").value = data.invoiceNumber;
   document.getElementById("infoCalibrationDate").value = data.calibrationDate;
   document.getElementById("staticCalibrationDue").value = data.calibrationDue;
   document.getElementById("staticCertificateNum").value = data.certificateNum;
 }
 function getCustomerDetails4(){
  var data = jobDetails['job'][0];
  // console.log(jobDetails);
  document.getElementById("company").value = data.company;
  document.getElementById("contactName").value = data.contactName;
  document.getElementById("address").value = "24 Erica Rd";
  document.getElementById("city").value = "Milton Keynes";
  document.getElementById("postCode").value = "MK12 6HS";
}
 function getInstrumentDetails(){
   var data = jobDetails['job'][0];
   document.getElementById("description").value = data.instrumentCategory;
   document.getElementById("manufacturer").value = data.instrumentManufacturer;
   document.getElementById("modelNumber").value = data.instrumentModelNumber;
   document.getElementById("serialNumber").value = data.instrumentSerialNumber;
   document.getElementById("procedureNum").value = data.instrumentProcedureNumber;
 }
 function getTestDetails(){
 
 }
 function certificateDetails(){
 
 }
 function getComments() {
 
 }
 function getJobHistory(){
   var data0 = jobDetails['job'][0];
   var data1 = jobDetails['job'][1];
   var data2 = jobDetails['job'][2];

   document.getElementById("").value = data0['jobHistory'].dateTime;
   document.getElementById("").value = data0['jobHistory'].action;
   document.getElementById("").value = data0['jobHistory'].Admin;
   document.getElementById("").value = data1['jobHistory'].dateTime;
   document.getElementById("").value = data1['jobHistory'].action;
   document.getElementById("").value = data1['jobHistory'].Admin;
   document.getElementById("").value = data2['jobHistory'].dateTime;
   document.getElementById("").value = data2['jobHistory'].action;
   document.getElementById("").value = data2['jobHistory'].Admin;
 }
 
 //Delivery Dashboard
 function getPickupsToday() {
   var data = jobDetails['job'][0];
   var man = jobDetails['job'][0].instrumentManufacturer;
   var model = jobDetails['job'][0].instrumentModelNumber;
   var category = jobDetails['job'][0].instrumentCategory;

   document.getElementById("jobCompany").innerHTML = data.company;
   document.getElementById("jobCompanyAddress").innerHTML = data.address;
   document.getElementById("jobOrderNumber").innerHTML = data.orderNumber;
   document.getElementById("jobNumber").innerHTML = data.jobNumber;
   document.getElementById("jobInstrument").innerHTML = man +" "+ model +" "+ category;
   document.getElementById("jobDateRequested").innerHTML = data.dateReceived;

   
 }
 function getPickupsToday2() {
  var data = jobDetails['job'][0];
  console.log(data);
  var man = jobDetails['job'][0].instrumentManufacturer;
  var model = jobDetails['job'][0].instrumentModelNumber;
  var category = jobDetails['job'][0].instrumentCategory;

  document.getElementById("jobCompany").innerHTML = data.company;
  document.getElementById("jobCompanyAddress").innerHTML = data.address;
  document.getElementById("jobOrderNumber").innerHTML = data.orderNumber;
  document.getElementById("jobNumber").innerHTML = data.jobNumber;
  document.getElementById("jobInstrument").innerHTML = man +" "+ model +" "+ category;
  document.getElementById("jobDateRequested").innerHTML = data.dateReceived;

  
}
function getMyJobs2() {
  var data = jobDetails['job'][0];
  var data6 = jobDetails['job'][6];
  var data7 = jobDetails['job'][7];
  var data8 = jobDetails['job'][8];

    var man = jobDetails['job'][0].instrumentManufacturer;
    var model = jobDetails['job'][0].instrumentModelNumber;
    var category = jobDetails['job'][0].instrumentCategory;


   var man6 = jobDetails['job'][6].instrumentManufacturer;
   var model6 = jobDetails['job'][6].instrumentModelNumber;
   var category6 = jobDetails['job'][6].instrumentCategory;

   var man7 = jobDetails['job'][7].instrumentManufacturer;
   var model7 = jobDetails['job'][7].instrumentModelNumber;
   var category7 = jobDetails['job'][7].instrumentCategory;

   var man8 = jobDetails['job'][8].instrumentManufacturer;
   var model8 = jobDetails['job'][8].instrumentModelNumber;
   var category8 = jobDetails['job'][8].instrumentCategory;

   document.getElementById("myStatus").innerHTML = "In Transit";
   document.getElementById("myJobOrderNumber").innerHTML = data.orderNumber;
   document.getElementById("myJobNumber").innerHTML = data.jobNumber;
   document.getElementById("myJobInstrument").innerHTML = man +" "+ model +" "+ category;
   document.getElementById("myJobCompany").innerHTML = data.company;
   document.getElementById("myJobDateRequested").innerHTML = data.dateReceived;
   document.getElementById("myJobCompanyAddress").innerHTML = data.address;
   
   document.getElementById("jobStatus6").innerHTML = "Scheduled Pickup";
   document.getElementById("jobOrderNumber6").innerHTML = data6.orderNumber;
   document.getElementById("jobNumber6").innerHTML = data6.jobNumber;
   document.getElementById("jobInstrument6").innerHTML = man +" "+ model +" "+ category;
   document.getElementById("jobCompany6").innerHTML = data6.company;
   document.getElementById("jobDateRequested6").innerHTML = data6.dateReceived;
   document.getElementById("jobCompanyAddress6").innerHTML = data6.address;

   document.getElementById("jobStatus7").innerHTML = "Scheduled Pickup";
   document.getElementById("jobOrderNumber7").innerHTML = data7.orderNumber;
   document.getElementById("jobNumber7").innerHTML = data7.jobNumber;
   document.getElementById("jobInstrument7").innerHTML = man +" "+ model +" "+ category;
   document.getElementById("jobCompany7").innerHTML = data7.company;
   document.getElementById("jobDateRequested7").innerHTML = data7.dateReceived;
   document.getElementById("jobCompanyAddress7").innerHTML = data7.address;

   document.getElementById("jobStatus8").innerHTML = "Scheduled Pickup";
   document.getElementById("jobOrderNumber8").innerHTML = data8.orderNumber;
   document.getElementById("jobNumber8").innerHTML = data8.jobNumber;
   document.getElementById("jobInstrument8").innerHTML = man +" "+ model +" "+ category;
   document.getElementById("jobCompany8").innerHTML = data8.company;
   document.getElementById("jobDateRequested8").innerHTML = data8.dateReceived;
   document.getElementById("jobCompanyAddress8").innerHTML = data8.address;
 }
 
 function getMyJobs() {
  var data = jobDetails['job'][0];
  var data6 = jobDetails['job'][6];
  var data7 = jobDetails['job'][7];
  var data8 = jobDetails['job'][8];

    var man = jobDetails['job'][0].instrumentManufacturer;
    var model = jobDetails['job'][0].instrumentModelNumber;
    var category = jobDetails['job'][0].instrumentCategory;


   var man6 = jobDetails['job'][6].instrumentManufacturer;
   var model6 = jobDetails['job'][6].instrumentModelNumber;
   var category6 = jobDetails['job'][6].instrumentCategory;

   var man7 = jobDetails['job'][7].instrumentManufacturer;
   var model7 = jobDetails['job'][7].instrumentModelNumber;
   var category7 = jobDetails['job'][7].instrumentCategory;

   var man8 = jobDetails['job'][8].instrumentManufacturer;
   var model8 = jobDetails['job'][8].instrumentModelNumber;
   var category8 = jobDetails['job'][8].instrumentCategory;

   document.getElementById("myStatus").innerHTML = "Scheduled Pickup";
   document.getElementById("myJobOrderNumber").innerHTML = data.orderNumber;
   document.getElementById("myJobNumber").innerHTML = data.jobNumber;
   document.getElementById("myJobInstrument").innerHTML = man +" "+ model +" "+ category;
   document.getElementById("myJobCompany").innerHTML = data.company;
   document.getElementById("myJobDateRequested").innerHTML = data.dateReceived;
   document.getElementById("myJobCompanyAddress").innerHTML = data.address;
   
   document.getElementById("jobStatus6").innerHTML = "Scheduled Pickup";
   document.getElementById("jobOrderNumber6").innerHTML = data6.orderNumber;
   document.getElementById("jobNumber6").innerHTML = data6.jobNumber;
   document.getElementById("jobInstrument6").innerHTML = man6 +" "+ model6 +" "+ category6;
   document.getElementById("jobCompany6").innerHTML = data6.company;
   document.getElementById("jobDateRequested6").innerHTML = data6.dateReceived;
   document.getElementById("jobCompanyAddress6").innerHTML = data6.address;

   document.getElementById("jobStatus7").innerHTML = "Scheduled Pickup";
   document.getElementById("jobOrderNumber7").innerHTML = data7.orderNumber;
   document.getElementById("jobNumber7").innerHTML = data7.jobNumber;
   document.getElementById("jobInstrument7").innerHTML = man7 +" "+ model7 +" "+ category7;
   document.getElementById("jobCompany7").innerHTML = data7.company;
   document.getElementById("jobDateRequested7").innerHTML = data7.dateReceived;
   document.getElementById("jobCompanyAddress7").innerHTML = data7.address;

   document.getElementById("jobStatus8").innerHTML = "Scheduled Pickup";
   document.getElementById("jobOrderNumber8").innerHTML = data8.orderNumber;
   document.getElementById("jobNumber8").innerHTML = data8.jobNumber;
   document.getElementById("jobInstrument8").innerHTML = man8 +" "+ model8 +" "+ category8;
   document.getElementById("jobCompany8").innerHTML = data8.company;
   document.getElementById("jobDateRequested8").innerHTML = data8.dateReceived;
   document.getElementById("jobCompanyAddress8").innerHTML = data8.address;
 }
 function changeDeliveryStatus(){
  var data = jobDetails['job'][0];

  var man = jobDetails['job'][0].instrumentManufacturer;
  var model = jobDetails['job'][0].instrumentModelNumber;
  var category = jobDetails['job'][0].instrumentCategory;

 document.getElementById("myStatus").innerHTML = "In Transit";
 document.getElementById("myJobOrderNumber").innerHTML = data.orderNumber;
 document.getElementById("myJobNumber").innerHTML = data.jobNumber;
 document.getElementById("myJobInstrument").innerHTML = man +" "+ model +" "+ category;
 document.getElementById("myJobCompany").innerHTML = data.company;
 document.getElementById("myJobDateRequested").innerHTML = data.dateReceived;
 document.getElementById("myJobCompanyAddress").innerHTML = data.address;
 }
 function processDeliveryJobs() {
   getPickupsToday();
   getMyJobs();
 }
 function processDeliveryJobs2(){
  getPickupsToday2();
  getMyJobs2();
 }
 function processDeliveryJobs3(){
 
  var data6 = jobDetails['job'][6];
  var data7 = jobDetails['job'][7];
  var data8 = jobDetails['job'][8];


   var man6 = jobDetails['job'][6].instrumentManufacturer;
   var model6 = jobDetails['job'][6].instrumentModelNumber;
   var category6 = jobDetails['job'][6].instrumentCategory;

   var man7 = jobDetails['job'][7].instrumentManufacturer;
   var model7 = jobDetails['job'][7].instrumentModelNumber;
   var category7 = jobDetails['job'][7].instrumentCategory;

   var man8 = jobDetails['job'][8].instrumentManufacturer;
   var model8 = jobDetails['job'][8].instrumentModelNumber;
   var category8 = jobDetails['job'][8].instrumentCategory;
   
   document.getElementById("jobStatus6").innerHTML = "Scheduled Pickup";
   document.getElementById("jobOrderNumber6").innerHTML = data6.orderNumber;
   document.getElementById("jobNumber6").innerHTML = data6.jobNumber;
   document.getElementById("jobInstrument6").innerHTML = man6 +" "+ model6 +" "+ category6;
   document.getElementById("jobCompany6").innerHTML = data6.company;
   document.getElementById("jobDateRequested6").innerHTML = data6.dateReceived;
   document.getElementById("jobCompanyAddress6").innerHTML = data6.address;

   document.getElementById("jobStatus7").innerHTML = "Scheduled Pickup";
   document.getElementById("jobOrderNumber7").innerHTML = data7.orderNumber;
   document.getElementById("jobNumber7").innerHTML = data7.jobNumber;
   document.getElementById("jobInstrument7").innerHTML = man7 +" "+ model7 +" "+ category7;
   document.getElementById("jobCompany7").innerHTML = data7.company;
   document.getElementById("jobDateRequested7").innerHTML = data7.dateReceived;
   document.getElementById("jobCompanyAddress7").innerHTML = data7.address;

   document.getElementById("jobStatus8").innerHTML = "Scheduled Pickup";
   document.getElementById("jobOrderNumber8").innerHTML = data8.orderNumber;
   document.getElementById("jobNumber8").innerHTML = data8.jobNumber;
   document.getElementById("jobInstrument8").innerHTML = man8 +" "+ model8 +" "+ category8;
   document.getElementById("jobCompany8").innerHTML = data8.company;
   document.getElementById("jobDateRequested8").innerHTML = data8.dateReceived;
   document.getElementById("jobCompanyAddress8").innerHTML = data8.address;
 }
 // Invoices page
 function processInvoices(){
    getInvoices();
 }
 function getInvoices() {
   var data = jobDetails['job'][0];


   document.getElementById("jobOrderNumber").innerHTML = data.orderNumber;
   document.getElementById("jobNumber").innerHTML = data.jobNumber;
   document.getElementById("invoiceNumber").innerHTML = data.invoiceNumber;
   document.getElementById("instrumentManufacturer").innerHTML = data.instrumentManufacturer;
   document.getElementById("jobInstrument").innerHTML = data.instrumentCategory;
   document.getElementById("jobCompany").innerHTML = data.company;
   document.getElementById("jobDateRequested").innerHTML = data.dateReceived;
   document.getElementById("status").innerHTML = "Awaiting Payment";

  }
 //Admin Dashboard - Pullman

 function processAdminDashboard(){
    getMyJobsAdmin();
    getCurrentJobs();
 }
 function processAdminDashboard2(){

    getCurrentJobs();
 }
 function processAdminDashboard3(){
   getCentralJobs();
 }
 function getMyJobsAdmin() {
   var data = jobDetails['job'][0];
   document.getElementById("jobOrderNumber").innerHTML = data.orderNumber;
   document.getElementById("jobNumber").innerHTML = data.jobNumber;
   document.getElementById("jobInstrument").innerHTML = data.instrumentCategory;
   document.getElementById("jobCompany").innerHTML = data.company;
   document.getElementById("jobDateRequested").innerHTML = data.dateReceived;
   document.getElementById("jobProcedure").innerHTML = data.instrumentProcedureNumber;

  }

  function getCentralJobs(){
    var data0 = jobDetails['job'][0];
    var data6 = jobDetails['job'][6];
    var data7 = jobDetails['job'][7];
    var data8 = jobDetails['job'][8];
      console.log(data6);
     document.getElementById("jobOrderNumber0").innerHTML = data0.orderNumber;
     document.getElementById("jobNumber0").innerHTML = data0.jobNumber;
     document.getElementById("jobInstrument0").innerHTML = data0.instrumentCategory;
     document.getElementById("jobCompany0").innerHTML = data0.company;
     document.getElementById("jobDateRequested0").innerHTML = data0.dateReceived;
     document.getElementById("jobProcedure0").innerHTML = data0.instrumentProcedureNumber;
     document.getElementById("status0").innerHTML = "Delivered - at Site";
     document.getElementById("assignedTo0").innerHTML = data0.assignedTo;
     document.getElementById("jobSite0").innerHTML = data0.calibrationLocation;

     document.getElementById("jobOrderNumber6").innerHTML = data6.orderNumber;
     document.getElementById("jobNumber6").innerHTML = data6.jobNumber;
     document.getElementById("jobInstrument6").innerHTML = data6.instrumentCategory;
     document.getElementById("jobCompany6").innerHTML = data6.company;
     document.getElementById("jobDateRequested6").innerHTML = data6.dateReceived;
     document.getElementById("jobProcedure6").innerHTML = data6.instrumentProcedureNumber;
     document.getElementById("status6").innerHTML = data6.status;
     document.getElementById("assignedTo6").innerHTML = data6.assignedTo;
     document.getElementById("jobSite6").innerHTML = data6.calibrationLocation;

     document.getElementById("jobOrderNumber7").innerHTML = data7.orderNumber;
     document.getElementById("jobNumber7").innerHTML = data7.jobNumber;
     document.getElementById("jobInstrument7").innerHTML = data7.instrumentCategory;
     document.getElementById("jobCompany7").innerHTML = data7.company;
     document.getElementById("jobDateRequested7").innerHTML = data7.dateReceived;
     document.getElementById("jobProcedure7").innerHTML = data7.instrumentProcedureNumber;
     document.getElementById("status7").innerHTML = data7.status;
     document.getElementById("assignedTo7").innerHTML = data7.assignedTo;
     document.getElementById("jobSite7").innerHTML = data7.calibrationLocation;

     document.getElementById("jobOrderNumber8").innerHTML = data8.orderNumber;
     document.getElementById("jobNumber8").innerHTML = data8.jobNumber;
     document.getElementById("jobInstrument8").innerHTML = data8.instrumentCategory;
     document.getElementById("jobCompany8").innerHTML = data8.company;
     document.getElementById("jobDateRequested8").innerHTML = data8.dateReceived;
     document.getElementById("jobProcedure8").innerHTML = data8.instrumentProcedureNumber;
     document.getElementById("status8").innerHTML = data8.status;
     document.getElementById("assignedTo8").innerHTML = data8.assignedTo;
     document.getElementById("jobSite8").innerHTML = data8.calibrationLocation;
  }
 function getCurrentJobs(){
  var data0 = jobDetails['job'][0];
  var data1 = jobDetails['job'][1];
  var data2 = jobDetails['job'][2];
  var data3 = jobDetails['job'][3];
  var data4 = jobDetails['job'][4];
  var data5 = jobDetails['job'][5];
   
   document.getElementById("jobOrderNumber0").innerHTML = data0.orderNumber;
   document.getElementById("jobNumber0").innerHTML = data0.jobNumber;
   document.getElementById("jobInstrument0").innerHTML = data0.instrumentCategory;
   document.getElementById("jobCompany0").innerHTML = data0.company;
   document.getElementById("jobDateRequested0").innerHTML = data0.dateReceived;
   document.getElementById("jobProcedure0").innerHTML = data0.instrumentProcedureNumber;
   document.getElementById("status0").innerHTML = data0.status;
   document.getElementById("assignedTo0").innerHTML = data0.assignedTo;
   document.getElementById("jobSite0").innerHTML = data0.calibrationLocation;

   document.getElementById("jobOrderNumber1").innerHTML = data1.orderNumber;
   document.getElementById("jobNumber1").innerHTML = data1.jobNumber;
   document.getElementById("jobInstrument1").innerHTML = data1.instrumentCategory;
   document.getElementById("jobCompany1").innerHTML = data1.company;
   document.getElementById("jobDateRequested1").innerHTML = data1.dateReceived;
   document.getElementById("jobProcedure1").innerHTML = data1.instrumentProcedureNumber;
   document.getElementById("status1").innerHTML = data1.status;
   document.getElementById("assignedTo1").innerHTML = data1.assignedTo;
   document.getElementById("jobSite1").innerHTML = data1.calibrationLocation;

   document.getElementById("jobOrderNumber2").innerHTML = data2.orderNumber;
   document.getElementById("jobNumber2").innerHTML = data2.jobNumber;
   document.getElementById("jobInstrument2").innerHTML = data2.instrumentCategory;
   document.getElementById("jobCompany2").innerHTML = data2.company;
   document.getElementById("jobDateRequested2").innerHTML = data2.dateReceived;
   document.getElementById("jobProcedure2").innerHTML = data2.instrumentProcedureNumber;
   document.getElementById("status2").innerHTML = data2.status;
   document.getElementById("assignedTo2").innerHTML = data2.assignedTo;
   document.getElementById("jobSite2").innerHTML = data2.calibrationLocation;

   document.getElementById("jobOrderNumber3").innerHTML = data3.orderNumber;
   document.getElementById("jobNumber3").innerHTML = data3.jobNumber;
   document.getElementById("jobInstrument3").innerHTML = data3.instrumentCategory;
   document.getElementById("jobCompany3").innerHTML = data3.company;
   document.getElementById("jobDateRequested3").innerHTML = data3.dateReceived;
   document.getElementById("jobProcedure3").innerHTML = data3.instrumentProcedureNumber;
   document.getElementById("status3").innerHTML = data3.status;
   document.getElementById("assignedTo3").innerHTML = data3.assignedTo;
   document.getElementById("jobSite3").innerHTML = data3.calibrationLocation;

   document.getElementById("jobOrderNumber4").innerHTML = data4.orderNumber;
   document.getElementById("jobNumber4").innerHTML = data4.jobNumber;
   document.getElementById("jobInstrument4").innerHTML = data4.instrumentCategory;
   document.getElementById("jobCompany4").innerHTML = data4.company;
   document.getElementById("jobDateRequested4").innerHTML = data4.dateReceived;
   document.getElementById("jobProcedure4").innerHTML = data4.instrumentProcedureNumber;
   document.getElementById("status4").innerHTML = data4.status;
   document.getElementById("assignedTo4").innerHTML = data4.assignedTo;
   document.getElementById("jobSite4").innerHTML = data4.calibrationLocation;

   document.getElementById("jobOrderNumber5").innerHTML = data5.orderNumber;
   document.getElementById("jobNumber5").innerHTML = data5.jobNumber;
   document.getElementById("jobInstrument5").innerHTML = data5.instrumentCategory;
   document.getElementById("jobCompany5").innerHTML = data5.company;
   document.getElementById("jobDateRequested5").innerHTML = data5.dateReceived;
   document.getElementById("jobProcedure5").innerHTML = data5.instrumentProcedureNumber;
   document.getElementById("status5").innerHTML = data5.status;
   document.getElementById("assignedTo5").innerHTML = data5.assignedTo;
   document.getElementById("jobSite5").innerHTML = data5.calibrationLocation;




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
 


 //Engineer Dashboard
 function processEngineerMyJobs() {
  var data0 = jobDetails['job'][0];
  var data6 = jobDetails['job'][6];
  var data7 = jobDetails['job'][7];
  var data8 = jobDetails['job'][8];

  document.getElementById("jobOrderNumber0").innerHTML = data0.orderNumber;
  document.getElementById("jobNumber0").innerHTML = data0.jobNumber;
  document.getElementById("jobInstrument0").innerHTML = data0.instrumentCategory;
  document.getElementById("jobProcedure0").innerHTML = data0.instrumentProcedureNumber;
  document.getElementById("jobStatus0").innerHTML = data0.status;
  document.getElementById("jobCompany0").innerHTML = data0.company;
  document.getElementById("jobDateRequested0").innerHTML = data0.dateReceived;
  document.getElementById("jobPrice0").innerHTML = data0.procedurePrice;

  document.getElementById("jobOrderNumber6").innerHTML = data6.orderNumber;
  document.getElementById("jobNumber6").innerHTML = data6.jobNumber;
  document.getElementById("jobInstrument6").innerHTML = data6.instrumentCategory;
  document.getElementById("jobProcedure6").innerHTML = data6.instrumentProcedureNumber;
  document.getElementById("jobStatus6").innerHTML = data6.status;
  document.getElementById("jobCompany6").innerHTML = data6.company;
  document.getElementById("jobDateRequested6").innerHTML = data6.dateReceived;
  document.getElementById("jobPrice6").innerHTML = data6.procedurePrice;

  document.getElementById("jobOrderNumber7").innerHTML = data7.orderNumber;
  document.getElementById("jobNumber7").innerHTML = data7.jobNumber;
  document.getElementById("jobInstrument7").innerHTML = data7.instrumentCategory;
  document.getElementById("jobProcedure7").innerHTML = data7.instrumentProcedureNumber;
  document.getElementById("jobStatus7").innerHTML = data7.status;
  document.getElementById("jobCompany7").innerHTML = data7.company;
  document.getElementById("jobDateRequested7").innerHTML = data7.dateReceived;
  document.getElementById("jobPrice7").innerHTML = data7.procedurePrice;

  document.getElementById("jobOrderNumber8").innerHTML = data8.orderNumber;
  document.getElementById("jobNumber8").innerHTML = data8.jobNumber;
  document.getElementById("jobInstrument8").innerHTML = data8.instrumentCategory;
  document.getElementById("jobProcedure8").innerHTML = data8.instrumentProcedureNumber;
  document.getElementById("jobStatus8").innerHTML = data8.status;
  document.getElementById("jobCompany8").innerHTML = data8.company;
  document.getElementById("jobDateRequested8").innerHTML = data8.dateReceived;
  document.getElementById("jobPrice8").innerHTML = data8.procedurePrice;
 }
 
 function getJobDetailsWithJobNumber(){
  getJobSummaryBar();
  getJobInfo();
  getInstrumentDetails();
  getTestDetailsByJobNumber();
  getParts()
 }

 function getJobDetailsWithJobNumber4(){
  getJobSummaryBar4();
  getJobInfo();
  getInstrumentDetails();
  getTestDetailsByJobNumber();
  getParts()
  getCustomerDetails4();
 }

 function getJobDetailsWithJobNumber5(){
  getJobSummaryBar5();
  getJobInfo();

 }

 function getTestDetailsByJobNumber(){
   
  var data0 = jobDetails.job[0].testDetails[0];
  var data1 = jobDetails.job[0].testDetails[1];
  var data2 = jobDetails.job[0].testDetails[2];
  var data3 = jobDetails.job[0].testDetails[3];
  var data4 = jobDetails.job[0].testDetails[4];
  var data5 = jobDetails.job[0].testDetails[5];
  var data6 = jobDetails.job[0].testDetails[6];

  
  document.getElementById("testTitle0").innerHTML = data0.testTitle;
  document.getElementById("testStep0").innerHTML = data0.testStep;
  document.getElementById("testType0").innerHTML = data0.testType;
  document.getElementById("testRangeStart0").innerHTML = data0.testRangeStart;
  document.getElementById("expectedDisplay0").innerHTML = data0.display;
  // document.getElementById("actualDisplay0").innerHTML = data0.actualDisplay;
  // document.getElementById("passFail0").innerHTML = data0.passFail;
  document.getElementById("comments0").innerHTML = data0.comments;

  document.getElementById("testTitle1").innerHTML = data1.testTitle;
  document.getElementById("testStep1").innerHTML = data1.testStep;
  document.getElementById("testType1").innerHTML = data1.testType;
  document.getElementById("testRangeStart1").innerHTML = data1.testRangeStart;
  document.getElementById("expectedDisplay1").innerHTML = data1.display;
  // document.getElementById("actualDisplay1").innerHTML = data1.actualDisplay;
  //document.getElementById("passFail1").innerHTML = data1.passFail;
  document.getElementById("comments1").innerHTML = data1.comments;
  
  document.getElementById("testTitle2").innerHTML = data2.testTitle;
  document.getElementById("testStep2").innerHTML = data2.testStep;
  document.getElementById("testType2").innerHTML = data2.testType;
  document.getElementById("testRangeStart2").innerHTML = data2.testRangeStart;
  document.getElementById("expectedDisplay2").innerHTML = data2.display;
  // document.getElementById("actualDisplay2").innerHTML = data2.actualDisplay;
  //document.getElementById("passFail2").innerHTML = data2.passFail;
  document.getElementById("comments2").innerHTML = data2.comments;
  
  document.getElementById("testTitle3").innerHTML = data3.testTitle;
  document.getElementById("testStep3").innerHTML = data3.testStep;
  document.getElementById("testType3").innerHTML = data3.testType;
  document.getElementById("testRangeStart3").innerHTML = data3.testRangeStart;
  document.getElementById("expectedDisplay3").innerHTML = data3.display;
  // document.getElementById("actualDisplay3").innerHTML = data3.actualDisplay;
  //document.getElementById("passFail3").innerHTML = data3.passFail;
  document.getElementById("comments3").innerHTML = data3.comments;

  document.getElementById("testTitle4").innerHTML = data4.testTitle;
  document.getElementById("testStep4").innerHTML = data4.testStep;
  document.getElementById("testType4").innerHTML = data4.testType;
  document.getElementById("testRangeStart4").innerHTML = data4.testRangeStart;
  document.getElementById("expectedDisplay4").innerHTML = data4.display;
  // document.getElementById("actualDisplay4").innerHTML = data4.actualDisplay;
  //document.getElementById("passFail4").innerHTML = data4.passFail;
  document.getElementById("comments4").innerHTML = data4.comments;

  document.getElementById("testTitle5").innerHTML = data5.testTitle;
  document.getElementById("testStep5").innerHTML = data5.testStep;
  document.getElementById("testType5").innerHTML = data5.testType;
  document.getElementById("testRangeStart5").innerHTML = data5.testRangeStart;
  document.getElementById("expectedDisplay5").innerHTML = data5.display;
  // document.getElementById("actualDisplay5").innerHTML = data5.actualDisplay;
  //document.getElementById("passFail5").innerHTML = data5.passFail;
  document.getElementById("comments5").innerHTML = data5.comments;

  document.getElementById("testTitle6").innerHTML = data6.testTitle;
  document.getElementById("testStep6").innerHTML = data6.testStep;
  document.getElementById("testType6").innerHTML = data6.testType;
  document.getElementById("testRangeStart6").innerHTML = data6.testRangeStart;
  document.getElementById("expectedDisplay6").innerHTML = data6.display;
  // document.getElementById("actualDisplay6").innerHTML = data6.actualDisplay;
  // document.getElementById("passFail6").innerHTML = data6.passFail;
  document.getElementById("comments6").innerHTML = data6.comments;
 }

 function processCertificationExpiration() {
     var data0 = jobDetails['job'][0];
     var data1 = jobDetails['job'][1];
     var data2 = jobDetails['job'][2];

   document.getElementById("company0").innerHTML = data0.company;
   document.getElementById("contactName0").innerHTML = data0.contactName;
   document.getElementById("instrumentName0").innerHTML = data0.instrumentCategory;
   document.getElementById("procedure0").innerHTML = data0.instrumentProcedureNumber;
   document.getElementById("price0").innerHTML = data0.procedurePrice;
   document.getElementById("phone0").innerHTML = "00000 000000";
   document.getElementById("email0").innerHTML = "abcElectric@email.com";

   document.getElementById("company1").innerHTML = data1.company;
   document.getElementById("contactName1").innerHTML = data1.contactName;
   document.getElementById("instrumentName1").innerHTML = data1.instrumentCategory;
   document.getElementById("procedure1").innerHTML = data1.instrumentProcedureNumber;
   document.getElementById("price1").innerHTML = data1.procedurePrice;
   document.getElementById("phone1").innerHTML = "00000 000000";
   document.getElementById("email1").innerHTML = "harigateElectric@email.com";

   document.getElementById("company2").innerHTML = "123 Electric";
   document.getElementById("contactName2").innerHTML = "John Smith";
   document.getElementById("instrumentName2").innerHTML = data2.instrumentCategory;
   document.getElementById("procedure2").innerHTML = data2.instrumentProcedureNumber;
   document.getElementById("price2").innerHTML = data2.procedurePrice;
   document.getElementById("phone2").innerHTML = "00000 000000";
   document.getElementById("email2").innerHTML = "123Electric@email.com";
 

 }

 function getParts(){
   
  var data0 = jobDetails.parts[0];
  var data1 = jobDetails.parts[1];
  var data2 = jobDetails.parts[2];
  var data3 = jobDetails.parts[3];

  document.getElementById("stockNumber0").innerHTML = data0.stockNumber;
  document.getElementById("category0").innerHTML = data0.category;
  document.getElementById("part0").innerHTML = data0.part;
  document.getElementById("qty0").innerHTML = data0.qty;
  document.getElementById("cost0").innerHTML = data0.cost;
  document.getElementById("price0").innerHTML = data0.price;
  // document.getElementById("total0").innerHTML = data0.price;

  document.getElementById("stockNumber1").innerHTML = data1.stockNumber;
  document.getElementById("category1").innerHTML = data1.category;
  document.getElementById("part1").innerHTML = data1.part;
  document.getElementById("qty1").innerHTML = data1.qty;
  document.getElementById("cost1").innerHTML = data1.cost;
  document.getElementById("price1").innerHTML = data1.price;

  document.getElementById("stockNumber2").innerHTML = data2.stockNumber;
  document.getElementById("category2").innerHTML = data2.category;
  document.getElementById("part2").innerHTML = data2.part;
  document.getElementById("qty2").innerHTML = data2.qty;
  document.getElementById("cost2").innerHTML = data2.cost;
  document.getElementById("price2").innerHTML = data2.price;
  
  document.getElementById("stockNumber3").innerHTML = data3.stockNumber;
  document.getElementById("category3").innerHTML = data3.category;
  document.getElementById("part3").innerHTML = data3.part;
  document.getElementById("qty3").innerHTML = data3.qty;
  document.getElementById("cost3").innerHTML = data3.cost;
  document.getElementById("price3").innerHTML = data3.price;

 }


  function myFunction(){
      document.getElementById("passFail0").innerHTML = "pass";
      document.getElementById("passFail0").style.color = "green";
      document.getElementById("passFail1").innerHTML = "pass";
      document.getElementById("passFail1").style.color = "green";
      document.getElementById("passFail2").innerHTML = "pass";
      document.getElementById("passFail2").style.color = "green";
      document.getElementById("passFail3").innerHTML = "pass";
      document.getElementById("passFail3").style.color = "green";
      document.getElementById("passFail4").innerHTML = "pass";
      document.getElementById("passFail4").style.color = "green";
      document.getElementById("passFail5").innerHTML = "pass";
      document.getElementById("passFail5").style.color = "green";
      document.getElementById("passFail6").innerHTML = "pass";
      document.getElementById("passFail6").style.color = "green";
      
      document.getElementById("generateInvoice").disabled = false;
      document.getElementById("requestCertificate").disabled = false;

  }

  function runAlert(){
      alert("Invoice number 453253 has been generated");
      //add order number to job tab
      document.getElementById("infoInvoiceNumber").value = "453253";
  }

  function generateCertificate(){
      alert("Certificate request has been sent to Admin");
      window.location.href = "job_details_051672_2.html";
  }

  function calculateQty0(){
                  
      var qty0 = document.getElementById("qty0").value;
                      
      var cost = qty0 *  (document.getElementById('cost0').innerHTML);
      document.getElementById('totalCost0').innerHTML = cost.toFixed(2);
      var price = qty0 *  document.getElementById('price0').innerHTML;
      document.getElementById('totalPrice0').innerHTML = price.toFixed(2);
  }


  function getPartsForCurrentJob() {
      // window.location.href = "job_details_051672_2.html";
      
      var data = jobDetails.parts[0];
      console.log(data);

      document.getElementById("stockNumber").innerHTML = data.stockNumber;
      document.getElementById("category").innerHTML = data.category;
      document.getElementById("part").innerHTML = data.part;
      document.getElementById("qty").innerHTML = document.getElementById("qty0").value;
      document.getElementById("cost").innerHTML = document.getElementById("cost0").innerHTML;
      document.getElementById("price").innerHTML = document.getElementById("price0").innerHTML;
      document.getElementById("totalCost").innerHTML = document.getElementById("totalCost0").innerHTML;
      document.getElementById("totalPrice").innerHTML = document.getElementById("totalPrice0").innerHTML;
  }

  function processAdminDashboard4(){
    //get my job
    var data = jobDetails['job'][0];
   document.getElementById("jobOrderNumber").innerHTML = data.orderNumber;
   document.getElementById("jobNumber").innerHTML = data.jobNumber;
   document.getElementById("jobInstrument").innerHTML = data.instrumentCategory;
   document.getElementById("jobCompany").innerHTML = data.company;
   document.getElementById("jobDateRequested").innerHTML = data.dateReceived;
   document.getElementById("jobProcedure").innerHTML = data.instrumentProcedureNumber;
  
   getCentralJobs();
   
  }

  
      
