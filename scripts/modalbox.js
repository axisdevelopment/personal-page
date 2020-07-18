const contactBtn = document.getElementById("contact-btn");

const modalBox = document.getElementById("mbox-contact");

const closeBtn = document.getElementById("close");

contactBtn.onclick = () => {
    modalBox.style.display = "block";
}

closeBtn.onclick = () => {
    modalBox.style.display = "none";
}

window.onclick = (event) => {
    if (event.target === modalBox) {
        modalBox.style.display = "none";
    }
}