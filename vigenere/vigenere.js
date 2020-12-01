function enkripsi() {
    var input = document.getElementById("input").value;
    var kunci = document.getElementById("kunci").value;

    if(kunci.length < 1){
        console.log("Kunci Tidak Valid");
        window.alert("Kunci Tidak Valid");
    }
    else{
        console.log("Vigenere Cipher:");
        var inputUpper = input.toUpperCase();
        var kunciUpper = kunci.toUpperCase();
        var input_filtered = onlyAlphabet(inputUpper);
        var kunci_filtered = onlyAlphabet(kunciUpper);
    
        var encrypted = "";
        var jenis = "PLAINTEXT";
        var indeksKunci = -1;
        for(var i = 0; i < input_filtered.length; i++){
            indeksKunci++;
            if(indeksKunci > kunci_filtered.length -1){
                indeksKunci = 0;
            }                
            var code = kunci_filtered[indeksKunci].charCodeAt();
            encrypted += (caesar_one_encrypt(input_filtered[i], (code - 65)));
        }
        document.getElementById("output").value = encrypted;
        document.getElementById("jenis").value = jenis;
        console.log("Input: " + input + " | Kunci: "  + kunci + "\nOutput: " + encrypted + " | Jenis: "  + jenis);
    }    
}

function dekripsi(){
    var input = document.getElementById("input").value;
    var kunci = document.getElementById("kunci").value;
    if(kunci.length < 1){
        console.log("Kunci Tidak Valid");
        window.alert("Kunci Tidak Valid");
    }
    else{
        console.log("Vigenere Cipher:");
        var inputUpper = input.toUpperCase();
        var kunciUpper = kunci.toUpperCase();
        var input_filtered = onlyAlphabet(inputUpper);
        var kunci_filtered = onlyAlphabet(kunciUpper);
        
        var decrypted = "";
        var jenis = "CIPHERTEXT";
        var indeksKunci = -1;
        for(var i = 0; i < input_filtered.length; i++){
            indeksKunci++;
            if(indeksKunci > kunci_filtered.length -1){
                indeksKunci = 0;
            }
            var code = kunci_filtered[indeksKunci].charCodeAt();
            decrypted += (caesar_one_decrypt(input_filtered[i], (code - 65)));
        }
        document.getElementById("output").value = decrypted;
        document.getElementById("jenis").value = jenis;
        console.log("Input: " + input + " | Kunci: "  + kunci + "\nOutput: " + decrypted + " | Jenis: "  + jenis);
    }    
}

function onlyAlphabet(string){
    var final = [];
    for (var i = 0; i < string.length; i++){
        if((string[i]).match(/[A-Z]/)){
            final.push(string[i]);
        }
    }
    return final;
}

function caesar_one_encrypt(character, currentKey){
    var code = character.charCodeAt();
    var charNum = ((code - 65  + currentKey) % 26) + 65;
    var c = String.fromCharCode(charNum);
    return c;
}

function caesar_one_decrypt(character, currentKey){    
    var code = character.charCodeAt();
    var temp = code - 65  - currentKey;
    if (temp < 0){
        temp += 26;
    }
    var charNum = ((temp) % 26) + 65;
    var c = String.fromCharCode(charNum);
    return c;
}

function reset(){
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
    document.getElementById("kunci").value = "";
    document.getElementById("jenis").value = "";
}                
