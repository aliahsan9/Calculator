let currentdisplay = '';
document.querySelector('#display').value = currentdisplay;
document.getElementById('btn-c').onclick = function() {
    currentdisplay = '';
    document.getElementById('btn-c').value = currentdisplay;
    document.querySelector('#display').value = currentdisplay;
};
document.getElementById('btn-1').onclick = function() {
    currentdisplay = currentdisplay + '1';
    document.getElementById('btn-1').value = currentdisplay;
    document.querySelector('#display').value = currentdisplay;
};
document.getElementById('btn-2').onclick = function() {
    currentdisplay = currentdisplay + '2';
    document.getElementById('btn-2').value = currentdisplay;
    document.querySelector('#display').value = currentdisplay;
};
document.getElementById('btn-+').onclick = function() {
    currentdisplay = currentdisplay + '+';
    document.getElementById('btn-+').value = currentdisplay;
    document.querySelector('#display').value = currentdisplay;
};
document.getElementById('btn-3').onclick = function() {
    currentdisplay = currentdisplay + '3';
    document.getElementById('btn-3').value = currentdisplay;
    document.querySelector('#display').value = currentdisplay;
};
document.getElementById('btn-4').onclick = function() {
    currentdisplay = currentdisplay + '4';
    document.getElementById('btn-4').value = currentdisplay;
    document.querySelector('#display').value = currentdisplay;
};
document.getElementById('btn--').onclick = function() {
    currentdisplay = currentdisplay + '-';
    document.getElementById('btn--').value = currentdisplay;
    document.querySelector('#display').value = currentdisplay;
};
document.getElementById('btn-5').onclick = function() {
    currentdisplay = currentdisplay + '5';
    document.getElementById('btn-5').value = currentdisplay;
    document.querySelector('#display').value = currentdisplay;
};
document.getElementById('btn-6').onclick = function() {
    currentdisplay = currentdisplay + '6';
    document.getElementById('btn-6').value = currentdisplay;
    document.querySelector('#display').value = currentdisplay;
};
document.getElementById('btn-*').onclick = function() {
    currentdisplay = currentdisplay + '*';
    document.getElementById('btn-*').value = currentdisplay;
    document.querySelector('#display').value = currentdisplay;
};
document.getElementById('btn-7').onclick = function() {
    currentdisplay = currentdisplay + '7';
    document.getElementById('btn-7').value = currentdisplay;
    document.querySelector('#display').value = currentdisplay;
};

document.getElementById('btn-8').onclick = function() {
    currentdisplay = currentdisplay + '8';
    document.getElementById('btn-8').value = currentdisplay;
    document.querySelector('#display').value = currentdisplay;
};

document.getElementById('btn-/').onclick = function() {
    currentdisplay = currentdisplay + '/';
    document.getElementById('btn-/').value = currentdisplay;
    document.querySelector('#display').value = currentdisplay;
};

document.getElementById('btn-=').onclick = function() {
    currentdisplay = eval(currentdisplay);
    document.querySelector('#display').value = currentdisplay;
};

document.getElementById('btn-9').onclick = function() {
    currentdisplay = currentdisplay + '9';
    document.getElementById('btn-9').value = currentdisplay;
    document.querySelector('#display').value = currentdisplay;
};

document.getElementById('btn-0').onclick = function() {
    currentdisplay = currentdisplay + '0';
    document.getElementById('btn-0').value = currentdisplay;
    document.querySelector('#display').value = currentdisplay;
};

document.getElementById('btn-.').onclick = function() {
    currentdisplay = currentdisplay + '.';
    document.getElementById('btn-.').value = currentdisplay;
    document.querySelector('#display').value = currentdisplay;
};

