const inputFile = document.querySelector('#input-upload')
const pictureImage = document.querySelector('.picture-image')
const pictureImageText = "Drag and drop or click to upload"
pictureImage.innerHTML = `<img class="imgDrop" src="assets/images/icon-upload.svg" alt="">`
pictureImage.innerHTML += pictureImageText

let uploadImage = null


inputFile.addEventListener('change', function(e){
    const inputTarget = e.target
    const file = inputTarget.files[0]

    if(file){
        const reader = new FileReader(file)

        reader.addEventListener('load', function(e){
            const readerTarget = e.target

            uploadImage = readerTarget.result;

            const img = document.createElement('img')
            img.src = uploadImage
            img.classList.add('picture-img')

            pictureImage.innerHTML = ''

            pictureImage.appendChild(img)

            const containerImg = document.querySelector('.container-generad img');
            if (containerImg) {
                containerImg.src = uploadImage;
            }
        })
        reader.readAsDataURL(file)
    }else {
        pictureImage.innerHTML = pictureImageText
    }
})

const fullName = document.querySelector('input#name')
const email = document.querySelector('input#email')
const github = document.querySelector('input#github')


function teste(){
  console.log(fullName.value)  
  console.log(email.value)  
  console.log(github.value)  
  console.log(` <img src="${uploadImage}" alt=""> `)

   document.body.innerHTML = `
    <main>
        <h1>Congrats, ${fullName.value}! Your ticket is ready.</h1>
        <p>We've emailed your ticket to ${email.value} and will send updates in the run up to the event.</p>
        <div class="ticked">
            <div class="container-ticked">
                <img src="assets/images/pattern-ticket.svg" alt="ticked">
                <div class="container-texto">
                    <div class="texto-ticked">
                        <figure><img class="icon-logo" src="assets/images/logo-mark.svg" alt=""><h1>Conding Cof</h1></figure>
                        <p class="data-event">Jan 31, 2025 / Austin, TX </p>
                        
                    </div>
                    <div class="container-generad">
                        <img class="avatar" src="${uploadImage}" alt="">
                        <div class="ticked-generad">
                            <h1>Jonathan kristof</h1>
                            <figure class="icon-github"><img src="assets/images/icon-github.svg" alt=""><p>Conding Cof</p></figure>
                        </div>
                    </div>
                </div>
                <div class="codigo">
                    <h2>#01609</h2>
                </div>
            </div>
        </div>
    </main>
   ` 
// window.location.href = 'page2.html';
}
