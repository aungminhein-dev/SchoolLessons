document.getElementById('complexForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const realPart = parseFloat(document.getElementById('realPart').value);
    const imaginaryPart = parseFloat(document.getElementById('imaginaryPart').value);

    if (isNaN(realPart) || isNaN(imaginaryPart)) {
        document.getElementById('result').innerHTML = '<div class="alert alert-danger">Please enter valid numbers.</div>';
        return;
    }

    // Calculate modulus
    const modulus = Math.sqrt(realPart ** 2 + imaginaryPart ** 2);
    const simplifiedModulus = simplifyRadical(modulus);

    // Calculate argument
    const argument = Math.atan2(imaginaryPart, realPart);
    const piFraction = simplifyPiFraction(argument);

    document.getElementById('result').innerHTML = `
        <div class="alert alert-success">
            <p>Complex Number: ${realPart} ${imaginaryPart >= 0 ? '+' : '-'} ${Math.abs(imaginaryPart)}i</p>
            <p>Trigonometric Form: ${simplifiedModulus} (cos(${piFraction} * π) + i sin(${piFraction} * π))</p>
        </div>
    `;
});

function simplifyRadical(value) {
    for (let i = 1; i * i <= value; i++) {
        if (value % (i * i) === 0) {
            return `${i}√${value / (i * i)}`;
        }
    }
    return value.toFixed(2);
}

function simplifyPiFraction(radian) {
    const pi = Math.PI;
    const fraction = radian / pi;
    const denominator = 180 / gcd(180, fraction * 180);
    const numerator = fraction * denominator;
    console.log(denominator);
    console.log(numerator);
    return `${Math.round(numerator)}/${Math.round(denominator)}`;
}

function gcd(a, b) {
    return b ? gcd(b, a % b) : Math.abs(a);
}
