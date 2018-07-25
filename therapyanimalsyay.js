function revealAnswer(){
  console.log("function working");
  var answer = "Formal dog therapy programs began in 1976 devoted to training and certifying dogs in therapy for hospital patients. However use of therapy dogs date back to WWII. Therapy dogs regularly visited recovering soldiers to boost their mood and optimism."
  var joke = document.getElementById("funFact");
  joke.innerHTML= answer;
}
theButton.onclick = function pictureChange()
{
   document.getElementById("theImage").src="https://assets3.thrillist.com/v1/image/2510652/size/tmg-article_tall.jpg";
}
