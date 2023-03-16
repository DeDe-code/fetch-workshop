const rootElement = document.getElementById("root");

const composeHtml = function (data) {
  rootElement.insertAdjacentHTML(
    "beforeend",
    `
      <h2> Photo by ${data.copyright} on: ${data.date}</h2>
      <p>${data.explanation}</p>
      <img src = "${data.url}"/>

    `
  );
};

fetch(
  "https://api.nasa.gov/planetary/apod?api_key=wauhguKbTBaKWur8khrqApuGd6jOz5lMOgKyIhyC"
)
  .then(function (response) {
    console.log(response);
    throw new Error("hibas kod");
    return response.json();
  })
  // az elozo callback function return erteket hasznalja argumaentumkent

  .then(function (data) {
    console.log(data);
    composeHtml(data);
  })
  .catch(function (error) {
    console.log(error);
  });
