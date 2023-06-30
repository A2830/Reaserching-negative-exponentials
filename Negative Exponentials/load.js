
function load(){
    // get inputs
    var name = document.getElementById('name').value;
    var aValue = document.getElementById('equateA').value;
    var bValue = document.getElementById('equateB').value;
    var hValue = document.getElementById('equateH').value;
    var kValue = document.getElementById('equateK').value;
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
    console.log('Name: '+name+' Equation: '+aValue.toString()+'(-'+bValue.toString()+')^(x'+hValueCons+')'+kValueCons);
        // end Debug r1
    //change title
    titleProject = document.getElementById('nameOf');
    titleProject.innerHTML = name;
    //get table
    function tablePoints(){
        

    }


    
    
}