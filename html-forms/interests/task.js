'use strict'

const subZones = Array.from(document.querySelectorAll('.interests_active'));

subZones.forEach(subZone => {
    const fullZone = subZone.closest('.interest');

    fullZone.addEventListener('change', (e) => {
        const subCheckboxes = Array.from(subZone.querySelectorAll('.interest__check'));
        const mainCheckbox = fullZone.querySelector('.interest__check');

        if (mainCheckbox.checked) {
            subCheckboxes.forEach(subCheckbox => subCheckbox.checked = true);
        } else if (!mainCheckbox.checked) {
            subCheckboxes.forEach(subCheckbox => subCheckbox.checked = false);
        } else if ((subCheckboxes.every(subCheckbox => subCheckbox.checked == true))) {   
            mainCheckbox.checked = true;
        }    
    })
})