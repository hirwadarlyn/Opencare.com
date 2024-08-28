let menubtn =document.querySelector('#menu_bars');
let mynav =document.querySelector('.navbar');
let contactBt = document.getElementById("contact-btn");

contactBt.onclick = () => {
    window.location.href = "contact.html";
}

menubtn.onclick = ()=>{
    menubtn.classList.toggle('fa-items');
    mynav.classList.toggle('active');
}