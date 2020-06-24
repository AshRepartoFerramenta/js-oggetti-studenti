$(document).ready(function() {
    var student = {
      'nome' : 'Gigi',
      'cognome' : 'Buffon',
      'eta' : 40
    };
  
    for (var key in student) {
      console.log(student[key]);
    }
  
  
    var allStudents = [
      {
        'nome' : 'Gigi',
        'cognome' : 'Buffon',
        'eta' : 40
      },
      {
        'nome' : 'Fabio',
        'cognome' : 'Cannavaro',
        'eta' : 44
      },
      {
        'nome' : 'Gennaro',
        'cognome' : 'Gattuso',
        'eta' : 43
      },
      {
        'nome' : 'Fabio',
        'cognome' : 'Grosso',
        'eta' : 41
      },
      {
        'nome' : 'Marco',
        'cognome' : 'Materazzi',
        'eta' : 42
      },
      {
        'nome' : 'Andrea',
        'cognome' : 'Pirlo',
        'eta' : 39
      }
    ];
  