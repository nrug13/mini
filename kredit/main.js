const payment = document.querySelector(".blok");
const hesabla = document.querySelector(".hesabla");
const temiz=document.querySelector(".temizle");
hesabla.addEventListener("click", function () {
    payment.innerHTML="";
    let aylar = document.querySelector(".months");
    let umumimiqdar = document.querySelector(".amount");
    let faiz = document.querySelector(".interest");
    let umumi=+umumimiqdar.value+(umumimiqdar.value*faiz.value/100)*aylar.value;

    let tarix = new Date();
    for (let i = 1; i <= aylar.value; i++) {
        let div = document.createElement("div");
        div.classList.add("col-2-5", "me-4", "mb-4","py-3", "border","rounded","d-flex","flex-column","w-25","mx-auto","mt-3");
        let p = document.createElement("p");
        p.classList.add("text-center")
        let ayliq=umumi/aylar.value;
        ayliq=Math.floor(ayliq);
        if(i==aylar.value){
            ayliq=umumi-((aylar.value-1)*ayliq);
        }
        p.innerHTML = `${ayliq}`
        div.append(p);
        let span = document.createElement("span");
        span.style.marginLeft="69px";
        tarix.setDate(tarix.getDate()+30)
        let year=tarix.getFullYear();
        let month=tarix.getMonth()+1;
        let day=tarix.getDate();
        month=(month<10)?"0"+month:month;
        day=(day<10)?"0"+day:day;
        let date=`${day}-${month}-${year}`;
        span.innerHTML=date;
        div.append(span);
        payment.append(div);
    }
    let h2=document.createElement("h2");
    h2.innerHTML=`Cəmi: ${umumi} AZN`;
    payment.append(h2);
});

temiz.addEventListener("click",function(){
   payment.innerHTML="";
});