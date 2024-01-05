function MediaArray(array) {
    let SomaArray = 0
    let MediaArray = 0
    for (let i = 0; i < array.length; i++) {
        SomaArray += array[i]
    }
    MediaArray = SomaArray / array.length
    return MediaArray.toFixed(2)
}

let arrayExemplo = [2,55,97,34,75,61,71,80]

console.log(MediaArray(arrayExemplo))



