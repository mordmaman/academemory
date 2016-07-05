var memory_array = ['images/1.jpg','images/1.jpg','images/2.jpg','images/2.jpg','images/3.jpg','images/3.jpg','images/4.jpg','images/4.jpg',
                    'images/5.jpg','images/5.jpg','images/6.jpg','\images/6.jpg','images/7.jpg','images/7.jpg','images/8.jpg','images/8.jpg'];
var memory_values = []; //empty array for storing values
var memory_tile_ids = []; //storing memory tile ids
var tiles_flipped = 0; //keeping tiles of how many tiles are flipped


Array.prototype.memory_tile_shuffle = function(){
			var i = this.length, j, temp;
			while(--i > 0){
				j = Math.floor(Math.random() * (i+1));
				temp = this[j];
				this[j] = this[i];
				this[i] = temp;
				}
	  }

function newBoard(){
			tiles_flipped = 0;//every time the baord is refreshed we reset the number of tiles to zero
			var output = '';//empty variable for output
			memory_array.memory_tile_shuffle(); //put the memorytileshuffle method on our array
			for(var i = 0; i < memory_array.length; i++){	
						
				output += '<div class = "tile" id="tile_'+i+'"';
				output += 'onclick="memoryFlipTile(this,' +'\''+memory_array[i]+'\''+')"></div>'

				'<div id="tile_'+i+'"';
				'onclick="memoryFlipTile(this,' +'\''+memory_array[i]+'\''+')"></div>'
			}
			$('#memoryboard').html(output);
		}

function memoryFlipTile(tile,val){
	console.log("memoryFlipTile");
	if(tile.style.background == "" && memory_values.length < 2){
		tile.style.backgroundImage = "url("+'\''+val+'\''+")";
		console.log("background-image", "url("+'\''+val+'\''+")");
		console.log(memory_values);
		console.log(memory_tile_ids);
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id)
		}else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles_flipped +=2;
				memory_values = [];
				memory_tile_ids = [];
				if(tiles_flipped == memory_array.length){
					alert("Top notch nobbery");
					$('memoryboard').html = "";
					newBoard();		
					console.log(timer);
					clearTimeout(timer);	
				}
			}else{
				function flip2Back(){
					var tile_1 = document.getElementById(memory_tile_ids[0]);
					var tile_2 = document.getElementById(memory_tile_ids[1]);
					console.log(memory_tile_ids);
					tile_1.style.backgroundImage="url('images/bg.jpg')";
					tile_1.html = '';
					tile_2.style.backgroundImage="url('images/bg.jpg')";
					console.log("tile 2 swtichback");
					tile_2.html = '';
					memory_values = [];
					memory_tile_ids = [];
				}
				setTimeout(flip2Back, 500);
			}
		}
	}
}
$(document).ready(function(){

	$(".tile").click( function(){
		 $(".tile").off("click");
		var start = new Date().getTime(); 
		time = 0,  
		elapsed = '0.00';  

		function instance()  
		{  
			time += 1000;  
			elapsed = Math.floor(time / 1000) / 100;  
			if(Math.round(elapsed) == elapsed) { elapsed += '.00'; }  
			document.title = elapsed;  
			var diff = (new Date().getTime() - start) - time;  
			window.setTimeout(instance, (1000 - diff));  
			$('#time').html(elapsed);
		}  

		var timer = setTimeout(instance, 1000);
	});

});

// var start = new Date().getTime(),  
//     time = 0,  
//     elapsed = '0.00';  

// function instance()  
// {  
//     time += 1000;  
//     elapsed = Math.floor(time / 1000) / 100;  
//     if(Math.round(elapsed) == elapsed) { elapsed += '.00'; }  
//     document.title = elapsed;  
//     var diff = (new Date().getTime() - start) - time;  
//     window.setTimeout(instance, (1000 - diff));  
// 	$('#time').html(elapsed);
// }  

// window.setTimeout(instance, 1000);

// $('.tile').click(function({setTimeout(function() {
	
// }, timeout);}));

// document.getElementsByClassName('tile').addEventListener("click", setTimeout(instance, 1000));

//$('div').click(function() {setTimeout(instance, 1000)});

//$('div').click(setTimeout(instance, 1000));  
