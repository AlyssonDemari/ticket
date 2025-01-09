const fullName = document.querySelector('input#name')
const email = document.querySelector('input#email')
const github = document.querySelector('input#github')

const body = document.querySelector('body');

body.innerHTML = `
    <section id="background">
        <main>
            <header id="header">
                <h2>Congrats, <span id="fullName">${fullName.value}</span>! <br>Your ticket is ready</h2>
                <p class="pHeaderPage2">We've emailed your ticket to <span id="email">${email.value}</span> and will send updates in the run up to the event.</p>
            </header>
        
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
                            <img id="img-avatar" src="assets/images/image-avatar.jpg" alt="Avatar usuário">
                            <!-- src="${uploadImage} -->
                            <div class="info-usuario-txt">
                                <h2 id="fullName">${fullName.value}</h2>
                                   <figure><img src="assets/images/icon-github.svg" alt=" "> <p>${adicionarArroba(github.value)}</p></figure>
                            </div>
                        </div>
                    </div>
                    <div class="codigo">
                        <h1>#01609</h1>
                    </div>
                </div>
            </div>
        </main>

    </section>
`