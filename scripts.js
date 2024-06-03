document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popupForm");
    var btn = document.getElementById("contactButton");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        popup.style.display = "block";
    }

    span.onclick = function() {
        popup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});

document.addEventListener('DOMContentLoaded',(event)=>{
    const imgdetail1 = document.getElementById('detail1');
    const imgdetail2 = document.getElementById('detail2');
    const imgdetail3 = document.getElementById('detail3');
    const image = document.getElementById('img');

    imgdetail1.addEventListener('click',()=>{
        image.querySelector('img').src = './img/image.png';
    });
    imgdetail2.addEventListener('click',()=>{
        image.querySelector('img').src = './img/Portraits.jpg';
    });
    imgdetail3.addEventListener('click',()=>{
        image.querySelector('img').src = './img/pic1.svg';
    });
    
});
