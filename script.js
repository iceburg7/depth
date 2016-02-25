$(document).ready(function(){

	console.log("it works.");
	
	var setCharClass = 0;
	var charClass = 0;
	var level = 1;
	var maxLevel = 1;
	var x = "placeholder";
	
	
	
	
	var hide = function(y){
		console.log("hiding "+y);
		$(y).removeClass("show");
		$(y).addClass("hide");
	}
	
	var show = function(y){
		console.log("showing "+y);
		$(y).removeClass("hide");
		$(y).addClass("show");
	}
	
	var setLevelText = function(y){
		$(".dungeonLevelText2").empty();
		$(".dungeonLevelText2").append(y);
	}
	
	
	
	
	var goDown = function(w){
		console.log("down from level " + w);
		
		if (level===1){
			console.log("reached level 2.");
			level = 2;
			setLevelText("02");
		}else if (level ===2){
			console.log("reached level 3.");
			level = 3;
		}
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	$(document).on("click",".stairsDown",function(){
		goDown(level);
	});
	
	$(document).on("click",".stairsUp",function(){
	
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});