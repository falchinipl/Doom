  var app = angular.module("PierluigiApp",[]);
app.controller("GameController",['$scope','$timeout','$interval',function($scope,$timeout,$interval){
var bool = false;
 var m ;
 console.log(bool);
    $scope.sfera = function(){
    bool = true;
    console.log(bool);
      
    }  
  $('.dial').val(0).trigger('change').delay(2000);
    var myColor = 'red';    
    var myKnob = $(".dial").knob({
        'min':0,
        'max':m,
        'readOnly': true,
        'width': 120,
        'height': 120,
        'fgColor': myColor,
        'dynamicDraw': true,
        'thickness': 0.2,
        'tickColorizeValues': true,
        'skin':'tron'
    })     
  
    
        var tmr = self.setInterval(function(){myDelay()},600);        
          if(bool = true){
            m= m + 100;
          }else{
            m = 100;
          }
              
            
        function myDelay(){
            m -= 10;
            switch(m)
            {
            case 40:
                  myColor = 'yellow';
              break;
            case 70:
                  myColor = 'green';
              break;                    
            case 100:
              window.clearInterval(tmr);
              break;
            }            
            $('.dial').trigger('configure', {'fgColor':myColor}); 
            $('.dial').val(m).trigger('change');
        }    

}]);
 