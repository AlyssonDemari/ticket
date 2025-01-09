const main = document.querySelector('main')

const headerH1 = document.createElement('h1')
headerH1.innerHTML = `Congrats, <span id="fullName">John Doe</span>! Your ticket is ready`
main.appendChild(headerH1)

const headerP = document.createElement('p')
headerP.innerHTML = `We've emailed your ticket to <span id="email">john.doe@example.com</span> and will send updates in the run up to the event.`
main.appendChild(headerP)


const createContainer = () => {
    const ticked = document.createElement('div')
    ticked.classList.add('ticked')
    main.appendChild(ticked)

    const containerPai = document.createElement('div')
    containerPai.classList.add('container-pai-ticked')
    ticked.appendChild(containerPai)

    const imgTicked = document.createElement('img')
    imgTicked.id = 'img-ticked'
    imgTicked.src = 'assets/images/pattern-ticket.svg'
    imgTicked.alt = 'imagem ticked'
    containerPai.appendChild(imgTicked)

    createInfo(containerPai)
    createCodigo(containerPai)
}

const createInfo = (containerPai) => {
    const containerInfo = document.createElement('div')
    containerInfo.classList.add('container-info')
    containerPai.appendChild(containerInfo)

    createEmpresa(containerInfo)
}

const createEmpresa = (containerInfo) => {
    const infoEmpresa = document.createElement('div')
    infoEmpresa.classList.add('info-empresa')
    containerInfo.appendChild(infoEmpresa)

    const logoEmpresa = document.createElement('img')
    logoEmpresa.id = 'img-mark'
    logoEmpresa.src = 'assets/images/logo-mark.svg'
    logoEmpresa.alt = 'Logo empresa'
    infoEmpresa.appendChild(logoEmpresa)

    const empreText = document.createElement('div')
    empreText.classList.add('info-empresa-txt')
    infoEmpresa.appendChild(empreText)

    const empreh2 = document.createElement('h2')
    empreh2.innerHTML = `Codind Conf`
    empreText.appendChild(empreh2)

    const empreP = document.createElement('p')
    empreP.innerHTML = `Jan 31, 2025 / Austin, TX `
    empreText.appendChild(empreP)

    createUsuario(containerInfo)
}

const createUsuario = (containerInfo) => {
    const infoUsuario = document.createElement('div')
    infoUsuario.classList.add('info-usuario')
    containerInfo.appendChild(infoUsuario)

    const avatar = document.createElement('img')
    avatar.id = 'img-avatar'
    avatar.src = 'assets/images/image-avatar.jpg'
    avatar.alt = 'Avatar usuário'
    infoUsuario.appendChild(avatar)

    const usuarioText = document.createElement('div')
    usuarioText.classList.add('info-usuario-txt')
    infoUsuario.appendChild(usuarioText)

    const usuarioh2 = document.createElement('h2')
    usuarioh2.innerHTML = `${fullName.value}`
    usuarioText.appendChild(usuarioh2)

    const usuarioP = document.createElement('p')
    usuarioP.innerHTML = `@AlyssonDemari ` //! mudar para o username
    usuarioText.appendChild(usuarioP)

}

const createCodigo = (containerPai) => {
    const codigo = document.createElement('div')
    codigo.classList.add('codigo')
    containerPai.appendChild(codigo)

    const numCod = document.createElement('h1')
    numCod.innerHTML = `#01609`
    codigo.appendChild(numCod)
}



createContainer()