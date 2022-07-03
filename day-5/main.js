let panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('mouseenter', e=>{
        panels.forEach(panel=>{
            panel.classList.add('unfocused');
            let paragraphs = Array.from(panel.querySelectorAll('p'));
            paragraphs[0].style.cssText= 'display:hidden; transform: translateY(-180px)'
            paragraphs[2].style.cssText= 'display:hidden; transform: translateY(180px)';
        })
        panel.classList.remove('unfocused');
        panel.classList.add('focused');
        let paragraphs = Array.from(panel.querySelectorAll('p'));
        paragraphs[0].style.cssText= 'display:block; transform: translateY(0px)';
        paragraphs[2].style.cssText= 'display:block; transform: translateY(0px)';
        
        

    })
});