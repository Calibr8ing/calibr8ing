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
     "address": "",
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
     "address": "",
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
     "address": "",
     "calibrationLocation": "Central"
  }
   ]
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

   document.getElementById("jobOrderNumber").innerHTML = data.orderNumber;
   document.getElementById("jobNumber").innerHTML = data.jobNumber;
   document.getElementById("jobInstrument").innerHTML = data.man +" "+ model +" "+ category;
   document.getElementById("jobCompany").innerHTML = data.company;
   document.getElementById("jobDateRequested").innerHTML = data.dateReceived;
   document.getElementById("jobCompanyAddress").innerHTML = data.address;
 }
 
 function getMyJobs() {
    var data = jobDetails['job'][0];

    var man = jobDetails['job'][0].instrumentManufacturer;
    var model = jobDetails['job'][0].instrumentModelNumber;
    var category = jobDetails['job'][0].instrumentCategory;

   document.getElementById("myJobOrderNumber").innerHTML = data.orderNumber;
   document.getElementById("myJobNumber").innerHTML = data.jobNumber;
   document.getElementById("myJobInstrument").innerHTML = data.man +" "+ model +" "+ category;
   document.getElementById("myJobCompany").innerHTML = data.company;
   document.getElementById("myJobDateRequested").innerHTML = data.dateReceived;
   document.getElementById("myJobCompanyAddress").innerHTML = data.address;
 
 }
 function processDeliveryJobs() {
   getPickupsToday();
   getMyJobs();
 }
 
 //Admin Dashboard - Pullman

 function processAdminDashboard(){
    getMyJobs();
    getCurrentJobs();
 }
 // function getMyJobs() {
 //   var data = jobDetails['job'][0];
 //
 //
 //   document.getElementById("jobOrderNumber").innerHTML = data.orderNumber;
 //   document.getElementById("jobNumber").innerHTML = data.jobNumber;
 //   document.getElementById("jobInstrument").innerHTML = data.instrumentCategory;
 //   document.getElementById("jobCompany").innerHTML = data.company;
 //   document.getElementById("jobDateRequested").innerHTML = data.dateReceived;
 //
 // }
 function getCurrentJobs(){
  var data0 = jobDetails['job'][0];
  var data1 = jobDetails['job'][1];
  var data2 = jobDetails['job'][2];
   
  console.log(data0);
   
  // document.getElementById("jobOrderNumber0").innerHTML = data0.orderNumber;
  document.getElementById("jobNumber0").innerHTML = data0.jobNumber;
  document.getElementById("instrumentName0").innerHTML = data0.instrumentCategory;
  document.getElementById("procedure0").innerHTML = data0.instrumentProcedure;
  document.getElementById("status0").innerHTML = data0.status;
  document.getElementById("company0").innerHTML = data0.company;
  document.getElementById("dateRequested0").innerHTML = data0.dateReceived;
  document.getElementById("dateCompleted0").innerHTML = data0.company;
  document.getElementById("price0").innerHTML = data0.procedurePrice;

  // document.getElementById("jobOrderNumber1").innerHTML = data1.orderNumber;
  document.getElementById("jobNumber1").innerHTML = data1.jobNumber;
  document.getElementById("jobInstrument1").innerHTML = data1.instrumentCategory;
  document.getElementById("jobProcedure1").innerHTML = data1.instrumentProcedure;
  document.getElementById("jobCompany1").innerHTML = data1.company;
  document.getElementById("jobDateRequested1").innerHTML = data1.dateReceived;

  // document.getElementById("jobOrderNumber2").innerHTML = data2.orderNumber;
  document.getElementById("jobNumber2").innerHTML = data2.jobNumber;
  document.getElementById("jobInstrument2").innerHTML = data2.instrumentCategory;
  document.getElementById("jobProcedure2").innerHTML = data2.instrumentProcedure;
  document.getElementById("jobCompany2").innerHTML = data2.company;
  document.getElementById("jobDateRequested2").innerHTML = data2.dateReceived;
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
 
 // Customer Dashboard
 
 function processCustomerInstrumentList() {
   var instrument = jobDetails['job'][0];
   
   document.getElementById("instrument0Name").innerHTML = data.instrumentCategory;
   // document.getElementById("instrument0Type").innerHTML = instrument0['type'];
   // document.getElementById("instrument0Manufacturer").innerHTML = instrument0['manufacturer'];
   document.getElementById("instrument0Model").innerHTML = data.instrumentModelNumber;
   document.getElementById("instrument0Serial").innerHTML = data.instrumentSerialNumber;
   document.getElementById("instrument0DateCertified").innerHTML = data.calibrationDate;
   document.getElementById("instrument0Certificate").innerHTML = data.certificateNum;
   
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
 }

 function getTestDetailsByJobNumber(){
   
  var data0 = jobDetails.job[0].testDetails[0];
  var data1 = jobDetails.job[0].testDetails[1];
  var data2 = jobDetails.job[0].testDetails[2];
  var data3 = jobDetails.job[0].testDetails[3];

  console.log(data1);
  console.log(data2);
 
  document.getElementById("testTitle0").innerHTML = data0.testTitle;
  document.getElementById("testStep0").innerHTML = data0.testStep;
  document.getElementById("testType0").innerHTML = data0.testType;
  document.getElementById("testRangeStart0").innerHTML = data0.testRangeStart;
  document.getElementById("expectedDisplay0").innerHTML = data0.display;
  document.getElementById("actualDisplay0").innerHTML = data0.actualDisplay;
  document.getElementById("passFail0").innerHTML = data0.passFail;
  document.getElementById("comments0").innerHTML = data0.comments;

  document.getElementById("testTitle1").innerHTML = data1.testTitle;
  document.getElementById("testStep1").innerHTML = data1.testStep;
  document.getElementById("testType1").innerHTML = data1.testType;
  document.getElementById("testRangeStart1").innerHTML = data1.testRangeStart;
  document.getElementById("expectedDisplay1").innerHTML = data1.display;
  document.getElementById("actualDisplay1").innerHTML = data1.actualDisplay;
  document.getElementById("passFail1").innerHTML = data1.passFail;
  document.getElementById("comments1").innerHTML = data1.comments;
  
  document.getElementById("testTitle2").innerHTML = data2.testTitle;
  document.getElementById("testStep2").innerHTML = data2.testStep;
  document.getElementById("testType2").innerHTML = data2.testType;
  document.getElementById("testRangeStart2").innerHTML = data2.testRangeStart;
  document.getElementById("expectedDisplay2").innerHTML = data2.display;
  document.getElementById("actualDisplay2").innerHTML = data2.actualDisplay;
  document.getElementById("passFail2").innerHTML = data2.passFail;
  document.getElementById("comments2").innerHTML = data2.comments;
  
  document.getElementById("testTitle3").innerHTML = data3.testTitle;
  document.getElementById("testStep3").innerHTML = data3.testStep;
  document.getElementById("testType3").innerHTML = data3.testType;
  document.getElementById("testRangeStart3").innerHTML = data3.testRangeStart;
  document.getElementById("expectedDisplay3").innerHTML = data3.display;
  document.getElementById("actualDisplay3").innerHTML = data3.actualDisplay;
  document.getElementById("passFail3").innerHTML = data3.passFail;
  document.getElementById("comments3").innerHTML = data3.comments;

  document.getElementById("testTitle4").innerHTML = data4.testTitle;
  document.getElementById("testStep4").innerHTML = data4.testStep;
  document.getElementById("testType4").innerHTML = data4.testType;
  document.getElementById("testRangeStart4").innerHTML = data4.testRangeStart;
  document.getElementById("expectedDisplay4").innerHTML = data4.display;
  document.getElementById("actualDisplay4").innerHTML = data4.actualDisplay;
  document.getElementById("passFail4").innerHTML = data4.passFail;
  document.getElementById("comments4").innerHTML = data4.comments;

  document.getElementById("testTitle5").innerHTML = data5.testTitle;
  document.getElementById("testStep5").innerHTML = data5.testStep;
  document.getElementById("testType5").innerHTML = data5.testType;
  document.getElementById("testRangeStart5").innerHTML = data5.testRangeStart;
  document.getElementById("expectedDisplay5").innerHTML = data5.display;
  document.getElementById("actualDisplay5").innerHTML = data5.actualDisplay;
  document.getElementById("passFail5").innerHTML = data5.passFail;
  document.getElementById("comments5").innerHTML = data5.comments;

  document.getElementById("testTitle").innerHTML = data6.testTitle;
  document.getElementById("testStep").innerHTML = data6.testStep;
  document.getElementById("testType").innerHTML = data6.testType;
  document.getElementById("testRangeStart").innerHTML = data6.testRangeStart;
  document.getElementById("expectedDisplay").innerHTML = data6.display;
  document.getElementById("actualDisplay").innerHTML = data6.actualDisplay;
  document.getElementById("passFail").innerHTML = data6.passFail;
  document.getElementById("comments").innerHTML = data6.comments;

 }