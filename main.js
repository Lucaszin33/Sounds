function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ZjrF4KsCl/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Tô ouvindo - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_b+","+random_number_r+","+random_number_g+")";

    img = document.getElementById('photo') 

    if (results[0].label == "Miados") {
      img.src = 'cat.gif';
    } else if (results[0].label == "rugidos") {
      img.src = 'lion.gif';
    } else if (results[0].label == "Latidos") {
      img.src = 'dog.gif';
    }else if (results[0].label == "Mugido"){
      img.src = 'cow.gif';
    }else{
      img.src = 'background.jpg';
    }
  }
}






















































