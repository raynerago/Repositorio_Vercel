import { memorias } from "./bd.js"

// Selecionar os botões
let btns = document.querySelectorAll('button')


btns.forEach(btn =>{
    btn.onclick = pressButton
})
// btns[0].onclick = pressButton
// btns[1].onclick = pressButton
// btns[2].onclick = pressButton
// btns[3].onclick = pressButton
// btns[4].onclick = pressButton



function pressButton(e){
    let alvo = e.target
    let value = parseInt(alvo.value)
    // seleção
    let h2 = document.querySelector('h2')
    let img = document.querySelector('img')
    let descricao = document.querySelector('p')

    let obj = editarObjeto(value)
    // Editar
     h2.textContent = obj.h2
     img.src = obj.img
     descricao.textContent = obj.descricao
}


function editarObjeto(value){
    var obj = {
        h2: "",
        img: "",
        descricao: ""
    }

    switch (value) {
        case 1:
            obj.h2 = memorias[0].titulo
            obj.img = memorias[0].img
            obj.descricao = memorias[0].descricao
            break;
        case 2:
            obj.h2 = memorias[1].titulo
            obj.img = memorias[1].img
            obj.descricao = memorias[1].descricao
            break;
        case 3:
            obj.h2 = memorias[2].titulo
            obj.img = memorias[2].img
            obj.descricao = memorias[2].descricao
            break;
        case 4:
            obj.h2 = memorias[3].titulo
            obj.img = memorias[3].img
            obj.descricao = memorias[3].descricao
            break;
        case 5:
            obj.h2 = memorias[4].titulo
            obj.img = memorias[4].img
            obj.descricao = memorias[4].descricao
            break;
        case 6:
            obj.h2 = memorias[5].titulo
            obj.img = memorias[5].img
            obj.descricao = memorias[5].descricao
            break;
        case 7:
            obj.h2 = memorias[6].titulo
            obj.img = memorias[6].img
            obj.descricao = memorias[6].descricao
            break;
         case 8:
            obj.h2 = memorias[7].titulo
            obj.img = memorias[7].img
            obj.descricao = memorias[7].descricao
            break;   
         case 9:
            obj.h2 = memorias[8].titulo
            obj.img = memorias[8].img
            obj.descricao = memorias[8].descricao
            break;
         case 10:
            obj.h2 = memorias[9].titulo
            obj.img = memorias[9].img
            obj.descricao = memorias[9].descricao
            break;

        
    }

    return obj
}