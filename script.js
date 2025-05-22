var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sideMenu = document.getElementById("sidemenu");

function openmenu(){
    sideMenu.style.right = "0";
}

function closemenu(){
    sideMenu.style.right = "-200px ";
}

document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            alert('Email sent successfully!');
            form.reset();
        } else {
            alert('Failed to send email. Please try again.');
        }
    } catch (error) {
        alert('An error occurred. Please try again.');
    }
});