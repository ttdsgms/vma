// ==UserScript==
// @name         Tema Personalizado VMA - Codenames
// @namespace    https://ttdsgms.netlify.com
// @version      0.1
// @description  Aplica um tema personalizado substituindo as imagens do Codenames no servidor da VMA.
// @author       Tiago (TTdsgms)
// @match        https://www.codenames.game/*   // Coloque aqui o URL do site do Codenames no servidor da VMA
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ttdsgms.netlify.app
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Mapeia as URLs antigas para as novas URLs
    const urlMappings = {
        'https://cdn2.codenames.game/cno/2023-12-19/theme/classic/card/red.png': 'https://ttstatic.netlify.app/img/red.png',
        'https://cdn2.codenames.game/cno/2023-12-19/theme/classic/card/blue.png': 'https://ttstatic.netlify.app/img/blue.png'
    };

    // Função para substituir a URL da background image
    function replaceBackgroundImage(element) {
        const oldBackgroundImage = window.getComputedStyle(element).backgroundImage;
        
        for (const oldUrl in urlMappings) {
            if (oldBackgroundImage.includes(oldUrl)) {
                const newUrl = urlMappings[oldUrl];
                element.style.backgroundImage = `url('${newUrl}')`;
            }
        }
    }

    // Encontra todos os elementos com background image na página
    const allElementsWithBackground = document.querySelectorAll('[style*="background-image"]');

    // Itera sobre todos os elementos e substitui as URLs conforme necessário
    allElementsWithBackground.forEach(element => {
        replaceBackgroundImage(element);
    });

    // Adiciona uma marca d'água ao corpo da página
    const watermark = document.createElement('img');
    watermark.src = 'https://placehold.co/256x256/EEE/31343C?font=montserrat&text=MVA';
    watermark.style.position = 'fixed';
    watermark.style.bottom = '10px';
    watermark.style.right = '10px';
    watermark.style.opacity = '0.5';  // Ajuste a opacidade conforme necessário
    watermark.style.pointerEvents = 'none';  // Garante que a marca d'água não interfere com os cliques na página

    document.body.appendChild(watermark);
})();