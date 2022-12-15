(() => {
    'use strict'

    let currentElem;
    let coordinates = {
        mouseX: 0,
        mouseY: 0,
        elemX: 0,
        elemY: 0
    };

    document.documentElement.addEventListener('mousedown', (event) => {
        let elem = event.target;

        if (isDragable(elem)) {
            currentElem = elem;

            currentElem.style.position = 'absolute';
            currentElem.style.top = `${elem.offsetTop}px`;
            currentElem.style.left = `${elem.offsetLeft}px`;

            coordinates.mouseX = event.clientX;
            coordinates.mouseY = event.clientY;

            coordinates.elemX = elem.offsetLeft;
            coordinates.elemY = elem.offsetTop;
        }
    });

    document.documentElement.addEventListener('mousemove', (event) => {
        if (!currentElem) {
            return;
        }

        let { clientX, clientY } = event;
        let x = coordinates.elemX + (clientX - coordinates.mouseX);
        let y = coordinates.elemY + (clientY - coordinates.mouseY);

        currentElem.style.top = `${y}px`;
        currentElem.style.left = `${x}px`;
    });

    document.documentElement.addEventListener('mouseup', (event) => {
        currentElem = null;
    });

    function isDragable(elem) {
        return elem.classList.contains('dragable');
    }
})()