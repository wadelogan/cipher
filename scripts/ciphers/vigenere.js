// Vigenere Cipher

const vigInputLabel = document.querySelector('#vigInputLabel');
const vigOutputLabel = document.querySelector('#vigOutputLabel');

const isLetter = c => c.match(/[a-zA-Z]+/);
const isUpperCase = c => c.match(/[A-Z]+/);
const keepLetters = s => s.replace(/[^a-zA-Z]+/g, '');

const vCipher = document.querySelector('.vCipher');

vigInputLabel.innerHTML = 'Type or paste plain text below.';
vigOutputLabel.innerHTML = 'Your result in ciphertext.';

// encrypt characters
function vigEncryptChar(t, k) {
  if (!isLetter(t) || !isLetter(k)) {
    return t;
  }
  const uppercase = isUpperCase(t);
  t = t.toLowerCase().charCodeAt(0);
  k = k.toLowerCase().charCodeAt(0);
  a = 'a'.charCodeAt(0);
  A = 'A'.charCodeAt(0);
  return String.fromCharCode((uppercase ? A : a) + ((t - a + (k - a)) % 26));
}

// encrypt input text with user-provided key
function vigEncryptText(text, key) {
  // eslint-disable-next-line no-param-reassign
  key = keepLetters(key);
  let cipher = '';
  let i = 0;
  let keyIndex = 0;
  for (; i < text.length; i += 1) {
    const t = text.charAt(i);
    if (isLetter(t)) {
      // eslint-disable-next-line no-plusplus
      k = key.charAt(keyIndex++ % key.length);
      c = vigEncryptChar(t, k);
      cipher += c;
    } else {
      cipher += t;
    }
    console.log('keyIndex...', keyIndex);
    console.log('i...', i);
  }
  return cipher;
}

// decrypt characters
function vigDecryptChar(c, k) {
  if (!isLetter(c) || !isLetter(k)) {
    return c;
  }
  const uppercase = isUpperCase(c);
  c = c.toLowerCase().charCodeAt(0);
  k = k.toLowerCase().charCodeAt(0);
  a = 'a'.charCodeAt(0);
  A = 'A'.charCodeAt(0);
  let t = a + (c - a - (k - a));
  if (t < a) {
    t += 26;
  }
  t = String.fromCharCode(t);
  return uppercase ? t.toUpperCase() : t;
}

// decrypt input text with user-provided key
function vigDecryptText(cipher, key) {
  key = keepLetters(key);
  let text = '';
  let i = 0;
  let keyIndex = 0;
  for (; i < cipher.length; ++i) {
    const c = cipher.charAt(i);
    if (isLetter(c)) {
      k = key.charAt(keyIndex++ % key.length);
      t = vigDecryptChar(c, k);
      text += t;
    } else {
      text += c;
    }
  }
  return text;
}

// Start Vigenere encrypt or decrypt
function vigCipher() {
  const key = document.querySelector('#key').value;
  const input = document.querySelector('#input').value;

  const mode = document.querySelector('input[name="mode"]:checked').value;
  let output = '';

  if (mode === 'encrypt') {
    output = vigEncryptText(input, key);
    vigInputLabel.innerHTML = 'Type or paste plain text below.';
    vigOutputLabel.innerHTML = 'Your result in ciphertext.';
  } else {
    output = vigDecryptText(input, key);
    vigInputLabel.innerHTML = 'Type or paste ciphertext below.';
    vigOutputLabel.innerHTML = 'Your result in plain text.';
  }

  document.querySelector('#output').value = output;
}

// Event Handlers
vCipher.addEventListener('input', vigCipher);

vigCipher();
