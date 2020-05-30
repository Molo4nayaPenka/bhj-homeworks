'use strict'

function showTargetBlock() {

    const targetBlocks = Array.from(document.querySelectorAll('.reveal'));
    
    for (let i=0; i < targetBlocks.length; i++) {
        const targetBlock = targetBlocks[i];

        function isInViewport() {
            const viewportHeight = window.innerHeight;
            const targetBlockTop = targetBlock.getBoundingClientRect().top;
            const targetBlockBottom = targetBlock.getBoundingClientRect().bottom;
            return !!(targetBlockTop < viewportHeight || targetBlockBottom < viewportHeight);
        }
    
        if (isInViewport() === true) {
            targetBlock.classList.add('reveal_active');
        } else {
            targetBlock.classList.remove('reveal_active');
        }
    }  
}

window.addEventListener('scroll', showTargetBlock);