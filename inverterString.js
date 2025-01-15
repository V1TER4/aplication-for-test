function inverterString(str) {
    let inverted = '';
    for (let i = str.length - 1; i >= 0; i--) {
        inverted += str[i];
    }
    return inverted;
}

const string = "Exemplo de string"
console.log(inverterString(string));
