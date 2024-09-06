document.addEventListener('DOMContentLoaded', function() {
    const colorPicker = document.getElementById('colorPicker');
    const colorDisplay = document.getElementById('colorDisplay');
    const colorValue = document.getElementById('colorValue');

    // Initialize the display with the default color
    const initialColor = colorPicker.value;
    colorDisplay.style.backgroundColor = initialColor;
    colorValue.textContent = 'Selected Color: ' + initialColor;

    colorPicker.addEventListener('input', function() {
        const selectedColor = colorPicker.value;
        colorDisplay.style.backgroundColor = selectedColor;
        colorValue.textContent = 'Selected Color: ' + selectedColor;
    });
});

