function booleanos(array) {
    tey = []
    i = 0
    u = 0
    m = array.length
    while(m > i){
        if (typeof array[i] !== "boolean"){
           tey[u] = array [i]
           u++
        }
    
    i++
    }
    return tey
}
