document.getElementById('btn').addEventListener('click', () => {
    alert('Hello World.');
});

document.getElementById('target_value').addEventListener('change', (e) => {
    let targeted_value = e.target.value;
    let message;

    switch (targeted_value) {
        case 'ac':
            message = "angular acceleration";
            break;
        case 'av':
            message = "angular velocity";
            break;
        default:
            message = "Not selected";
    }
    console.log(message);
});
