function Checker(x){

}

function Calc(){
    let x = document.getElementById("amount").value
    let y = document.getElementById("prepo").value
    let z = document.getElementById("month").value
    if(x!=0 && y!=0 && z!=0){
        x=Number=(x)
        y=Number=(y)
        z=Number=(z)
        if (x>0 && x<=300000){
            if(y>0 && y<=10){
                document.getElementById("amo").innerText = (x*(1+(y/100))).toFixed(2)
                document.getElementById("ayylq").innerText = ((x*(1+(y/100)))/z).toFixed(2)
            }else{
                alert("duzgun faiz deyerini daxil et max 10")
            }
        }else{
            alert("duzgun meblegi daxil et max 300000")
        }
    }else{
        alert("boshluqlari doldurun")
    }
}