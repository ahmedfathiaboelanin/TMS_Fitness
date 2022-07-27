let age=document.getElementById('age');
var gender=document.getElementById('gender');
var length=document.getElementById('length');
var weight=document.getElementById('weight');
var fat=document.getElementById('fat');
var total=document.getElementById('total');

function calculate(){
        if(gender.value=="male"){
                // if(weight == "" && age == "" && length == "" ){
                //         alert("information required");
                // }
                // else{
                        if(weight.value == '' || age == " " || length == ""){
                                console.log("ifo required")
                        }
                        if(fat=="" || fat.value > 13 || fat.value < 6){
                                total.innerHTML="your BMR is : " + (+(+weight.value*10) + (6.25 * +length.value) - (5 * +age.value) + 5) + " Kcal";
                                total.style.backgroundColor="green";
                        }
                        else if(fat.value <= 13 && fat.value >= 6){
                                total.innerHTML="Your BMR is : " + (370 + (21.6*(1 - (+fat.value /100))* +weight.value)) + " Kcal";
                                total.style.backgroundColor="green";
                        }
                        else{
                                total.style.backgroundColor="red";
                                total.innerHTML= "Your BMR is :";
                        }
                // }
        }
        else if(gender.value=="female"){
                // if(weight=="" || age=="" || length=="" ){
                //         alert("information required");
                // }
                // else{
                        if(fat=="" || fat.value > 20 || fat.value < 14){
                                total.innerHTML="Your BMR is : " + (+(+weight.value*10) + (6.25 * +length.value) - (5 * +age.value) - 161) + " Kcal";
                                total.style.backgroundColor="green";
                        }
                        else if(fat.value <= 20 && fat.value >= 14){
                                total.innerHTML= "Your BMR is : " + (370 + (21.6*(1 - (+fat.value /100))* +weight.value)) +" Kcal";
                                total.style.backgroundColor="green";
                        }
                // }
        }
        else{
                alert("Hint: Gender is required");
        }
}