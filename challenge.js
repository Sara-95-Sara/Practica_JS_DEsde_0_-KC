
const students = [
  {
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'Edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'Silvia'
  },
  {
    age: 24,
    examScores: [],
    gender: 'female',
    name: 'Marta'
  },
  {
    age: 21,
    examScores: [],
    gender: 'female',
    name: 'Lola'
  }
];


  

// 1. Mostrar en formato de tabla todos los alumnos.
console.table(students);



// 2. Mostrar por consola la cantidad de alumnos que hay en clase.
console.log(`2. En clase hay ${students.length} alumnos`);



// 3. Mostrar por consola todos los nombres de los alumnos.

// por find()
students.find(object => {
  console.log(object.name);
});

/*
// por forEach()
students.forEach(object => {
  console.log(object.name);
});
*/



// 4. Eliminar el último alumno de la clase.
students.pop();
console.log('4. Eliminado el último alumno: ');
console.table(students);



// 5. Eliminar un alumno aleatoriamente de la clase.
function calculateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
}

const number = calculateRandomNumber(0, students.length);
//console.log(number);
students.splice(number, 1);
console.log(`5. Eliminado el alumno ${number} de la clase. Quedan: `);
console.table(students);



// 6. Mostrar por consola todos los datos de los alumnos que son chicas.
console.log('6. Chicas: ');
students.find(object => {
  if(object.gender == 'female') {
    console.log(object);
  }
});


// 7. Mostrar por consola el número de chicos y chicas que hay en la clase.
function NumberFemaleMale(students) {
  let male = 0;
  let female = 0;
  students.forEach(object => {
    if(object.gender == 'female') {
      female++;
    } else if(object.gender == 'male') {
      male++;
    }
  });
  console.log(`7. Los chicos son: ${male}, Las chicas son: ${female}`);
}
  
NumberFemaleMale(students);


// 8. Mostrar true o false por consola si todos los alumnos de la clase son chicas.
function Chicas(students) {
  let fem = 0;
  students.forEach(object => {
    if(object.gender == 'female') {
      fem++;
    }
  });
  if(fem == students.length) {
    console.log(true);
  } else {
    console.log(false);
  }
}

Chicas(students);


//9. Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
function Joven(students) {
  students.forEach(object => {
    if(object.age > 20 && object.age < 25) {
      console.log(`9. Los alumnos que tienen entre 20 y 25, son: ${object.name}`);
    }
  });
}

Joven(students);




//10. Añadir un alumno nuevo con los siguientes datos:
/*nombre aleatorio.
edad aleatoria entre 20 y 50 años.
género aleatorio.
listado de calificaciones vacío.
¡OJO!, el nombre y el género tienen que ir acordes.
*/
const availableMaleNames = ['Pepe', 'Juan', 'Victor', 'Leo', 'Francisco', 'Carlos'];
const availableFemaleNames = ['Cecilia', 'Ana', 'Luisa', 'Silvia', 'Isabel', 'Virginia'];
const availableGenders = ['male', 'female'];

console.log("10. Añadido nuevo alumno");
function newAlumno(students, male, female, gender) {
  //const newName = calculateRandomNumber(0, male.length);
  const newGender  = gender.at(calculateRandomNumber(0, gender.length));
  const newAge = calculateRandomNumber(20, 50);
  let newName;
  if (newGender == "female") {
    newName = female.at(calculateRandomNumber(0, female.length));
  } else {
    newName = male.at(calculateRandomNumber(0, male.length));
  }
  
  students.push(
    {
      age: newAge,
      examScores: [],
      gender: newGender,
      name: newName  
    }
  );
  console.log(students);
}

newAlumno(students, availableMaleNames, availableFemaleNames, availableGenders);



//11.  Mostrar por consola el nombre de la persona más joven de la clase.
//¡OJO!, si varias personas de la clase comparten la edad más baja, cualquiera de ellos es una respuesta válida.
function MásJoven(students) {
  let edad = [];
  students.forEach(object => {
    edad.push(object.age);
  });
  //console.log(edad);
  const joven = edad.sort();
  //console.log(joven);
  //console.log(joven[0]);
  const ijoven = joven[0];
  students.forEach(object => {
    if(object.age == ijoven) {
      console.log(`11. La persona más joven de la clase es ${object.name}`);
    }
  });

}

MásJoven(students);



//12. Mostrar por consola la edad media de todos los alumnos de la clase.
function MedioEdad(students) {
  let edad = [];
  students.forEach(object => {
    edad.push(object.age);
  });
  //console.log(edad);
  let suma = 0;
  for (let i = 0; i < edad.length; i++){    
    suma = suma + edad[i];
  }
  const medio = suma/edad.length;
  console.log(`12. La edad media de todos los alumnos de la clase es ${medio}`);

}

MedioEdad(students);



//13. Mostrar por consola la edad media de las chicas de la clase.
function MedioEdadChicas(students) {
  let edad = [];
  students.forEach(object => {
    if(object.gender == "female") {
      edad.push(object.age);
    }
  });
  //console.log(edad);
  let suma = 0;
  for (let i = 0; i < edad.length; i++){  
    suma = suma + edad[i];
  }
  const medio = suma/edad.length;
  console.log(`13. La edad media de las chicas de la clase es ${medio}`);
}

MedioEdadChicas(students);



//14- Añadir nueva nota a los alumnos. Por cada alumno de la clase,
// tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
function NewNota(students) {
  students.forEach(object => {
    const newNota  = calculateRandomNumber(0, 10);
    object.nota = newNota;
  });
  console.log(students);
}

NewNota(students);




// 15. Ordenar el array de alumnos alfabéticamente según su nombre.
function Alfabéticamente(students) {
  let name = [];
  students.forEach(object => {
    name.push(object.name);
  });
  console.log(name.sort());
  //const alf = name.sort();
  // console.log(`15. El array de alumnos alfabéticamente según su nombre: ${alf}`);
 
}

Alfabéticamente(students);

// Hola profe, hasta aqui todo funciona, Pero para los opcionales no me queda tiempo hacerlo, lo deje ultimo dia, es mi culpa, seguire despues.
// Muchisimas gracias por todo. Estoy feliz por conseguirlo hasta aqui)).
