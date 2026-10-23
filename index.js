
document.addEventListener("DOMContentLoaded", function() {
    
    const form = document.querySelector("form");
    const inputs = document.querySelectorAll("input, textarea");
    const btn = document.querySelector(".btn");

    
    inputs.forEach(input => {
        input.addEventListener("focus", function() {
            this.style.border = "2px solid yellow";
            this.style.transform = "scale(1.02)";
            this.style.transition = "0.3s";
        });
        input.addEventListener("blur", function() {
            this.style.border = "none";
            this.style.transform = "scale(1)";
        });
    });

    form.addEventListener("submit", function(e) {
        
        let name = inputs[0].value.trim();
        let email = inputs[3].value.trim();
        let phone = inputs[4].value.trim();

        if (name === "") {
            alert("Please Enter Your Name!");
            e.preventDefault();
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Please Enter Valid Email!");
            e.preventDefault();
            return;
        }

        if (phone.length < 10) {
            alert("Phone number must be 10 digits!");
            e.preventDefault();
            return;
        }

       
        btn.innerHTML = "Submitting...";
        btn.style.backgroundColor = "green";
        btn.style.color = "white";

        function handleSubmit(e){
    e.preventDefault();
    alert("Thank you! Your form is submitted (Demo Mode)");
    return false;
}

   
    });
});