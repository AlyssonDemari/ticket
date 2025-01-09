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
        alert('[ERRO]')
        pictureImage.innerHTML = pictureImageText
    }
})

const fullName = document.querySelector('input#name')
const email = document.querySelector('input#email')
const github = document.querySelector('input#github')


function createNewPage(){

    const body = document.querySelector('body')
     
    body.innerHTML = ''

    body.innerHTML = `
        <main>
            <h1>Congrats, <span id="fullName">${fullName.value}</span>! Your ticket is ready</h1>
            <p>We've emailed your ticket to <span id="email">${email.value}</span> and will send updates in the run up to the event.</p>
        
            <div class="ticked">
                <div class="contPai">
                    <div class="contInfo">
                        <div class="info-empresa">
                            <img id="img-mark" src="assets/images/logo-mark.svg" alt="Logo empresa">
                            <div class="info-empresa-txt">
                                <h2>Codind Conf</h2>
                                <p>Jan 31, 2025 / Austin, TX</p>
                            </div>
                        </div>
                        <div class="info-usuario">
                            <img id="img-avatar" src="${uploadImage}" alt="Avatar usuário">
                            <div class="info-usuario-txt">
                                <h2 id="fullName">${fullName.value}</h2>
                                   <figure><img src="assets/images/icon-github.svg" alt=" "> <p>${github.value}</p></figure>
                            </div>
                        </div>
                    </div>
                    <div class="codigo">
                        <h1>#01609</h1>
                    </div>
                </div>
            </div>
        </main>
    `

}

function createTicked(){
    if (!inputFile.files.length) {
        const iconDrop = document.querySelector('i.fa-solid');
        const informacaoDrop = document.querySelector('.informacao-drop');

        iconDrop.style.color = "red";
        informacaoDrop.style.color = "red";
        
        informacaoDrop.style.transform = 'scale(1.10)';
        informacaoDrop.style.transition = 'transform 0.3s ease'; 
        setTimeout(function() {
            informacaoDrop.style.transform = 'scale(1)';
            informacaoDrop.style.transition = 'transform 0.3s ease'; 
        }, 100); 
    }
    else if(!fullName.value.length){
        const iconDrop = document.querySelector('i#erro');
        const textDrop = document.querySelector('#erro');
        iconDrop.style.display = "inline-block";
        textDrop.style.display = "block";
    }else if(!email.value.length){

        const iconDrop = document.querySelector('i#erro1');
        const textDrop = document.querySelector('#erro1');
        iconDrop.style.display = "inline-block";
        textDrop.style.display = "block";

    }else if(!github.value.length){
        const iconDrop = document.querySelector('i#erro2');
        const textDrop = document.querySelector('#erro2');
        iconDrop.style.display = "inline-block";
        textDrop.style.display = "block";
    }
    else{
        createNewPage()
    }
}
