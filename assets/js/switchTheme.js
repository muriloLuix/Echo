const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    const header = document.getElementById('header');
    const navlinks = document.querySelectorAll('.nav-link');
    const logo = document.querySelector('.logo img');
    const faleConoscoImg = document.querySelector('.imgConosco img')
    const feedbackImg = document.querySelector('.imgFeedback img')
    const starsFeedback = document.querySelector('.feedbackStars img')
    const echo3D = document.querySelector('.img3D img')
    const label = document.getElementById('label');
    const ball = document.getElementById('ball');
    const h1Elements = document.querySelectorAll('h1');
    const spanElements = document.querySelectorAll('span')
    const talkWithUs = document.querySelector('.talkWithUs a')
    const talkWithUsPath = document.querySelectorAll('.talkWithUs path')
    const box = document.querySelector('.box')
    const imageBox = document.querySelectorAll('.imageBox')
    const cardDevs = document.querySelectorAll('.cardDevs')
    const infobox = document.querySelectorAll('.infoBox p')
    const aboutPerson = document.querySelectorAll('.aboutPerson h1')

    document.body.classList.toggle('dark');
    header.classList.toggle('dark');
    label.classList.toggle('dark');
    ball.classList.toggle('dark');
    talkWithUs.classList.toggle('dark');
    box.classList.toggle('dark')

    talkWithUsPath.forEach(path => path.classList.toggle('dark'))
    h1Elements.forEach(h1 => h1.classList.toggle('dark'));
    spanElements.forEach(span => span.classList.toggle('dark'));
    imageBox.forEach(image => image.classList.toggle('dark'))
    cardDevs.forEach(carddev => carddev.classList.toggle('dark'))
    infobox.forEach(info => info.classList.toggle('dark'))
    navlinks.forEach(link => link.classList.toggle('dark'));
    aboutPerson.forEach(person => person.classList.toggle('dark'))

    if (document.body.classList.contains('dark')) {
        logo.src = 'assets/img/logoHeaderWhite.svg';
        faleConoscoImg.src = 'assets/img/faleConoscoImgBlue.svg'
        feedbackImg.src = 'assets/img/feedbackImgBlue.svg'
        starsFeedback.src = 'assets/img/starsFeedbackBlue.svg'
        echo3D.src = 'assets/img/echoLogo3DBlack.svg'
    } else {
        logo.src = 'assets/img/logoHeader.svg';
        faleConoscoImg.src = 'assets/img/faleConoscoImg.svg'
        feedbackImg.src = 'assets/img/feedbackImg.svg'
        starsFeedback.src = 'assets/img/starsFeedback.svg'
        echo3D.src = 'assets/img/echoLogo3D.svg'
    }
});
