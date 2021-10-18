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
       "test": {
         "testDetails":[
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
       },
     {
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
       "Address": "",
       "calibrationLocation": "Harigate"
     },
     {
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
       "Address": "",
       "calibrationLocation": "Harigate"
     },
     {
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
       "Address": "",
       "calibrationLocation": "Wigan"
    },
    {
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
      "Address": "",
      "calibrationLocation": "Weston-super-Mare"
   },
   {
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
     "Address": "",
     "calibrationLocation": "Weston-super-Mare"
  }
   ]
 }
 
 //Job Details
 
 //this function is called onload - add other functions here
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
   var data = jobDetails['instrumentDetails'][0];
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
   document.getElementById("jobProcedure").innerHTML = data.procedure;
   document.getElementById("jobCompany").innerHTML = data.company;
   document.getElementById("jobDateRequested").innerHTML = data.dateRequested;
 }
 
 function getMyJobs() {
 
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
 function getMyJobs() {
   var data = jobDetails['job'][0];
   
   
   document.getElementById("jobOrderNumber").innerHTML = data.orderNumber;
   document.getElementById("jobNumber").innerHTML = data.jobNumber;
   document.getElementById("jobInstrument").innerHTML = data.instrumentCategory;
   document.getElementById("jobProcedure").innerHTML = data.instrumentProcedureNumber;
   document.getElementById("jobCompany").innerHTML = data.company;
   document.getElementById("jobDateRequested").innerHTML = data.dateReceived;
   
 }
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