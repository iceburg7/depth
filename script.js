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
	
	var maxLevelUpdate = function(y){
		if (maxLevel < level){
			maxLevel = level;
		}
	}
	
	
	
	
	
	
	
	var goDown = function(w){
		console.log("down from level " + w);
		
		if (level===0){
			console.log("reached level 1.");
			level = 1;
			setLevelText("01");
			hide(".XstairsUp");
			show(".stairsUp");
			hide(".XdungeonLevel");
			show(".dungeonLevel");
		}else if (level===1){
			console.log("reached level 2.");
			level = 2;
			setLevelText("02");
		}else if (level===2){
			console.log("reached level 3.");
			level = 3;
			setLevelText("03");
		}else if (level===3){
			console.log("reached level 4.");
			level = 4;
			setLevelText("04");
		}else if (level===4){
			console.log("reached level 5.");
			level = 5;
			setLevelText("05");
		}else if (level===5){
			console.log("reached level 6.");
			level = 6;
			setLevelText("06");
		}else if (level===6){
			console.log("reached level 7.");
			level = 7;
			setLevelText("07");
		}else if (level===7){
			console.log("reached level 8.");
			level = 8;
			setLevelText("08");
		}else if (level===8){
			console.log("reached level 9.");
			level = 9;
			setLevelText("09");
		}else if (level===9){
			console.log("reached level 10.");
			level = 10;
			setLevelText("10");
		}else if (level===10){
			console.log("reached level 11.");
			level = 11;
			setLevelText("11");
		}else if (level===11){
			console.log("reached level 12.");
			level = 12;
			setLevelText("12");
		}
		
		
	}
	
	
	
	
	var goUp = function(w){
		console.log("up from level " + w);
		
		if (level===1){
			console.log("reached level 0.");
			level = 0;
			setLevelText("00");
			hide(".stairsUp");
			show(".XstairsUp");
			hide(".dungeonLevel");
			show(".XdungeonLevel");
		}else if (level===2){
			console.log("reached level 1.");
			level = 1;
			setLevelText("01");
		}else if (level===3){
			console.log("reached level 2.");
			level = 2;
			setLevelText("02");
		}else if (level===4){
			console.log("reached level 3.");
			level = 3;
			setLevelText("03");
		}else if (level===5){
			console.log("reached level 4.");
			level = 4;
			setLevelText("04");
		}else if (level===6){
			console.log("reached level 5.");
			level = 5;
			setLevelText("05");
		}else if (level===7){
			console.log("reached level 6.");
			level = 6;
			setLevelText("06");
		}else if (level===8){
			console.log("reached level 7.");
			level = 7;
			setLevelText("07");
		}else if (level===9){
			console.log("reached level 8.");
			level = 8;
			setLevelText("08");
		}else if (level===10){
			console.log("reached level 9.");
			level = 9;
			setLevelText("09");
		}else if (level===11){
			console.log("reached level 10.");
			level = 10;
			setLevelText("10");
		}else if (level===12){
			console.log("reached level 11.");
			level = 11;
			setLevelText("11");
		}
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	$(document).on("click",".stairsDown",function(){
		goDown(level);
		maxLevelUpdate();
		console.log(maxLevel);
	});
	
	$(document).on("click",".stairsUp",function(){
		goUp(level);
		console.log(maxLevel);
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});