let number = 0;

for (number = 100; number < 201; number++) {

  if (number % 3 === 0 && number % 4 === 0) {

    console.log("LoopyLighthouse");

  } else if (number % 4 === 0) {

    console.log("Lighthouse");

  } else if (number % 3 === 0) {

    console.log("Loopy");

  } else {

    console.log(number);

  }


}