
function load(){
    // get inputs
    var name = document.getElementById('name').value;
    var aValue = parseFloat(document.getElementById('equateA').value);
    var bValue = parseFloat(document.getElementById('equateB').value);
    var hValue = parseFloat(document.getElementById('equateH').value);
    var kValue = parseFloat(document.getElementById('equateK').value);
    var den = parseFloat(document.getElementById('dif').value);
    var rMin = parseFloat(document.getElementById('minRange').value);
    var rMax = parseFloat(document.getElementById('maxRange').value);
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
    //function tablePoints(){
        // set min range as first point
        var i = rMin*den;
        var index = i;
        var max = rMax * den;
        // repaets til index reaches max range
        //plug in step by step and log for debug
        while (index <= max){
            let pointX = index/den;
            console.log('equation: '+aValue.toString()+'(-'+bValue.toString()+')^('+pointX + hValueCons+')'+kValueCons+' Range: ['+rMin+','+rMax+']');
            console.log('xValue:'+pointX);
            var exponentMkr = index - (hValue*den);
            console.log('raisedTo:'+exponentMkr);
            var power = (-1*bValue)**exponentMkr;
            var root = Math.pow(power, 1/den);
            var assembler = aValue*root;
            console.log('assembleMultiplication:'+assembler);
            var pointY = assembler + kValue;
            console.log('yValue:'+pointY);
            console.log('coordinates:('+pointX+','+pointY+')');
            index = index + 1;
            
            //display

            
            

        //}
        //tablePoints();

    }


    
    
}