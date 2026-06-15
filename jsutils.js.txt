// js/utils.js

function fmtMoney(n){
    return '$' + parseFloat(n || 0)
        .toLocaleString(
            'es-MX',
            {
                minimumFractionDigits:2,
                maximumFractionDigits:2
            }
        );
}

function fmtDate(str){
    if(!str) return '—';

    return new Date(str)
        .toLocaleDateString(
            'es-MX',
            {
                day:'2-digit',
                month:'short',
                year:'numeric'
            }
        );
}

function sanitize(str){
    return str
        ? String(str).replace(
            /[<>&"']/g,
            c => ({
                '<':'&lt;',
                '>':'&gt;',
                '&':'&amp;',
                '"':'&quot;',
                "'":'&#39;'
            }[c])
        )
        : '';
}

function toast(type,msg){

    const t = document.createElement('div');

    t.className = `toast toast-${type}`;

    t.textContent = msg;

    document
        .getElementById('toastContainer')
        .appendChild(t);

    setTimeout(
        () => t.remove(),
        3000
    );
}

function openModal(id){
    document
        .getElementById(id)
        .classList
        .add('open');
}

function closeModal(id){
    document
        .getElementById(id)
        .classList
        .remove('open');
}