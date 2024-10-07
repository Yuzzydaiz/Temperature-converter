textbox=document.getElementById("textbox")
CtoF=document.getElementById("CtoF")
FtoC=document.getElementById("FtoC")
CtoK=document.getElementById("CtoK")
KtoC=document.getElementById("KtoC")
FtoK=document.getElementById("FtoK")
KtoF=document.getElementById("KtoF")
result=document.getElementById("result")
let temp;

function convert(){
    if(textbox.value==""){
        result.textContent="You did not enter a temperature value !!!"
    }
    else{
        if(CtoF.checked){
            temp=Number(textbox.value)*(9/5) + 32
            temp=temp.toFixed(2)
            result.textContent=`It is equivalent to ${temp}F`
        }
        else if(FtoC.checked){
            temp=(Number(textbox.value) - 32)*(5/9)
            temp=temp.toFixed(2)
            result.textContent=`It is equivalent to ${temp}°C`
        }
        else if(CtoK.checked){
            temp=Number(textbox.value) + 273
            temp=temp.toFixed(2)
            result.textContent=`It is equivalent to ${temp}K`
        }
        else if(KtoC.checked){
            temp=Number(textbox.value) - 273
            temp=temp.toFixed(2)
            result.textContent=`It is equivalent to ${temp}°C`
        }
        else if(FtoK.checked){
            temp=(Number(textbox.value) - 32)*(5/9) + 273
            temp=temp.toFixed(2)
            result.textContent=`It is equivalent to ${temp}K`
        }
        else if(KtoF.checked){
            temp=(Number(textbox.value) - 273)*(9/5) + 32
            temp=temp.toFixed(2)
            result.textContent=`It is equivalent to ${temp}F`
        }
        else{
            result.textContent="You did not choose the temperature you are converting to !!!"
        }
    }
}