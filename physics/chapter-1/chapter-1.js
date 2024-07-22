document.getElementById('target_value').addEventListener('change', (e) => {
    let targeted_value = e.target.value;
    let inputFields = document.getElementById('input_fields');
    inputFields.innerHTML = ''; // Clear previous input fields

    switch (targeted_value) {
        case 'ac':
            inputFields.innerHTML = `
                <div class="form-group">
                    <label for="velocity">Velocity (v):</label>
                    <input type="number" class="form-control" id="velocity">
                </div>
                <div class="form-group">
                    <label for="radius">Radius (r):</label>
                    <input type="number" class="form-control" id="radius">
                </div>
            `;
            break;
        case 'ad':
            inputFields.innerHTML = `
                <div class="form-group">
                    <label for="arc_length">Arc Length (s):</label>
                    <input type="number" class="form-control" id="arc_length">
                </div>
                <div class="form-group">
                    <label for="radius">Radius (r):</label>
                    <input type="number" class="form-control" id="radius">
                </div>
            `;
            break;
        case 'av':
            inputFields.innerHTML = `
                <div class="form-group">
                    <label for="angular_displacement">Angular Displacement (theta):</label>
                    <input type="number" class="form-control" id="angular_displacement">
                </div>
                <div class="form-group">
                    <label for="time_taken">Time Taken (t):</label>
                    <input type="number" class="form-control" id="time_taken">
                </div>
            `;
            break;
        case 'aa':
            inputFields.innerHTML = `
                <div class="form-group">
                    <label for="final_velocity">Final Angular Velocity (omega_f):</label>
                    <input type="number" class="form-control" id="final_velocity">
                </div>
                <div class="form-group">
                    <label for="initial_velocity">Initial Angular Velocity (omega_i):</label>
                    <input type="number" class="form-control" id="initial_velocity">
                </div>
                <div class="form-group">
                    <label for="time_taken">Time Taken (t):</label>
                    <input type="number" class="form-control" id="time_taken">
                </div>
            `;
            break;
        case 'tt':
            inputFields.innerHTML = `
                <div class="form-group">
                    <label for="initial_velocity">Initial Velocity (v_i):</label>
                    <input type="number" class="form-control" id="initial_velocity">
                </div>
                <div class="form-group">
                    <label for="final_velocity">Final Velocity (v_f):</label>
                    <input type="number" class="form-control" id="final_velocity">
                </div>
                <div class="form-group">
                    <label for="acceleration">Acceleration (a):</label>
                    <input type="number" class="form-control" id="acceleration">
                </div>
            `;
            break;
        case 'rd':
            inputFields.innerHTML = `
                <div class="form-group">
                    <label for="arc_length">Arc Length (s):</label>
                    <input type="number" class="form-control" id="arc_length">
                </div>
                <div class="form-group">
                    <label for="angular_displacement">Angular Displacement (theta):</label>
                    <input type="number" class="form-control" id="angular_displacement">
                </div>
            `;
            break;
        case 'theta':
            inputFields.innerHTML = `
                <div class="form-group">
                    <label for="tangential_acceleration">Tangential Acceleration (a_t):</label>
                    <input type="number" class="form-control" id="tangential_acceleration">
                </div>
                <div class="form-group">
                    <label for="centripetal_acceleration">Centripetal Acceleration (a_c):</label>
                    <input type="number" class="form-control" id="centripetal_acceleration">
                </div>
            `;
            break;
        case 'ta':
            inputFields.innerHTML = `
                <div class="form-group">
                    <label for="tangential_acceleration">Tangential Acceleration (a_t):</label>
                    <input type="number" class="form-control" id="tangential_acceleration">
                </div>
                <div class="form-group">
                    <label for="centripetal_acceleration">Centripetal Acceleration (a_c):</label>
                    <input type="number" class="form-control" id="centripetal_acceleration">
                </div>
            `;
            break;
        default:
            inputFields.innerHTML = '';
    }
});

document.getElementById('calculate').addEventListener('click', () => {
    let targeted_value = document.getElementById('target_value').value;
    let message;
    let velocity;
    let radius;
    let arc_length;
    let angular_displacement;
    let final_velocity;
    let initial_velocity
    let time_taken;
    let acceleration;
    let tangential_acceleration;
    let angular_acceleration;
    let centripetal_acceleration;
    switch (targeted_value) {
        case 'ac':
             velocity = parseFloat(document.getElementById('velocity').value);
             radius = parseFloat(document.getElementById('radius').value);
            message = `Centripetal Acceleration (ac) = ${(velocity ** 2 / radius).toFixed(2)} m/s²`;
            break;
        case 'ad':
             arc_length = parseFloat(document.getElementById('arc_length').value);
            radius = parseFloat(document.getElementById('radius').value);
            message = `Angular Displacement (theta) = ${(arc_length / radius).toFixed(2)} rad`;
            break;
        case 'av':
             angular_displacement = parseFloat(document.getElementById('angular_displacement').value);
             time_taken = parseFloat(document.getElementById('time_taken').value);
            message = `Angular Velocity (Omega) = ${(angular_displacement / time_taken).toFixed(2)} rad/s`;
            break;
        case 'aa':
             final_velocity = parseFloat(document.getElementById('final_velocity').value);
             initial_velocity = parseFloat(document.getElementById('initial_velocity').value);
            time_taken = parseFloat(document.getElementById('time_taken').value);
            message = `Angular Acceleration (alpha) = ${((final_velocity - initial_velocity) / time_taken).toFixed(2)} rad/s²`;
            break;
        case 'tt':
            initial_velocity = parseFloat(document.getElementById('initial_velocity').value);
            final_velocity = parseFloat(document.getElementById('final_velocity').value);
             acceleration = parseFloat(document.getElementById('acceleration').value);
            message = `Time Taken (t) = ${((final_velocity - initial_velocity) / acceleration).toFixed(2)} s`;
            break;
        case 'rd':
            arc_length = parseFloat(document.getElementById('arc_length').value);
            angular_displacement = parseFloat(document.getElementById('angular_displacement').value);
            message = `Radius (r) = ${(arc_length / angular_displacement).toFixed(2)} m`;
            break;
        case 'theta':
             tangential_acceleration = parseFloat(document.getElementById('tangential_acceleration').value);
             centripetal_acceleration = parseFloat(document.getElementById('centripetal_acceleration').value);
            message = `Direction of resultant acceleration (theta) = ${(Math.atan(tangential_acceleration / centripetal_acceleration)).toFixed(2)} rad`;
            break;
        case 'ta':
            tangential_acceleration = parseFloat(document.getElementById('tangential_acceleration').value);
            centripetal_acceleration = parseFloat(document.getElementById('centripetal_acceleration').value);
            message = `Total Acceleration (a) = ${(Math.sqrt(tangential_acceleration ** 2 + centripetal_acceleration ** 2)).toFixed(2)} m/s²`;
            break;
        default:
            message = "Not selected";
    }
    document.getElementById('message').innerText = message;
});