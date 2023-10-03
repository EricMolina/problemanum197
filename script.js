

const vocals = ["a", "e", "i", "o", "u"];

function deEncryptText(textX) {
    // Decrypt X' to text
    // Encrypt text to X'
    var resultText = "";
    
    for (let i = 0; i < textX.length; i++) {
        let actualChar = textX[i];
        resultText += actualChar;
        if (vocals.includes(actualChar.toLowerCase())) { // comprobar que sea vocal

             //rotar el texto hasta la siguiente vocal
            i++;
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


function encryptXI(text) {
    // Encrypt X' to X'' 
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

function decryptXii(text) {
    // Decrypt X'' to X'
    let textPrincipio = '';
    let textFinal = '';
    for (let index = 0; index < text.length; index++) {
        if (index % 2 == 0) {
            textPrincipio += text[index]
            clock = 1
        } else {
            textFinal = text[index] + textFinal
            clock = 0
        }
    }
    
    return textPrincipio + textFinal
}

// Desencriptar
document.getElementById('button-desencriptar').addEventListener('click', () => {
    let textDecrytXII = document.getElementById('text-desencriptar').value
    let textDecrytXI = decryptXii(textDecrytXII)

    document.getElementById('textXI-desencriptado').innerText = textDecrytXI;
    let textDecrytPlain = deEncryptText(textDecrytXI)
    document.getElementById('text-desencriptado').innerText = textDecrytPlain;
})

// Encriptar
document.getElementById('button-encriptar').addEventListener('click', () => {
    let textEncryptPlain = document.getElementById('text-encriptar').value
    let textEncryptXI = deEncryptText(textEncryptPlain)

    document.getElementById('textXI-encriptado').innerText = textEncryptXI;
    let textEncryptXII = encryptXI(textEncryptXI)
    document.getElementById('textXII-encriptado').innerText = textEncryptXII;
})
