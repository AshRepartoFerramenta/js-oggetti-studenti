$(document).ready(function () {
  var student = {
    nome: "Gigi",
    cognome: "Buffon",
    eta: 40,
  };

  for (var key in student) {
    console.log(student[key]);
  }

  var allStudents = [
    {
      nome: "Gigi",
      cognome: "Buffon",
      eta: 40,
    },
    {
      nome: "Fabio",
      cognome: "Cannavaro",
      eta: 44,
    },
    {
      nome: "Gennaro",
      cognome: "Gattuso",
      eta: 43,
    },
    {
      nome: "Fabio",
      cognome: "Grosso",
      eta: 41,
    },
    {
      nome: "Marco",
      cognome: "Materazzi",
      eta: 42,
    },
    {
      nome: "Andrea",
      cognome: "Pirlo",
      eta: 39,
    },
  ];

  for (var i = 0; i < allStudents.length; i++) {
    var singleStudent = allStudents[i];
    console.log(singleStudent.nome + " " + singleStudent.cognome);
  }

  var newStudent = [
    {
      nome: prompt("Inserisci il tuo nome"),
      cognome: prompt("Inserisci il tuo cognome"),
      eta: prompt("Inserisci i tuoi anni"),
    },
  ];
  console.log(newStudent);
});
