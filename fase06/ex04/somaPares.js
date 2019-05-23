function somaPares(x,y) {
    x = Math.ceil(x)
    y = Math.floor(y)
    var z = 0
    while(x<=y) {
        if(x % 2 ===0){
        z += x
        }
        x++
    }
    
    return z
}
