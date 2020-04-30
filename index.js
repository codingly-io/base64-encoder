async function convert() {
  console.log('converting');
  const file = document.querySelector('#input').files[0];
  const base64 = await toBase64(file);
  copyToClipboard(base64);
}

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => alert(error);
  });
}

function copyToClipboard(text) {
  const textarea = document.querySelector('#base64');
  const container = document.querySelector('.result-container');
  container.style.display = 'block';
  textarea.value = text;
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  document.execCommand('copy');
}

const convertBtn = document.querySelector('.btn-convert');
convertBtn.addEventListener('click', convert);