var app = angular.module("PierluigiApp",[]);
app.controller("GameController",['$scope','$timeout','$interval',function($scope,$timeout,$interval){
	$scope.monsters=[];
	$scope.monsters2=[];
	$scope.incorrectLettersChosen=[];
	$scope.correctLettersChosen=[];
	var selectedWord='';
  var isTrue = false;
  var isTrue_due = false;
	var image;
	var superhealth = false;
	var riempiArray = function(){
		for (i=1; i<10; i++){
		image = "./images/"+i+".png";
		$scope.monsters.push(image);

		
		}
		return $scope.monsters;

	}

	
	riempiArray();	

	var delay = function(){
			$timeout(function() {
				$(".imgButton").remove();
				
			},1500);
	}
	var indice1;
	var indice2;
	var selectRandomMonsters = function(index, index1) {
		indice1 = index;
		indice2 = index1;
		return [$scope.monsters[index], $scope.monsters[index1]];
		
		
	}

  function boolean(){
    $(".uno").click(function(){
      isTrue = true;
      console.log(isTrue);
   
      
    
      
    })
   $(".due").click(function(){
      isTrue_due = true;
      console.log(isTrue_due);
       
 
      
    })
 
 
      
    return [isTrue,isTrue_due];
  
}





console.log(isTrue);
	var health=100;
	var myDial = $(".dial");
  var myColor;    
  var m = health; 
  $scope.vite = 5;

 
	$scope.health=m;
	var val1 = 0;
	var val2 = 0;

  var addColor = function(a,b,c){
    myDial.addClass(a,b,c);
   
  }
  var removeColor = function(a,b,c){
  
    myDial.removeClass(a,b,c);
  }
  var activeInterval = 0;
  var disabled = function(){
  $timeout(function(){
 
      if($(window).width() >= 768){
        activeInterval = 750;
      }else if($(window).width() >= 500 && $(window).width() <= 768){
         activeInterval = 620;
      }else if($(window).width() <= 500){
         activeInterval = 380;
      }

    $(".imgButton").prop("disabled",true);

  },activeInterval);
}

var tmr = 0;

function replayGif(){
   var img = new Image();
   img.src = './images/doomguy.gif';

   $('.death').css('background-image', 'url("' + img.src + '?x=' + Date.now() + '")' );
}


var restart = function(){
$('.dial').val(0).trigger('change').delay(2000);
  
    tmr = self.setInterval(function(){myDelay()},50);  
          var myDelay =  function(){
          if($scope.vite>0){
            m += 10;
          }else{
            m+=0;
          }
          switch(m)
            { 
            case 40:
                  addColor("yellow");
                  myColor = '#d69e17';
              break;
            case 70:
                  addColor("green");
                  myColor = '#42c852';
              break;                    
            case 100:
              window.clearInterval(tmr);
              
              break;
            }   

                  
            $('.dial').trigger('configure', {'fgColor':myColor}); 
            $('.dial').val(m).trigger('change');
        }    
     
   if($scope.vite == 0){
      $(".wrapper").animate({"opacity":"hide"},1000);
      $interval.cancel(monsterChosen);
      
         $timeout(function() {
           $(".back").addClass("block");
           $(".deathScreen").css("display","block");
  
            replayGif(); 
       }, 2000);
   }}


   var getMonsters = function () {


  var possibilities = {
    '0': function () {
         
         console.log(isTrue);

          val  = 0;
      
         
        
     
    
      $('.dial').val(m).trigger('change');
      return val;

    },
    '1': function () {
       
           console.log(isTrue);
         
         val  = 0;
       
       
        
      $('.dial').val(m).trigger('change');
      return val;

    },
    '2': function () {
      
         console.log(isTrue);
        
          val  = Math.floor(Math.random() * (-45+6)) - 6; 
      

      
      $('.dial').val(m).trigger('change');
      return val; 
    },
    '3': function () {
          
           console.log(isTrue);
  
          val  = 0;
      
     
      $('.dial').val(m).trigger('change');
      return val;
    },
    '4': function () {
 
       console.log(isTrue);
        
          val  = Math.floor(Math.random() * (-45+10)) - 10; 
        
    
      $('.dial').val(m).trigger('change');
      return val;
    },
     '5': function () {
     
         console.log(isTrue);
          
          
           val  = Math.floor(Math.random() * (-24+2)) - 2;  
        
 
     
      $('.dial').val(m).trigger('change');
      return val; 
    },
     '6': function () {
           
         console.log(isTrue);
      
          val  = Math.floor(Math.random() * (-65+18)) - 18;  
         
 
      
      $('.dial').val(m).trigger('change');
      return val;  
    },
    '7': function () {
           
           console.log(isTrue);
  
          val  = Math.floor(Math.random() * (-40+6)) - 6;  
     
      
      $('.dial').val(m).trigger('change');
      return val; 
    },
    '8': function () {
         
         console.log(isTrue);
       
          val  = 0;
        
        
  
      $('.dial').val(m).trigger('change');
      return val; 
    },
    '9': function () {
     
       console.log(isTrue);

          val  = 0;
      

     
      
      $('.dial').val(m).trigger('change');
      return val; 
    }

  };


  return [possibilities[indice1](),possibilities[indice2]()];
}

var changeValue = function(){
var change = {
    '0': function () {
      if(superhealth == true){
            val_uno  = 0;
         }else{
            val_uno  = 10;
         }  
         

      return val_uno;

    },
    '1': function () {
       
           console.log(isTrue);
         if(superhealth == true){
            val_uno  = 0;
         }else{
            val_uno  = 10;
         }  
         
       

      return val_uno;

    },
    '2': function () {
      

     
          val_uno  = 0;
          return val_uno;

    },
    '3': function () {

  
          if(superhealth == true){
            val_uno  = 0;
         }else{
            val_uno  = 25;
         }  
         


      return val_uno;
    },
    '4': function () {

          val_uno  = 0;

      return val_uno;
    },
     '5': function () {


           val_uno  = 0;

      return val_uno; 
    },
     '6': function () {
  
       
      
          val_uno  = 0;

      return val_uno;  
    },
    '7': function () {

  
          val_uno  = 0;
 
         
     
      return val_uno;

    },
    '8': function () {
 

       
          if(superhealth == true){
            val_uno  = 0;
         }else{
            val_uno  = 25;
         }  
         
        

      return val_uno; 
    },
    '9': function () {

          if(superhealth == true){
            val_uno  = 0;
         }else{
            val_uno  = 10;
         }  
         

      return val_uno; 
    }

  };


  return [change[indice1](),change[indice2]()];
}

var tmr2 = Math.floor(Math.random() * (180000-45000)) + 45000;
var appariSfera = function(){
$timeout(function(){
  $(".sfera").css("display","block");
},tmr2);

}

$scope.openInfo = function(){
  $(".wrapper").css("display","none");
  $(".infoScreen").css("display","block");
  $(".openInfo").css("display","none");
}
$scope.closeInfo = function(){
  $(".wrapper").css("display","block");
  $(".infoScreen").css("display","none");
  $(".openInfo").css("display","block");
}


var myMax = 100;
$scope.sfera = function(){
  superhealth = true;
    if(superhealth == true){
        addColor("yellow");
    console.log(superhealth);         
  removeColor("green red ");
  myColor = '#d69e17';
   $('.dial').trigger('configure', {'fgColor':myColor}); 
  $('.dial').val(m).trigger('change'); 
    valore3 = getSfera();
    console.log(valore3); 
    m = valore3;
    }
    changeColor();
    $("#dial1").css("display","block");
    $("#dial2").css("display","none");
     $(".sfera").css("display","none");
     
appariSfera();
}

function valorisfera(){
      valore3 = getSfera();
    console.log(valore3); 
    m = valore3;

}


   var getSfera = function () {


  var megaHealth = {
    'true': function () {
         
          
           myMax = 200;
          mega  =  m + 100;
          
         
        
     
    
    $('#input1').trigger('configure', {'max':myMax}); 
    $('#input1').val(m).trigger('change');
      return mega;
},   'false': function () {
         
          
           myMax = 100;
          mega  = m;
      
         
        
     
    
       $('#input2').trigger('configure', {'max':myMax}); 
      $('#input2').val(m).trigger('change');
      return mega;
}
    };
  


  return megaHealth[superhealth]();
}

 

var valore1;
var valore2;
var val1 = 0
var val2 = 0;
var valori = function(){

 

  valore1 = getMonsters();
  valore2 = changeValue();


if(isTrue == true){
val1 = valore2[0];

}else{
val1 = valore1[0];
}
if(isTrue_due == true){
 val2 = valore2[1];

}else{
val2 = valore1[1];
}

 


if(selectMonsters[0] == null || selectMonsters[1] == null){
  if(isTrue == true){
    if(superhealth == true){
            val1  = 0;
         }else{
            val1  = 10;
         }  
         
      
  }else{
        val1   = 0;
}
  if(isTrue_due == true){
        if(superhealth == true){
            val2  = 0;
         }else{
            val2 = 10;
         }  
         
  }else{
        val2   = 0;
}
}

    m = m+val1+val2;
 
    if(superhealth == false){

       if(m>100){
        m = m-(m-100);
      }
    }
     
    
       if(m <= 0){
          $scope.vite-=1;
          m=0;
              
             restart();
           }
                   
         
   
           return [val1,val2];

}
$scope.back = function(){
  $(".wrapper").animate({"opacity":"show"},1000);
  $(".deathScreen").css("display","none");
  $(".death").removeClass("background");
    $(".teschio").css("display","block"); 
      $scope.vite = 5;
      addColor("green");
      myColor = '#42c852';

}

	var newGame = function() {

  disabled();
   $(".uno").addClass("case"+indice1+"");
    $(".due").addClass("case"+indice2+"");

  
$timeout(function(){
valori();

},800);

boolean();
isTrue = false;
isTrue_due = false;         	
}
function block (){
 $("#dial1").css("display","none");
  $("#dial2").css("display","block");
}

  var changeColor = function(){
     
         if(m>100  ){
              myColor = 'blue';
             
             
               addColor("blue");
             
              removeColor("green red yellow");
                 if(m>200){
                  m = m-(m-200);
                  }
        
         
            }else if(m<=100 && m>=70 ){
              myColor = '#42c852';

             block();

         superhealth = false;
         addColor("green");
    
        removeColor("blue yellow red");
        
         
            }else if(m<=70 && m>=40){
              myColor = '#d69e17';
              block();
             superhealth = false;
               addColor("yellow");
             
              removeColor("green red blue");
        
         
               
            }else if(m<=40 && m>=1){
              myColor = '#e30000';
                block();
                addColor("red");
              removeColor("green yellow blue");
             
        
        
             
              
            } 

              $('.dial').trigger('configure', {'fgColor':myColor}); 
              $('.dial').val(m).trigger('change');  
        
           
            
  } 



var intervallo = 0;
 		var countdown;
 		var count = 1;
		var selectMonsters;
		var selectUno;
		var selectDue;
		$scope.isDisabled = false;
    if($(window).width() > 500){
      intervallo = 2800;
    }else if($(window).width() <= 500){
      intervallo = Math.floor(Math.random() * (2800-1500)) + 1500;
    }

  function spawnMonsters(){
    $(".teschio").css("display","none");
    console.log(superhealth);  
    var returnVal= selectRandomMonsters(Math.round(Math.random()*$scope.monsters.length),Math.round(Math.random()*$scope.monsters.length));
    selectMonsters = returnVal

    selectUno = selectMonsters[0];
    selectDue = selectMonsters[1];

    if(selectUno == null || selectDue == null){
      selectUno = "./images/1.png";
      selectDue = "./images/1.png";

    }
    console.log(val1);
    console.log(val2);
       $scope.isDisabled = true;
          countdown = $interval(function() {
            
       
          count++;
      if(count == 3){
        count = 1;
        $interval.cancel(countdown);
        $scope.isDisabled = false;}

    }, 800);

    $(".correctLetter").append("<button class='imgButton uno '></button>");
    
    $(".incorrectLetter").append("<button class='imgButton due '></button>");
    $(".uno").append("<img src="+selectUno+" >");
    $(".due").append("<img src="+selectDue+" >");
    delay();
    newGame();
    $timeout(function(){
      changeColor(); 
    },800);
      


 
 
    console.log($(".due"));
    console.log($(".uno"));

  }         
       
        
$scope.monsterChosen = function(){
  spawnMonsters();
  appariSfera();

		monsterChosen = $interval(function() {
      
 spawnMonsters();

	},intervallo);
  }

$(function() {
        $(".dial").knob({

        	'min':0,
    		'max':m,
    		
        }).trigger('change');


    });



}]);