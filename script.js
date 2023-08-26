// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(Links => {
//                 Links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// };

document.addEventListener("DOMContentLoaded", function() {
    // Get all the navigation links
    const navLinks = document.querySelectorAll(".navbar a");

    // Add a click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            // Prevent the default behavior (going to the link)
            event.preventDefault();

            // Get the target element's ID from the href attribute
            const targetId = link.getAttribute("href");

            // Scroll to the target element using JavaScript
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
