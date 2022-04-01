function start()
{
navigator.mediaDevices.getUserMedia({
audio:true  
});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/zk7TKkqpM/model.json',ModelLoaded);
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
img=document.getElementById("Ear");
if(results[0].label=="bark")
{
img.src="https://media1.giphy.com/media/m9pQ6KapT7Cq3DQ5DZ/200.gif"    
}
else if (results[0].label=="meow")
{
img.src="https://media0.giphy.com/media/13lWraa7dfb7G0/giphy.gif"    
}
}
}