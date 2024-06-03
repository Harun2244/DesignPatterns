export class renderer {
    renderWindow(window, div) {
        const title = document.createElement('h1');
        const title1 = document.createElement('h1');
        div.innerHTML = '';
        title.textContent = window.displayGlassCut();
        title1.textContent = window.displayWoodCut();
        div.append(title, title1);
    }
}
