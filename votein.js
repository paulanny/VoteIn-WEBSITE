const persons = document.getElementsByClassName("person"); // array of people to be voted for
const selectedElement = document.querySelectorAll(".hidedisplay");

for (let i = 0; i < persons.length; i++) {
  persons[i].addEventListener("click", () => {
    for (let j = 0; j < selectedElement.length; j++) {
      selectedElement[j].classList.add("hidedisplay");
    }
    console.log("event fired");
    persons[i].children[2].classList.remove("hidedisplay");
  });
}
