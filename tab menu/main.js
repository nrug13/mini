let tabs=document.querySelectorAll(".tabs-toggle");
let contents=document.querySelectorAll(".tabs-content");



tabs.forEach((tab,number)=>{
    tab.addEventListener("click",()=>{
        contents.forEach((content)=>{
            content.classList.remove("is-active");
        });
        tabs.forEach((tab)=>{
            tab.classList.remove("is-active");
        });
        contents[number].classList.add("is-active");
        tabs[number].classList.add("is-active");
    })
})