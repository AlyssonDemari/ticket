const inputFile = document.querySelector('#input-upload')
const pictureImage = document.querySelector('.picture-image')
const pictureImageText = "Drag and drop or click to upload"
pictureImage.innerHTML = `<img class="imgDrop" src="assets/images/icon-upload.svg" alt="">`
pictureImage.innerHTML += pictureImageText


inputFile.addEventListener('change', function(e){
    const inputTarget = e.target
    const file = inputTarget.files[0]

    if(file){
        const reader = new FileReader(file)

        reader.addEventListener('load', function(e){
            const readerTarget = e.target

            const img = document.createElement('img')
            img.src = readerTarget.result
            img.classList.add('picture-img')

            pictureImage.innerHTML = ''

            pictureImage.appendChild(img)
        })
        reader.readAsDataURL(file)
    }else {
        pictureImage.innerHTML = pictureImageText
    }
})
