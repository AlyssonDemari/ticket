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

    const body = document.querySelector('body')
     
    body.innerHTML = ''

    //? Cria o main
    const containerMain = document.createElement('main')
    document.body.appendChild(containerMain);

    //? Cria o h1 da página 
    const tituloH1 = document.createElement('h1')
    tituloH1.innerHTML = `Congrats, ${fullName.value}! Your ticket is ready`
    containerMain.appendChild(tituloH1);

    //? Cria o Parágrafo da página 
    const paragrafo = document.createElement('p')
    paragrafo.innerHTML = `We've emailed your ticket to ${email.value} and will send updates in the run up to the event.`
    containerMain.appendChild(paragrafo);

    //? Cria a div responsável pelo ticked
    const tickedDiv = document.createElement('div');
    tickedDiv.classList.add('ticked');
    containerMain.appendChild(tickedDiv);

    //? Cria o container pai do container
    const containerTicked = document.createElement('div')
    containerTicked.classList.add('container-ticked');
    tickedDiv.appendChild(containerTicked);

    //? Cra a imgaem do ticked
    const imagemticked = document.createElement('img')
    imagemticked.src = 'assets/images/pattern-ticket.svg'
    imagemticked.alt = 'imagem logo ticked'
    containerTicked.appendChild(imagemticked);

    //? Cria o container responsável pelos textos
    const containerTexto = document.createElement('div')
    containerTexto.classList.add('container-texto')
    containerTicked.appendChild(containerTexto);

    //? Responsável pela logo e data do evento 
    const textoTicked = document.createElement('div')
    textoTicked.classList.add('texto-ticked')
    containerTexto.appendChild(textoTicked);
    const figureImg = document.createElement('figure')
    const imagemLogo = document.createElement('img')
    imagemLogo.classList.add('icon-logo')
    imagemLogo.src = 'assets/images/logo-mark.svg'
    imagemLogo.alt = `Imagem logo`
    const textoTickedH1 = document.createElement('h1')
    textoTickedH1.innerHTML = 'Conding Cof'
    textoTicked.appendChild(figureImg);
    figureImg.appendChild(imagemLogo)
    figureImg.appendChild(textoTickedH1)
    const paragrafoTicked = document.createElement('p')
    paragrafoTicked.classList.add('data-event')
    paragrafoTicked.innerHTML = `Jan 31, 2025 / Austin, TX `
    textoTicked.appendChild(paragrafoTicked)

    //? Responsável pela criação da imagem, nome e username do github 
    const containerGenered = document.createElement('div')
    containerGenered.classList.add('container-generad')
    const imagemAvatar = document.createElement('img')
    imagemAvatar.classList.add('avatar')
    imagemAvatar.src = `${uploadImage}` 
    imagemAvatar.alt = 'imagem usuário'
    const tickedGenered = document.createElement('div')
    tickedGenered.classList.add('ticked-generad')
    const h1TickedGenered = document.createElement('h1')
    h1TickedGenered.innerHTML = `${fullName.value}`
    const iconGitHub = document.createElement("figure")
    iconGitHub.classList.add('icon-github')
    const imgGitHub = document.createElement('img')
    imgGitHub.src = 'assets/images/icon-github.svg'
    imgGitHub.alt = 'Icon GitHub'
    iconGitHub.appendChild(imgGitHub)
    const userName = document.createElement('p')
    iconGitHub.appendChild(userName)
    userName.innerHTML = `${github.value}`
    containerGenered.appendChild(imagemAvatar)
    containerTexto.appendChild(containerGenered)
    containerGenered.appendChild(tickedGenered)
    tickedGenered.appendChild(h1TickedGenered)
    tickedGenered.appendChild(iconGitHub)


    //? Responsável pela crianção do código do ticked
    const codigo = document.createElement('div')
    codigo.classList.add('codigo')
    const numeroCod = document.createElement('h2')
    numeroCod.innerHTML = `#01609`
    codigo.appendChild(numeroCod)
    containerTicked.appendChild(codigo)

}
