// Caesar Cipher

const csInputText = document.querySelector('#cs_masterInput');
const csOutputString = document.querySelector('#cs_masterOutput');
const csInputLabel = document.querySelector('#csInputLabel');
const csOutputLabel = document.querySelector('#csOutputLabel');

const csNewtoggleCeasar = document.querySelector('#csNewtoggleCeasar');

let csStr = null;

const updateStr = () => {
  csStr = csInputText.value;
};

csInputLabel.innerHTML = 'Type or paste plain text below.';
csOutputLabel.innerHTML = 'Your result in ciphertext.';

// amount to shift caesarCipher by
let cShift = 12;

const { map } = Array.prototype;

const caesarCipher = () =>
  map.call(csStr, eachLetter => {
    let output = '';
    if (cShift < 0) {
      return caesarCipher(csStr, cShift + 26);
    }
    if (eachLetter.match(/[a-z]/i)) {
      const code = eachLetter.charCodeAt();
      if (code >= 65 && code <= 90) {
        // eslint-disable-next-line no-param-reassign
        eachLetter = String.fromCharCode(((code - 65 + cShift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        // eslint-disable-next-line no-param-reassign
        eachLetter = String.fromCharCode(((code - 97 + cShift) % 26) + 97);
      }
    }
    output += eachLetter;
    return output;
  });

const updateOutput = () => {
  csOutputString.value = caesarCipher().join('');
};

const csToggle = () => {
  const csMode = document.querySelector('input[name="csCryptSwitch"]:checked')
    .value;

  if (csMode === 'encrypt') {
    csInputLabel.innerHTML = 'Type or paste plain text below.';
    csOutputLabel.innerHTML = 'Your result in ciphertext.';

    updateOutput();
  } else {
    csInputLabel.innerHTML = 'Type or paste ciphertext below.';
    csOutputLabel.innerHTML = 'Your result in plain text.';
    cShift = (26 - cShift) % 26;

    updateOutput();
  }
};

const update = () => {
  updateStr();
  updateOutput();
};

// Event Handlers

csInputText.addEventListener('keyup', () => {
  update();
});

csNewtoggleCeasar.addEventListener('input', csToggle);

update();
csToggle();
