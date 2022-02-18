const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let phrase = [];
    for (let i = 0; i < expr.length; i += 10) {
        phrase.push(expr.slice(i, i + 10));
    }
    phrase.forEach((item, index) => {
        let start = item.indexOf('1');
        let realString = start == -1 ? ' ' : item.slice(start);
        if (realString == ' ') {
            phrase.splice(index, 1, realString);
            return;
        }
        let word = [];
        for (let i = 0; i < realString.length; i += 2) {
            word.push(realString.slice(i, i + 2));
        }
        let wordMorse = word.map(item => item == 10 ? '.' : '-').join('');
        phrase.splice(index, 1, wordMorse);
    });
    let result = phrase.map(item => {
        for (let key in MORSE_TABLE) {
            if (item == ' ') {
                return item;
            } else if (item == key) {
                return MORSE_TABLE[key];
            }
        }
    }).join('');
    return result;
}

module.exports = {
    decode
}