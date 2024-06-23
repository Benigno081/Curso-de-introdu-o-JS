function contar(){
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('pas')
    let res = document.getElementById('res')
   if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
    window.alert('[ERRO] - Preencha os dados corretamente.')
    res.innerHTML ='Impossível contar!'
   } else {
     res.innerHTML = 'Contando: '
     let i = Number(ini.value)
     let f = Number(fim.value)
     let p = Number(pas.value)
     if (p <= 0){
      res.innerHTML ='Impossível contar!'
     }
     if(i < f){
       for(let n = i; n <= f; n += p){
        res.innerHTML += `${n} \u{27A1} `
      }
      res.innerHTML += `\u{1F3C1}`
    } else{
      for(let n = i; n>= f; n -= p){
         res.innerHTML += `${n} \u{2B05} `
      }
      res.innerHTML += `\u{1F3C1}`
    }
    
     
   }

}