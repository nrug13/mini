
function kredit(){
    //The 
    const amount = document.querySelector('#amount').value;
    const interest_rate = document.querySelector('#interest').value;
    const months = document.querySelector('#month').value;
    const interest = (amount * (interest_rate * 0.01)) / months;
  
    let payment = ((amount / months) + interest).toFixed(2); 
    let totalpay=amount*(1+(interest_rate*months)/100);
    //regedit to add a comma after every three digits
    //That is, a comma (,) will be added after every three numbers.
    //Example 50,000\
   
   // let block=document.createElement("div");
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
    totalpay=totalpay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
    //With the help of innerHTML, the information stored in the "payment" is displayed on the webpage.
    document.querySelector('#payment').innerHTML = `Aylıq ödəniş = ${payment}`
    document.querySelector('#totalpayment').innerHTML = `Ümumi = ${totalpay}`
   
}
function sil(){
    document.querySelector("#det").style.display="none"; 
}
