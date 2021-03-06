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
       "address": "",
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
       "address": "",
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
       "address": "",
       "calibrationLocation": "Wigan"
    },
    {
     "jobNumber": "051674-01",
     "dateReceived": "11/19/2021",
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
    "jobNumber": "051674-02",
    "dateReceived": "11/19/2021",
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
    getMyJobsAdmin();
    getCurrentJobs();
 }
 function processAdminDashboard2(){

    getCurrentJobs();
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
 function getCurrentJobs(){
  var data0 = jobDetails['job'][0];
  var data1 = jobDetails['job'][1];
  var data2 = jobDetails['job'][2];
  var data3 = jobDetails['job'][3];
  var data4 = jobDetails['job'][4];
  var data5 = jobDetails['job'][5];
   
  console.log(data0);

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