let btn = document.getElementById("btn");
let alt: string = document.getElementById("alt");
const permitida: number = 1.3;
btn.addEventListener("click", () => {
  let altura: number = Number(alt.value);

  if (altura >= permitida) {
    console.log("puede pasar");
  } else {
    console.log("no puede pasar");
  }
});
