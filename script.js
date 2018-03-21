function appendToTable(row) {
    $('table').append('<tr><td>'+row.name+'</td><td>'+row.date+'</td><td>'+row.assigned+'</td></tr>');
    $('input').val('');
}
$(function() {
    var tasks = [
        {"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
        {"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
        {"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
        {"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
        {"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
        {"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
        {"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
    ];
    if(!localStorage.tasks) {
        localStorage.tasks = JSON.stringify(tasks);
    } else {
        tasks = JSON.parse(localStorage.tasks);
    }
    tasks.forEach(function(row, i) {
        appendToTable(row);
    });
    $('button').click(function() {
        $('.error').text('');
        var row = {}, name, date, assigned;
        name = $('#name').val();
        date = $('#date').val();
        assigned = $('#assigned').val();
        if(name && date && assigned){
            row.name = name;
            row.date = date;
            row.assigned = assigned;
            tasks.push(row);
            localStorage.tasks = JSON.stringify(tasks);
            appendToTable(row);
        } else {
            $('.error').text('All Fields are required!');
        }
    });
});