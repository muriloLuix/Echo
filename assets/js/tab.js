export function changeTabTitle() {
    if (document.visibilityState === 'hidden') {
        document.title = "Echo | Vai perder as ofertas?😞";
    } else if (document.visibilityState === 'visible') {
        document.title = "Echo | Programando o Futuro";
    }
}

document.addEventListener('visibilitychange', changeTabTitle);
