// JavaScript source code
function reiniciar() {
    mudou = false;
    dir = false;
    esq = false;
    cima = false;
    baixo = false;
    PxC = px;
    PyC = py;
    msg_band = '';
}

function checkpoint() {     //Colocar bandeira
    if (PxC == PxB && PyC == PyB) {
        msg_band = 'PARABENS, VA PARA O PROXIMO NIVEL!';
        dir = false;
        esq = false;
        cima = false;
        baixo = false;
        mudar_nivel();
    } else {
        msg_band = 'PONTO INCORRETO, TENTE NOVAMENTE!';
    }
}

function mover_px_dir() {
    if (PxC < px + (Lx / 2)) {
        PxC = PxC + 20;
        dir = true;
        esq = false;
        cima = false;
        baixo = false;
        msg_band = '';
    }
}

function mover_px_esq() {
    if (PxC > px - (Lx / 2)) {
        PxC = PxC - 20;
        esq = true;
        dir = false;
        cima = false;
        baixo = false;
        msg_band = '';
    }
}

function mover_py_cima() {
    if (PyC > py - (Ly / 2)) {
        PyC = PyC - 20;
        cima = true;
        esq = false;
        dir = false;
        baixo = false;
        msg_band = '';
    }
}

function mover_py_baixo() {
    if (PyC < py + (Ly / 2)) {
        PyC = PyC + 20;
        baixo = true;
        esq = false;
        dir = false;
        cima = false;
        msg_band = '';
    }
}

function whichButton(event) {
    if (event.keyCode == 87 || event.keyCode == 38) {
        mover_py_cima();
    }

    if (event.keyCode == 83 || event.keyCode == 40) {
        mover_py_baixo();
    }

    if (event.keyCode == 68 || event.keyCode == 39) {
        mover_px_dir();
    }

    if (event.keyCode == 65 || event.keyCode == 37) {
        mover_px_esq();
    }
    if (event.keyCode == 13 || event.keyCode == 81) {
        checkpoint();
    }
    if (event.keyCode == 82) {
        reiniciar();
    }
}

function mudar_nivel() {
    num = (Math.random() * 100).toFixed(0);
    massa2 = ((num * 3) / 25 ).toFixed(0);
    massa3 = massa2 - 8;
    PxB = px + (massa3 * 20);
    num = (Math.random() * 100).toFixed(0);
    massa2 = ((num * 3) / 25 ).toFixed(0);
    massa3 = massa2 - 8;
    PyB = py + (massa3 * 20);
}