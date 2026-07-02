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