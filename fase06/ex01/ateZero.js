function ateZero(x) {
    var z = []
    while (x<0) {
        z.push(x)
        x++
    }
    
    var y = 0
    
    while (y<=x) {
        z.push(y)
        y++
    }
    
    return z
    
}
