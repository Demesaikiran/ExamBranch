window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    const hlltno = sessionStorage.getItem('htno1');
    const Brnch = sessionStorage.getItem('brnch1');
    const yrsem = sessionStorage.getItem('yrSem1');

    document.getElementById('stdnt-halltcktno').innerHTML =hlltno;
    document.getElementById('stdnt-Branch').innerHTML = Brnch;
    document.getElementById('stdnt-yrSem').innerHTML = yrsem;

})