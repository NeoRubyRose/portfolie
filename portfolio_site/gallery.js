// JavaScript Document



var index=0;
var nyFoto;

var imgList=["me4.png", "melanie_gal.png", "persona_5_gal.png", "ponyo_gal.png", "next_week_gal.png"];
var bigImg = document.querySelector("#photoseries");


var leftArrow = document.querySelector("#prev");
leftArrow.addEventListener("click", skift);
var rightArrow = document.querySelector("#next");
rightArrow.addEventListener("click", skift);


function skift(e){
	if(e.target.getAttribute("id")==="prev"){
		if(index > 0){
		index--;
		}else{
			index = imgList.length-1;
		}
		}else{
		if (index < imgList.length-1) {
		  index++;
		   }else{
			   index = 0;
		   }
	  }
	console.log(index);
nyFoto = "images/" + imgList[index];
	bigImg.setAttribute("src", nyFoto);
}











