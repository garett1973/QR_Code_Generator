const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();
    clearUI();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if (url === '') {
        alert('Please enter a URL');
    } else {
        showSpinner();

        setTimeout(() => {
            hideSpinner();
            generateQRCode(url, size);
            createSaveBtn(qr.firstChild.toDataURL(), size);
        }, 1000);
    }
}

const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
    });
}

const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
}

const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
}

const clearUI = () => {
    qr.innerHTML = '';
}

const createSaveBtn = (saveUrl) => {
    const saveBtn = document.createElement('a');
    saveBtn.className = 'btn btn-primary bg-blue-200 hover:bg-blue-300 py-2 px-4 rounded font-semibold';
    saveBtn.href = saveUrl;
    saveBtn.download = 'qrcode.png';
    saveBtn.innerHTML = 'Save QR Code';
    qr.appendChild(saveBtn);
}

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);


