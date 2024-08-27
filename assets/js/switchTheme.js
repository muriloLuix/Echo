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
        document.querySelector('.hamburger span'),
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
        ...document.querySelectorAll('.cartao ul'),
        ...document.querySelectorAll('.info'),
        ...document.querySelectorAll('.cartao-footer p'),
        ...document.querySelectorAll('.price a'),
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
    ];

    elementsToToggle.forEach(element => element.classList.toggle('dark'));

    const imageSources = {
        dark: {
            logo: 'assets/img/logoHeaderWhite.svg',
            faleConoscoImg: 'assets/img/faleConoscoImgBlue.svg',
            feedbackImg: 'assets/img/feedbackImgBlue.svg',
            starsFeedback: 'assets/img/starsFeedbackBlue.svg',
            echo3D: 'assets/img/echoLogo3DBlack.svg',
            personFaq: 'assets/img/personFaqsBlue.svg',
            imgLogoContact: 'assets/img/imgLogoContactBlack.svg',
            logoFooter: 'assets/img/imgFooterWhite.svg',
            setaDireita: 'assets/img/SetaDireitaWhite.svg',
            setaEsquerda: 'assets/img/SetaEsquerdaWhite.svg'
        },
        light: {
            logo: 'assets/img/logoHeader.svg',
            faleConoscoImg: 'assets/img/faleConoscoImg.svg',
            feedbackImg: 'assets/img/feedbackImg.svg',
            starsFeedback: 'assets/img/starsFeedback.svg',
            echo3D: 'assets/img/echoLogo3D.svg',
            personFaq: 'assets/img/personFaqs.svg',
            imgLogoContact: 'assets/img/imgLogoContact.svg',
            logoFooter: 'assets/img/imgFooter.svg',
            setaDireita: 'assets/img/setaDireitaBlack.svg',
            setaEsquerda: 'assets/img/setaEsquerdaBlack.svg'
        }
    };

    const theme = document.body.classList.contains('dark') ? 'dark' : 'light';

    document.querySelector('.logo img').src = imageSources[theme].logo;
    document.querySelector('.imgConosco img').src = imageSources[theme].faleConoscoImg;
    const feedbackImages = document.querySelectorAll('.imgFeedback img');
    feedbackImages.forEach(img => {
        img.src = imageSources[theme].feedbackImg;
    });
    const feedbackStars = document.querySelectorAll('.feedbackStars img');
    feedbackStars.forEach(img => {
        img.src = imageSources[theme].starsFeedback;
    });
    document.querySelector('.img3D img').src = imageSources[theme].echo3D;
    document.querySelector('.imgDuvida img').src = imageSources[theme].personFaq
    document.querySelector('.imgEchoContact img').src = imageSources[theme].imgLogoContact
    document.querySelector('.imgEchoCopy img').src = imageSources[theme].logoFooter
    document.querySelector('.setaDireita').src = imageSources[theme].setaDireita
    document.querySelector('.setaEsquerda').src = imageSources[theme].setaEsquerda
});
