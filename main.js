function start()
{
navigator.mediaDevices.getUserMedia({
audio:true  
});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/M4fnAA_KG/model.json',ModelLoaded);
}
function ModelLoaded()
{
classifier.classify(gotResults);
}
function gotResults(error,results)
{
if (error)
{
console.error(error);
}
else
{
console.log(results);
r= Math.floor(Math.random() * 255)+ 1;
g= Math.floor(Math.random() * 255)+ 1;
b= Math.floor(Math.random() * 255)+ 1;
document.getElementById("result_label").innerHTML="I Can Hear - "+ results[0].label;
document.getElementById("result_accuracy").innerHTML="Accuracy - "+ (results[0].confidence * 100).toFixed(2)+" %";
document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
document.getElementById("result_accuracy").style.color="rgb("+r+","+g+","+b+")";
}
}