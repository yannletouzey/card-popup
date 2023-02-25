const container = document.getElementById('container')
const containerThumbnail = document.getElementById('containerThumbnail')
const thumbnail = document.querySelectorAll('.thumbnail')
const img = document.getElementById('img')
const boxArticle = document.getElementById('boxArticle')
const containerImg = document.getElementById('containerImg')
article.innerHTML = ""

container.addEventListener('mouseenter', ()=>{
    container.classList.add('container-active')
    containerImg.classList.add('containerImg-active')
    img.classList.add('img-active')
    containerThumbnail.classList.add('containerThumbnail-active')
    boxArticle.classList.add('boxArticle-active')
    article.innerHTML = "Lorem ipsum dolor sit amet consectetur."
    thumbnail.forEach(function(className) {
        className.classList.add("thumbnail-active")
    }); 
})
container.addEventListener('mouseleave', ()=>{
    containerImg.classList.remove('containerImg-active')
    container.classList.remove('container-active')
    img.classList.remove('img-active')
    containerThumbnail.classList.remove('containerThumbnail-active')
    boxArticle.classList.remove('boxArticle-active')
    article.innerHTML = ""
    thumbnail.forEach(function(className) {
        className.classList.remove("thumbnail-active")
    }); 
})