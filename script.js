

const vocals = ["a", "e", "i", "o", "u"];

function transformToXI(textX) {
    var resultText = "";
    var rotateText = false;
    
    for (let i = 0; i < textX.length; i++) {
        let actualChar = textX[i];
        if (vocals.includes(actualChar.toLowerCase())) { //es una vocal
            rotateText = true;
            resultText += actualChar;
        } else {
            resultText += actualChar;
        }

        if (rotateText) { //rotar el texto hasta la siguiente vocal

            i++;
            rotateText = false;
            var temporalStrim = "";
            for (let j = i; j < textX.length; j++) { //localizar trozo sin texto
                let temporalActualchar = textX[j];
                if (vocals.includes(temporalActualchar.toLowerCase())) { break; }
                temporalStrim += temporalActualchar;
            }
            var finalStrim = "";
            for (let j = temporalStrim.length - 1; j >= 0 ; j--) { //rotar texto
                finalStrim += temporalStrim[j];
            }
            resultText += finalStrim;
            i += finalStrim.length - 1;
        }
    }
    return resultText;
}


function transformToXII(text) {
    let transformedText = '';
    while (text.length > 0) {
        transformedText += text[0]
        text = text.slice(0, 0) + text.slice(0+1);
        if (text.length <= 0) {break}
        transformedText += text[text.length-1]
        text = text.slice(0, text.length-1) + text.slice(text.length);
    }
    return transformedText
}


document.getElementById('button-transformar').addEventListener('click', () => {
    let textTransformar = document.getElementById('text-transformar').value
    let transformedTextXI = transformToXI(textTransformar)
    document.getElementById('textXI').innerText = transformedTextXI;
    let transformedTextXII = transformToXII(transformedTextXI)
    document.getElementById('textXII').innerText = transformedTextXII;
    console.log(transformedTextXI)
    console.log(transformedTextXII)
})
