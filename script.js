document.addEventListener("DOMContentLoaded",function(){
    console.log("Ritesh Portfolio Loaded Successfully!");

    document.querySelectorAll("nav a").forEach(function(link){
        link.addEventListener("click",function(){
            console.log("Navigating to "+this.textContent);
        });
    });

    const sections=document.querySelectorAll(".section");
    const observer=new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.classList.add("visible");
            }
        });
    },{threshold:0.1});

    sections.forEach(function(section){
        observer.observe(section);
    });
});
