document.addEventListener('DOMContentLoaded', () => {
    chk.addEventListener('change', () => {
        const elementsToToggle = [
            document.body,
            document.getElementById('header'),
            document.getElementById('label'),
            document.getElementById('ball'),
            document.querySelector('.talkWithUs a'),
            document.querySelector('.box'),
            document.querySelector('.carouselBackground'),
            document.querySelector('.askHere a'),
            document.querySelector('.formContact'),
            document.querySelector('.btnEnviar'),
            document.querySelector('.btnActive'),
            document.querySelector('.chat-button'),
            document.querySelector('.chat-header'),
            document.querySelector('.chat-popup'),
            document.querySelector('.topSlogan'),
            document.querySelector('.infoTop'),
            document.querySelector('.slogan'),
            document.querySelector('.aboutEcho'),
            document.querySelector('.faqs'),
            document.querySelector('.echo3d'),
            document.querySelector('.main'),
            document.querySelector('.ativo'),
            document.querySelector('.designed'),
            document.querySelector('.portfolio-btn'),
            document.querySelector('.listarDuvida a'),
            document.querySelector('.buttonBudget a'),
            document.querySelector('.echoText'),
            document.querySelector('.abadeSuger'),
            document.querySelector('.bi-arrow-down'),
            document.querySelector('.copyright'),
            ...document.querySelectorAll('.nav-links'),
            ...document.querySelectorAll('.cardAbout'),
            ...document.querySelectorAll('.cardAbout p'),
            ...document.querySelectorAll('.nav-links a'),
            ...document.querySelectorAll('.hamburguer'),
            ...document.querySelectorAll('.priceInfo'),
            ...document.querySelectorAll('.caixa-conteudo'),
            ...document.querySelectorAll('.message-bot'),
            ...document.querySelectorAll('.nav-link'),
            ...document.querySelectorAll('h1'),
            ...document.querySelectorAll('span'),
            ...document.querySelectorAll('.imageBox'),
            ...document.querySelectorAll('.cardDevs'),
            ...document.querySelectorAll('.infoBox p'),
            ...document.querySelectorAll('.person'),
            ...document.querySelectorAll('.talkWithUs path'),
            ...document.querySelectorAll('.roleBox h2'),
            ...document.querySelectorAll('.cartao'),
            ...document.querySelectorAll('.cartao h2'),
            ...document.querySelectorAll('.cartao p'),
            ...document.querySelectorAll('.cartao ul'),
            ...document.querySelectorAll('.barPlano'),
            ...document.querySelectorAll('.info'),
            ...document.querySelectorAll('.cartao-footer p'),
            ...document.querySelectorAll('.price a'),
            ...document.querySelectorAll('.price p'),
            ...document.querySelectorAll('.btnVer'),
            ...document.querySelectorAll('.faq-card h2'),
            ...document.querySelectorAll('.faq-card p'),
            ...document.querySelectorAll('.faq-card button'),
            ...document.querySelectorAll('.askHere path'),
            ...document.querySelectorAll('.texts'),
            ...document.querySelectorAll('.form-group input'),
            ...document.querySelectorAll('.form-group select'),
            ...document.querySelectorAll('.form-group textarea'),
            ...document.querySelectorAll('.mapOfSite a'),
            ...document.querySelectorAll('.socialMedias a'),
            ...document.querySelectorAll('.carousel-indicators [data-bs-target]'),
            ...document.querySelectorAll('.bar'),
            ...document.querySelectorAll('.sloganQuemSomos p'),
        ];


        elementsToToggle.forEach(element => {
            if (element) {
                element.classList.toggle('dark');
            }
        });

        const theme = document.body.classList.contains('dark') ? 'dark' : 'light';

        const strokeColor = theme === 'dark' ? 'white' : 'black';
        document.querySelectorAll('#label svg path').forEach(path => {
            if (path) {
                path.style.stroke = strokeColor;
            }
        });
        document.querySelectorAll('.expandedFaqs svg path').forEach(path => {
            if (path) {
                path.style.stroke = strokeColor;
            }
        });

        const imageSources = {
            dark: {
                logo: 'assets/img/logoHeaderWhite.svg',
                faleConoscoImg: 'assets/img/faleConoscoImgBlue.svg',
                feedbackImg: 'assets/img/feedbackImgBlue.svg',
                starsFeedback: 'assets/img/starsFeedbackBlue.svg',
                echo3D: 'assets/img/echoLogo3DBlack.png',
                imgLogoContact: 'assets/img/imgLogoContactBlack.svg',
                logoFooter: 'assets/img/imgFooterWhite.svg',
                setaDireita: 'assets/img/SetaDireitaWhite.svg',
                setaEsquerda: 'assets/img/SetaEsquerdaWhite.svg',
                setaDireitaDev: 'assets/img/SetaDireitaWhite.svg',
                setaEsquerdaDev: 'assets/img/SetaEsquerdaWhite.svg',
                logoFooterCellphone: 'assets/img/miniLogoBlueFooter.svg',
                logoFooterCellphoneMini: 'assets/img/imgFooterBlue.svg',
                maoApontando: 'assets/img/cardsAbout/maoApontandoBlack.svg',
                engrenagem: 'assets/img/cardsAbout/engrenagemBlack.svg',
                foguete: 'assets/img/cardsAbout/fogueteBlack.svg',
                abadeSuger: 'assets/img/abadeSugerBlack.svg',
                whatsapp: 'assets/img/whatsappBlack.svg',
                echozinho: 'assets/img/avatar/EchozinhoBlack.svg',
                flash: 'assets/img/planos/siteRapidoBlack.svg',
                exclusivo: 'assets/img/planos/siteExclusivoBlack.svg',
            },
            light: {
                logo: 'assets/img/logoHeader.svg',
                faleConoscoImg: 'assets/img/faleConoscoImg.svg',
                feedbackImg: 'assets/img/feedbackImg.svg',
                starsFeedback: 'assets/img/starsFeedback.svg',
                echo3D: 'assets/img/echoLogo3D.png',
                imgLogoContact: 'assets/img/imgLogoContact.svg',
                logoFooter: 'assets/img/imgFooter.svg',
                setaDireita: 'assets/img/setaDireitaBlack.svg',
                setaEsquerda: 'assets/img/setaEsquerdaBlack.svg',
                setaDireitaDev: 'assets/img/setaDireitaBlack.svg',
                setaEsquerdaDev: 'assets/img/setaEsquerdaBlack.svg',
                logoFooterCellphone: 'assets/img/miniLogoGreenFooter.svg',
                logoFooterCellphoneMini: 'assets/img/imgFooterGreen.svg',
                maoApontando: 'assets/img/cardsAbout/maoApontando.svg',
                engrenagem: 'assets/img/cardsAbout/engrenagem.svg',
                foguete: 'assets/img/cardsAbout/foguete.svg',
                abadeSuger: 'assets/img/abadeSuger.svg',
                whatsapp: 'assets/img/whatsapp.svg',
                echozinho: 'assets/img/avatar/Echozinho.svg',
                flash: 'assets/img/planos/siteRapido.svg',
                exclusivo: 'assets/img/planos/siteExclusivo.svg',
            }
        };
        const logoImg = document.querySelector('.logo img');
        if (logoImg) logoImg.src = imageSources[theme].logo;

        const faleConoscoImg = document.querySelector('.imgConosco img');
        if (faleConoscoImg) faleConoscoImg.src = imageSources[theme].faleConoscoImg;

        const feedbackImages = document.querySelectorAll('.imgFeedback img');
        feedbackImages.forEach(img => {
            if (img) img.src = imageSources[theme].feedbackImg;
        });

        const feedbackStars = document.querySelectorAll('.feedbackStars img');
        feedbackStars.forEach(img => {
            if (img) img.src = imageSources[theme].starsFeedback;
        });

        const echo3D = document.querySelector('.img3D img');
        if (echo3D) echo3D.src = imageSources[theme].echo3D;

        const imgLogoContact = document.querySelector('.imgEchoContact img');
        if (imgLogoContact) imgLogoContact.src = imageSources[theme].imgLogoContact;

        const logoFooter = document.querySelector('.imgEchoCopy img');
        if (logoFooter) logoFooter.src = imageSources[theme].logoFooter;

        const setaDireita = document.querySelector('.setaDireita');
        if (setaDireita) setaDireita.src = imageSources[theme].setaDireita;

        const setaEsquerda = document.querySelector('.setaEsquerda');
        if (setaEsquerda) setaEsquerda.src = imageSources[theme].setaEsquerda;

        const setaDireitaDev = document.querySelector('.setaDireitaDev');
        if (setaDireitaDev) setaDireitaDev.src = imageSources[theme].setaDireitaDev;

        const setaEsquerdaDev = document.querySelector('.setaEsquerdaDev');
        if (setaEsquerdaDev) setaEsquerdaDev.src = imageSources[theme].setaEsquerdaDev;

        const logoFooterCellphone = document.querySelector('.echoCellphone');
        if (logoFooterCellphone) logoFooterCellphone.src = imageSources[theme].logoFooterCellphone;

        const logoFooterCellphoneMini = document.querySelector('.imgEchoCopy2 img');
        if (logoFooterCellphoneMini) logoFooterCellphoneMini.src = imageSources[theme].logoFooterCellphoneMini;

        const maoApontandoImg = document.querySelector('.imgCard img');
        if (maoApontandoImg) maoApontandoImg.src = imageSources[theme].maoApontando;

        const engrenagemImg = document.querySelector('.imgCardEngrenagem img');
        if (engrenagemImg) engrenagemImg.src = imageSources[theme].engrenagem;

        const fogueteImg = document.querySelector('.imgCardFoguete img');
        if (fogueteImg) fogueteImg.src = imageSources[theme].foguete;

        const abadeSugerImg = document.querySelector('.imgAbade img');
        if (abadeSugerImg) abadeSugerImg.src = imageSources[theme].abadeSuger;

        const whatsappImg = document.querySelector('.imgWhatsapp img');
        if (whatsappImg) whatsappImg.src = imageSources[theme].whatsapp;

        const echozinhoImg = document.querySelector('.imagemEco img');
        if (echozinhoImg) echozinhoImg.src = imageSources[theme].echozinho;

        const rapidoImg = document.querySelector('.cartaoRapido img');
        if (rapidoImg) rapidoImg.src = imageSources[theme].flash;

        const exclusivoImg = document.querySelector('.cartaoExclusivo img');
        if (exclusivoImg) exclusivoImg.src = imageSources[theme].exclusivo;
        
    });
});

