
function load(){
    // get inputs
    var name = document.getElementById('name').value;
    var aValue = document.getElementById('equateA').value;
    var bValue = document.getElementById('equateB').value;
    var hValue = document.getElementById('equateH').value;
    var kValue = document.getElementById('equateK').value;
    var rMin = document.getElementById('minRange').value;
    var rMax = document.getElementById('maxRange').value;
    //console debug
        //set h and k for console
    if(hValue >= 0){
        var hValueCons = '-' + hValue.toString();

    } else{
        var hValueCons = '+'+ hValue.toString();
    }
    if(kValue >= 0 ){
        var kValueCons = '+' + kValue.toString();

    } else{
        var kValueCons = '-'+ kValue.toString();
    }
        // show values
    console.log('Name: '+name+' Equation: '+aValue.toString()+'(-'+bValue.toString()+')^(x'+hValueCons+')'+kValueCons+' Range: ['+rMin+','+rMax+']');
        // end Debug r1
    //change title
    titleProject = document.getElementById('nameOf');
    titleProject.innerHTML = name;
    //get points
    function tablePoints(){
        // set min range as first point
        var i = rMin;
        var index = i;
        // repaets til index reaches max range
        //plug in step by step and log for debug
        while (index < rMax){
            var pointX = index;
            console.log('xValue:'+pointX);
            var exponentMkr = index + hValue;
            console.log('raisedTo:'+exponentMkr);
            var assembler = a*Math.pow((-1*bValue),exponentMkr);
            console.log('assembleMultiplication:'+assembler);
            var pointY = assembler + kValue;
            //display

            
            

        }

    }


    
    
}