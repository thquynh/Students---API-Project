$(document).ready(function () {
    let employees = [];

    $.ajax({
        url: 'https://randomuser.me/api/?results=12',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            let count = 0;
            $.map(data.results, function (employee, data) {
                var text = `<div class="card">
                <div class="card-img-container">
                    <img class="card-img" src="${employee.picture.large}" alt="${employee.name.first} ${employee.name.last} picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${employee.name.first} ${employee.name.last}</h3>
                    <p class="card-text">${employee.email}</p>
                    <p class="card-text cap">${employee.location.city}, ${employee.location.state}</p>
                </div>
            </div>`;
                var modalText = `<div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="${employee.picture.large}" alt="${employee.name.first} ${employee.name.last} profile picture">
                        <h3 id="name" class="modal-name cap">${employee.name.first} ${employee.name.last}</h3>
                        <p class="modal-text">${employee.email}</p>
                        <p class="modal-text cap">${employee.location.city}</p>
                        <hr>
                        <p class="modal-text">${employee.phone}</p>
                        <p class="modal-text">${employee.location.street.number} ${employee.location.street.name}, ${employee.location.city}, ${employee.location.state} ${employee.location.postcode}</p>
                        <p class="modal-text">Birthday: ${employee.dob.date}</p>
                    </div>
                </div>`;

                $("#gallery").append(text);

                // store the model popup text contains 12 employees information into the array
                employees[count] = modalText;
                count++;

            });
        }
    });

    // click event listener to display each employee information
    $('#gallery').on('click', '.card', function () {
        var index = $(this).index();
        $("#gallery").append(employees[index]);
    });

    // turn of the modal popup
    $('#gallery').on('click', '.modal-close-btn', function() {
        $(".modal-container").remove();
    })


});
