let previewContainer = document.querySelector('.team-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.team-container .staff').forEach(staff => {
    staff.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = staff.getAttribute('data-name');
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