document.addEventListener('DOMContentLoaded', function(){
    const thumbnails = document.querySelectorAll('.thumbnail img');
    const mainImage = document.querySelector('main-image img');

    thumbnails.forEach(thumbnail=>{
        thumbnail.addEventListener('click', function(){
            mainImage.src = thumbnail.src;
        })
    })
})