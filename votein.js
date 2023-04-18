// const Aspirants = document.getElementsByClassName('.personone');
// const vote = document.querySelectorAll('.select');
// const voteSession = document.getElementsByClassName('votesession');
// const AllPeoples = document.querySelector('.personone');
// const Select = document.getElementById("select");
const persons = document.getElementsByClassName("person");
const aspirants = document.querySelectorAll("div.personone");
const selectedElement = document.querySelector('.hidedisplay');

// function checkOtherChild(){
//     for (let i = 0; i < selectedElement.length; i++) {
//      selectedElement[i].classList.remove('hidedisplay');
//     }
// }
console.log(selectedElement);
console.log(persons);
for (let i = 0; i < persons.length; i++) {
  persons[i].addEventListener("click", () => {
    console.log(persons[i]);
    if(selectedElement){
        selectedElement.classList.add('hidedisplay');
    }
   const personchild = persons[i].children[2];
    personchild.classList.remove('hidedisplay');
  });
}



// function buyItem(){
// console.log('lets go....');
// }
// for (const aspirant of aspirants) {
//     aspirant.addEventListener('click', function handleClick() {
//      for (const Select of Selects)
//      {Select.classList.add('selection')};
//     });
//   }
// function PlaceVoteClick(event) {
//     const button = event.target;
// console.log(button.textContent);
// console.log(parseFloat(event.target.dataset.price));
// event.target.classL
// console.log(event.currentTarget);
// event.addEventListener("click", buyItem);
//   }
//   aspirants.forEach(PlaceVoteClick);

// function display () {
//     AllPeoples.style.border = '3px solid #009933';
//     Select.classList.add("selection");
// }

// voteSession.forEach(items => {
// voteSession.addEventListener('click', display);
// });

// let element = document.getElementById('holder');

// voteSession.addEventListener('click', (e) => {
//   if(e.target.classList.contains('personone')) {
//     console.log('some event content here...');
//   }
// });
