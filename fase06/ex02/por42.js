function por42(x,y) {
    
    var resp = false
    
    while (resp === false && x <= y) {
        if  (x % 42 === 0){
            resp = x + 42
        }
    x++
    }
    
    if(resp>y){
        resp = false
    }
    if (resp === false){
        console.log("Não encontrado")
    }
    return resp
    
    
}