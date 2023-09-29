var plainText = "Aureliano Buendia";

const vocals = ["a", "e", "i", "o", "u"];

function TransformToXI(textX) {
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
            console.log(textX[i]);
            rotateText = false;
            var temporalStrim = "";
            for (let j = i; j < textX.length; j++) { //localizar trozo sin texto
                let temporalActualchar = textX[j];
                if (vocals.includes(temporalActualchar.toLowerCase())) { break; }
                temporalStrim += temporalActualchar;
            }
            console.log(temporalStrim.length);
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
document.getElementById("eric").innerHTML = TransformToXI(plainText);