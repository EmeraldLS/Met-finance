body = document.querySelector("body")

bodyOptions = {
    rootMargin : "0px 0px 0px 0px"
}
bodyIntersect = new IntersectionObserver((entries, bodyIntersect) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            body.classList.add("active")
        }else{
            body.classList.remove("active")
        }
    })
}, bodyOptions)

bodyIntersect.observe(body)