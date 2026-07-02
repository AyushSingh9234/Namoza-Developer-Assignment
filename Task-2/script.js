const bookingForm = document.getElementById("bookingForm");
const successMessage = document.getElementById("successMessage");
const bookBtn = document.getElementById("bookBtn");

bookBtn.addEventListener("click", () => {
    document
        .getElementById("bookingForm")
        .scrollIntoView({
            behavior: "smooth"
        });
});

bookingForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
        event:"consultation_form_submitted",
        patient_name:name,
        phone_number:phone
    });

    bookingForm.reset();

    successMessage.style.display="block";

});
const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.classList.add("show");

}

});

});
function changePain(type, element){

    document.querySelectorAll(".pain-btn").forEach(btn=>{
        btn.classList.remove("active");
    });

    element.classList.add("active");

    const title=document.getElementById("painTitle");
    const desc=document.getElementById("painDesc");

    if(type==="knee"){
        title.innerHTML="Matched: Knee & Joint Care";
        desc.innerHTML="Our orthopaedic specialists treat knee pain, ligament injuries, arthritis and sports injuries with personalized consultation.";
    }

    if(type==="back"){
        title.innerHTML="Matched: Spine & Back Care";
        desc.innerHTML="Expert treatment for lower back pain, slipped disc, posture problems and spine-related disorders.";
    }

    if(type==="shoulder"){
        title.innerHTML="Matched: Shoulder & Sports Injury Care";
        desc.innerHTML="Specialized consultation for shoulder pain, frozen shoulder, rotator cuff injuries and sports injuries.";
    }

}