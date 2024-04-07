let previewContainer = document.querySelector('.event-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.events-container .event').forEach(event => {
    event.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = event.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active')
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('#icon-close').onclick = () => {
        close.classList.remove('active')
        previewContainer.style.display = 'none';
    }
})

// SPORTS SCRIPT

let sportContainer = document.querySelector('.sport-preview');
let sportBox = sportContainer.querySelectorAll('.preview2');

document.querySelectorAll('.sports-container .sport').forEach(sport => {
    sport.onclick = () => {
        sportContainer.style.display = 'flex';
        let name = sport.getAttribute('data-name');
        sportBox.forEach(preview2 => {
            let target = preview2.getAttribute('data-target');
            if (name == target) {
                preview2.classList.add('active')
            }
        })
    }
})

sportBox.forEach(close => {
    close.querySelector('#icon-close').onclick = () => {
        close.classList.remove('active')
        sportContainer.style.display = 'none';
    }
})