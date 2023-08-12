document.body.addEventListener('click', collapseFunction);

function collapseFunction (event) {
    // console.log(event.target);
    //если кнопки у объекта нет, тогда через return и выходим из функции
    if (!event.target.classList.contains('collapse-button')) return;
    const atr = event.target.getAttribute('data-toggle');
    const collapseBody = document.querySelector('#' + atr);
    if (collapseBody){
        collapseBody.classList.toggle('hide');
    }
    console.log(collapseBody);
}