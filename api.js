function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            var output="";
            for(var i=0;i<response.length;i++){
                if(response[i].completed==true){
                output += "<li> <input type = checkbox checked  disabled id=checkbox>"+ response[i].title + "</li>";
                }
                else{
                    output += "<li> <input type = checkbox id=checkbox>"+ response[i].title + "</li>";

                }
                
            }
            document.getElementById("demo").innerHTML=output;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}
var promise = new Promise(function(resolve,reject){

    window.onload = function() {
    setTimeout(loadAfterTime, 5000);
    }; 
    //window.onload = loadAfterTime();
   
    //loadAfterTime();
   
    function loadAfterTime(){
    var inputElems = document.querySelectorAll("#checkbox");
    console.log(inputElems);
   
    if(inputElems)
    {
    console.log(inputElems);
   
    }
    else{
    console.log("empty");
    } 
    var count = 0;
    inputElems.forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
    if (this.checked) {
    console.log("Checkbox is checked..");
    count++;
    } else {
    count--;
    console.log("Checkbox is not checked..");
    }
    console.log(count);
    if(count==5)
    {
    resolve("Congrats. 5 Tasks have been Successfully Completed");
    }
   
   
    });
    });
   
    promise.then(
    function(result) { alert(result);},
      );
    }
});