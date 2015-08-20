function showNumberWithAnimation(i,j,randNumber){
   var numberCell=$('#number-cell-'+i+'-'+j);
   
    /*var numberCell=$("#number-cell-"+randx+"-"+randy);
    numberCell.css({
         "width" : "100px",
         "height" : "100px",
         "top" : getPosTop(randx,randy),
         "left" : getPosLeft(randx,randy),
         "background" : getNumberBackgroundColor(randNumber),
         "color" : getNumberColor(randNumber)
    });
    numberCell.text(randNumber);*/
   numberCell.css("background-color",getNumberBackgroundColor(randNumber));
   numberCell.css("color",getNumberColor(randNumber));
   numberCell.text(randNumber);
   
   numberCell.animate({
   	  width:cellSideLength,
   	  height:cellSideLength,
   	  top:getPosTop(i,j),
   	  left:getPosLeft(i,j)
   },50);

}

function showMoveAnimation(fromx,fromy,tox,toy){
	var numberCell=$("#number-cell-"+fromx+"-"+fromy);
	numberCell.animate({
		top:getPosTop(tox,toy),
		left:getPosLeft(tox,toy)
	},200);
}

function updateScore(score){
   $("#score").text(score);
}