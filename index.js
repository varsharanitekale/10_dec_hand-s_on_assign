fetch('https://randomuser.me/api/?results=20')
.then(res=>res.json())
    .then(info => {
        let results = info.results;
       
        for (let i = 0; i < results.length; i++){
            let first_name = results[i].name.first;
            let last_name = results[i].name.last;
            let gender = results[i].gender;
            let country = results[i].location.country;
            let email = results[i].email;
            let dob = results[i].dob.date;
            let phone= results[i].phone;
            let table = document.querySelector('table');
            let tableRow = document.createElement('tr');
            tableRow.innerHTML = '<td>' + first_name  + '</td>' + '<td>' + last_name  + '</td>' + '<td>' + gender + '</td>'+ '<td>' + country + '</td>'+ '<td>' + email + '</td>'+ '<td>' + dob + '</td>' + '<td>' + phone + '</td>';
            table.appendChild(tableRow);
        }
})
