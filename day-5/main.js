panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('mouseenter', e=>{
        panels.forEach(panel=>{
            panel.classList.add('unfocused')
        })
        panel.classList.remove('unfocused');
        panel.classList.add('focused');
    })
});