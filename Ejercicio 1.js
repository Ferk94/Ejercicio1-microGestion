

const convertString = (str) => {
    let ay = 'ay';

    let first = str[0]
    

    var str2 = str.slice(1) + first + ay
    console.log(str2)
    return str2
}


convertString('Fernando')

convertString('Camello')

convertString("Nómade")