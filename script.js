function converter() {
    var inputValue = document.getElementById('inputValue').value;
    var inputBase = document.getElementById('inputBase').value;

    if (!validarEntrada(inputValue, inputBase)) {
        alert('Por favor, insira um número válido para a base selecionada.');
        return;
    }

    var decimalValue = parseInt(inputValue, inputBase === 'hexadecimal' ? 16 : inputBase === 'octal' ? 8 : inputBase === 'binario' ? 2 : 10);
    var outputHTML = '';

    if (document.getElementById('convertDecimal').checked) {
        output.style.display = 'block';
        outputHTML += `<p>Decimal: ${decimalValue}</p>`;
    }
    if (document.getElementById('convertHexadecimal').checked) {
        output.style.display = 'block';
        outputHTML += `<p>Hexadecimal: ${decimalValue.toString(16).toUpperCase()}</p>`;
    }
    if (document.getElementById('convertOctal').checked) {
        output.style.display = 'block';
        outputHTML += `<p>Octal: ${decimalValue.toString(8)}</p>`;
    }
    if (document.getElementById('convertBinario').checked) {
        output.style.display = 'block';
        outputHTML += `<p>Binário: ${decimalValue.toString(2)}</p>`;
    }
    document.getElementById('output').innerHTML = outputHTML;
}

function validarEntrada(inputValue, inputBase) {

    var validChars = '';

    if (inputBase === 'decimal') {
        validChars = '0123456789';
    } else if (inputBase === 'hexadecimal') {
        validChars = '0123456789ABCDEFabcdef';
    } else if (inputBase === 'octal') {
        validChars = '01234567';
    } else if (inputBase === 'binario') {
        validChars = '01';
    }

    for (var i = 0; i < inputValue.length; i++) {
        if (validChars.indexOf(inputValue[i]) === -1) {
            return false;
        }
    }
    return true;
}
