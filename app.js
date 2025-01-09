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

    const main = document.querySelector('main')
     
    main.innerHTML = ''

    const createHeader = () => {
        const header = document.createElement('header');
        header.id = "header"
        main.appendChild(header);

        const h2 = document.createElement('h2');
        h2.innerHTML = `Congrats, <span id="fullName">${fullName.value}</span>!<br>Your ticket is ready`;
        header.appendChild(h2);

        const p = document.createElement('p');
        p.classList.add('pHeaderPage2');
        p.innerHTML = `We've emailed your ticket to <span id="email">${email.value}</span> and will send updates in the run up to the event.`
        header.appendChild(p);
    }

    const createTicked = () => {
        const div = document.createElement('div');
        div.classList.add('ticked');
        main.appendChild(div);

        const contPai = document.createElement('div');
        contPai.classList.add('contPai');
        div.appendChild(contPai);

        const contInfo = document.createElement('div');
        contInfo.classList.add('contInfo');
        contPai.appendChild(contInfo);

        const codigo = document.createElement('div');
        codigo.classList.add('codigo');
        codigo.innerHTML = `<h1>#01609</h1>` 
        contPai.appendChild(codigo);

        createEmpresa(contInfo)
    }

    const createEmpresa = (contInfo) => {
        const infoEmpresa = document.createElement('div');
        infoEmpresa.classList.add('info-empresa');
        contInfo.appendChild(infoEmpresa);
        
        const imgMark = document.createElement('img');
        imgMark.id = "img-mark";
        imgMark.src = "assets/images/logo-mark.svg";
        imgMark.alt = "Logo empresa";
        infoEmpresa.appendChild(imgMark);

        const infoEmpresaTxt = document.createElement('div');
        infoEmpresaTxt.classList.add('info-empresa-txt');
        infoEmpresa.appendChild(infoEmpresaTxt);

        const h2 = document.createElement('h2');
        h2.innerHTML = `Codind Conf`;
        infoEmpresaTxt.appendChild(h2)

        const p = document.createElement('p');
        p.innerHTML = `Jan 31, 2025 / Austin, TX`;
        infoEmpresaTxt.appendChild(p)

        createUsuario(contInfo)
    }

    const createUsuario = (contInfo) => {
        const infoUsuario = document.createElement('div');
        infoUsuario.classList.add('info-usuario');
        contInfo.appendChild(infoUsuario);

        const imgAvatar = document.createElement('img');
        imgAvatar.id = "img-avatar";
        imgAvatar.src = `${uploadImage}`;
        imgAvatar.alt = "Avatar do usuário";
        infoUsuario.appendChild(imgAvatar);

        const infoUsuarioTxt = document.createElement('div');
        infoUsuarioTxt.classList.add('info-usuario-txt'); 
        infoUsuario.appendChild(infoUsuarioTxt);

        const h2 = document.createElement('h2');
        h2.id = "fullName";
        h2.innerHTML = `${fullName.value}`;
        infoUsuarioTxt.appendChild(h2)

        const figure = document.createElement('figure');
        infoUsuarioTxt.appendChild(figure)

        const img = document.createElement('img');
        img.src = "assets/images/icon-github.svg";
        img.alt = " logo gitHub ";
        figure.appendChild(img);

        const p = document.createElement('p');
        p.innerHTML = adicionarArroba(github.value); /*! aqui */
        figure.appendChild(p);
    }

    createHeader()
    createTicked()
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
    } else if(!email.value.length){
        const iconDrop = document.querySelector('i#erro1');
        const textDrop = document.querySelector('#erro1');
        iconDrop.style.display = "inline-block";
        textDrop.style.display = "block";
    } else {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email.value)) {
            const iconDrop = document.querySelector('i#erro1');
            const textDrop = document.querySelector('#erro1');
            iconDrop.style.display = "inline-block";
            textDrop.style.display = "block";
            textDrop.textContent = "Por favor, insira um e-mail válido.";
        } else if(!github.value.length){
            const iconDrop = document.querySelector('i#erro2');
            const textDrop = document.querySelector('#erro2');
            iconDrop.style.display = "inline-block";
            textDrop.style.display = "block";
        } else {
            createNewPage();
        }
    }
}

const adicionarArroba = () => {
    if(github.value.indexOf('@') === 0){
        return github.value
    }else{
        return '@' + github.value
    }
}



