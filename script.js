fetch("https://restcountries.eu/rest/v2/all")
  .then((resp) => {
    return resp.json();
  })
  .then((result) => {
    let asia = result.filter((element) => element.region == "Asia");
    console.log(asia);
  })
  .catch((err) => {
    console.log(err);
  });

fetch("https://restcountries.eu/rest/v2/all")
  .then((resp) => {
    return resp.json();
  })
  .then((result) => {
    let population = result.filter((element) => element.population < 200000);
    console.log(population);
  })
  .catch((err) => {
    console.log(err);
  });

fetch("https://restcountries.eu/rest/v2/all")
  .then((resp) => {
    return resp.json();
  })
  .then((result) => {
    result.forEach(({ name, capital, flag }) => {
      console.log(name, capital, flag);
    });
  })
  .catch((err) => {
    console.log(err);
  });
console.log(" ");

fetch("https://restcountries.eu/rest/v2/all")
  .then((resp) => {
    return resp.json();
  })
  .then((result) => {
    let sum = result.reduce((pre, cur) => {
      return cur.population + pre;
    }, 0);
    console.log(sum);
  })
  .catch((err) => {
    console.log(err);
  });

fetch("https://restcountries.eu/rest/v2/all")
  .then((resp) => {
    return resp.json();
  })
  .then((result) => {
    let currncy = result.filter(
      (element) => element.currencies[0].symbol == "$"
    );
    console.log(currncy);
  })
  .catch((err) => {
    console.log(err);
  });
