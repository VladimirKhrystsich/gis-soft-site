let next = document.getElementById('next'),
            prev = document.getElementById('prev'),
            elem = document.body.querySelector('div .wrap-slider > ul'),
            currentPosition = 0,
            maxlength = elem.children.length * 100,
            step = 150;

        next.addEventListener('click', function() {
            if (currentPosition + step < maxlength) {
                currentPosition += step;
            } else {
                currentPosition = maxlength - step;
            }
            elem.style.marginLeft = `-${currentPosition}px`;
        })

        prev.addEventListener('click', function() {
            if (currentPosition - step > 0) {
                currentPosition -= step;
            } else {
                currentPosition = 0;
            }
            elem.style.marginLeft = `-${currentPosition}px`
        })