const cardholder = document.querySelector(".ri-menu-3-line");
const menu = document.querySelector(".menu");

cardholder.addEventListener("click",() => {
    menu.classList.toggle("menu-active");
});


window.onscroll = () => {
    menu.classList.remove("menu-active");
};

const btnFilter = document.querySelectorAll(".product-box ul li");
const imgitem = document.querySelectorAll(".product-list img");

btnFilter.forEach((data) => {
    data.onclick = () => {
        btnFilter.forEach((data) => {
            data.className = "";

        });

        data.className = "active";

        // Filter image
        const btnText = data.textContent;
        imgitem.forEach((img) => {
            img.style.display = "none"
            if (img.getAttribute("data-filter") == btnText.toLowerCase() || btnText == "All Product") {
                img.style.display = "block";
            }
        });

    };
});