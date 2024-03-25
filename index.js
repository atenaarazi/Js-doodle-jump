document.addEventListener('DOMContentLoaded',()=>{
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('.div')
    let isGameOver = false

    function createDoodler(){
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
    }
    createDoodler()
})