let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector.apply('.navbar')

menuIcon.oneclick =() => {
menuIcon.classList.toggle('bx-x')
navbar.classList.toggle('active')
};

const observer = new IntersectionObserver((entries)=>{
 entries.forEach(entries => {
    console.log(entries)
    if(entries.isIntersecting){
        entries.target.classList.add("show")

    }else{
        entries.target.classList.remove("show")
    }
 })
})

const hiddenElements = document.querySelectorAll(`.hidden`);
hiddenElements.forEach((El) => observer.observe(EL));

  