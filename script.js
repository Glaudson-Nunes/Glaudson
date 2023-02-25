
const ft1 = document.querySelector('.photo');
const ft2 = document.querySelector('.photo2');


const efeito1 = () =>{

    setTimeout(()=>{


        ft1.style.display = 'none';
        ft2.style.display = 'block'

        ft1.style.transition = '2s'
        ft2.style.transition = '2s'
        efeito2()
    
    }, 8000)

    

}



const efeito2 = ()=>{

  setTimeout(()=>{



    ft1.style.display = 'block';
    ft2.style.display = 'none'
    
    ft1.style.transition = '2s'
    ft2.style.transition = '2s'
    efeito1()

  },4000)

}


efeito1()
efeito2()