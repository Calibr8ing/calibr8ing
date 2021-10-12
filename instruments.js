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
