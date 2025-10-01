
document.querySelectorAll('.material-field').forEach(container => {
    const input = container.querySelector('.material-field-input');
    const list = container.querySelector('.options-list');
    if (!list) return; // skip fields without dropdown

    const options = Array.from(list.children);

    // Show dropdown when input is clicked
    input.addEventListener('mouseup', () => list.style.display = 'block');

    // Hide dropdown on blur
    input.addEventListener('blur', () => setTimeout(() => list.style.display = 'none', 100));

    // Filter options as user types
    input.addEventListener('input', () => {
        const val = input.value.toLowerCase();
        options.forEach(opt => {
            opt.style.display = opt.textContent.toLowerCase().includes(val) ? 'block' : 'none';
        });
    });

    // Click option to fill input
    options.forEach(opt => {
        opt.addEventListener('mousedown', e => {
            e.preventDefault(); // prevent blur before click
            input.value = opt.textContent;
            input.classList.add('filled');
            list.style.display = 'none';
        });
    });
});