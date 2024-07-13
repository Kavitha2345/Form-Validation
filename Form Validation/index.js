function fun() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("mobile").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (name === "" || email === "" || contact === "" || password === "" || confirmPassword === "") {
        window.alert("Please fill in all required fields.");
        return;
    }

    if (name.length < 3) {
        window.alert("Your name must be at least 3 characters long.");
        return;
    }

    if (contact.length !== 10 || isNaN(contact)) {
        window.alert("Enter a valid 10-digit mobile number.");
        return;
    }

    if (atpos < 1 || (dotpos - atpos < 2)) {
        window.alert("Enter a valid email address.");
        return;
    }

    if (password !== confirmPassword) {
        window.alert("Passwords do not match.");
        return;
    }

    var disp = document.getElementById("last");
    disp.style.display = "block";

    var table = document.getElementById("detailTable");
    var count = 0;
    for (let row of table.rows) {
        for (let cell of row.cells) {
            if (cell.innerText === email || cell.innerText === contact) {
                count = 1;
            }
        }
    }

    if (count === 1) {
        alert("User already exists.");
    } else {
        var row = table.insertRow(table.rows.length);
        row.setAttribute("class", "table-success");
        row.setAttribute("id", "delRow");

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = name;
        cell2.innerHTML = email;
        cell3.innerHTML = contact;
        cell4.innerHTML = "<a href='#' onclick='del(delRow)'>Delete</a>";
    }
}

function del(delRow) {
    var table = document.getElementById("detailTable");
    delRow.parentNode.removeChild(delRow);
}
