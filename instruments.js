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

