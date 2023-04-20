const persons = document.getElementsByClassName("person"); // array of people to be voted for
const personb = document.getElementsByClassName("personb");
const personc = document.getElementsByClassName("personc");
const persond = document.getElementsByClassName("persond");
const persone = document.getElementsByClassName("persone");
const personf = document.getElementsByClassName("personf");
const persong = document.getElementsByClassName("persong");
const selectedElement = document.querySelectorAll(".hidedisplay");
const selectedElementb = document.querySelectorAll(".hidedisplayb");
const selectedElementc = document.querySelectorAll(".hidedisplayc");
const selectedElementd = document.querySelectorAll(".hidedisplayd");
const selectedElemente = document.querySelectorAll(".hidedisplaye");
const selectedElementf = document.querySelectorAll(".hidedisplayf");
const selectedElementg = document.querySelectorAll(".hidedisplayg");
const backDrop = document.getElementById("backdrop");
const placeVoteModal = document.getElementById("placevote-modal");
const placeVoteSuccess = document.getElementById("placevote-modalsuccess");
const placeVoteBtn = document.getElementById("pvoteBtn");
// const yesBtn = placeVoteModal.querySelector(".btn--success");
// const borderElement = document.querySelectorAll(".border");
cancelPlaceVote = () => {
  toggleBackDrop();
  placeVoteModal.classList.remove("visible");
};

Votesuccess = () => {
  placeVoteModal.classList.remove("visible");
  placeVoteSuccess.classList.add("visible");
  // const successOk = placeVoteSuccess.querySelector('.btn--passive');

  // successOk.addEventListener('click', )
};


function submitVoteHandler() {
  placeVoteModal.classList.add("visible");
  toggleBackDrop();
  const noBtn = placeVoteModal.querySelector(".btn--passive");
  const yesBtn = placeVoteModal.querySelector(".btn--success");

  noBtn.addEventListener("click", cancelPlaceVote);
  yesBtn.addEventListener("click", Votesuccess);
}

for (let i = 0; i < persons.length; i++) {
  persons[i].addEventListener("click", () => {
    for (let j = 0; j < selectedElement.length; j++) {
      selectedElement[j].classList.add("hidedisplay");
    }

    console.log("event fired");

    persons[i].children[2].classList.remove("hidedisplay");
  });
}

for (let i = 0; i < personb.length; i++) {
  personb[i].addEventListener("click", () => {
    for (let j = 0; j < selectedElementb.length; j++) {
      selectedElementb[j].classList.add("hidedisplayb");
    }

    console.log("event fired");

    personb[i].children[2].classList.remove("hidedisplayb");
  });
}

for (let i = 0; i < personc.length; i++) {
  personc[i].addEventListener("click", () => {
    for (let j = 0; j < selectedElementc.length; j++) {
      selectedElementc[j].classList.add("hidedisplayc");
    }

    console.log("event fired");

    personc[i].children[2].classList.remove("hidedisplayc");
  });
}

for (let i = 0; i < persond.length; i++) {
  persond[i].addEventListener("click", () => {
    for (let j = 0; j < selectedElementc.length; j++) {
      selectedElementd[j].classList.add("hidedisplayd");
    }

    console.log("event fired");

    persond[i].children[2].classList.remove("hidedisplayd");
  });
}

for (let i = 0; i < persone.length; i++) {
  persone[i].addEventListener("click", () => {
    for (let j = 0; j < selectedElemente.length; j++) {
      selectedElemente[j].classList.add("hidedisplaye");
    }

    console.log("event fired");

    persone[i].children[2].classList.remove("hidedisplaye");
  });
}

for (let i = 0; i < personf.length; i++) {
  personf[i].addEventListener("click", () => {
    for (let j = 0; j < selectedElementf.length; j++) {
      selectedElementf[j].classList.add("hidedisplayf");
    }

    console.log("event fired");

    personf[i].children[2].classList.remove("hidedisplayf");
  });
}

for (let i = 0; i < persong.length; i++) {
  persong[i].addEventListener("click", () => {
    // persong[i].style.border = "1px #009933 solid";
    for (let j = 0; j < selectedElementg.length; j++) {
      selectedElementg[j].classList.add("hidedisplayg");
      // persong[i].closest.style.border = '3px #009933 solid'
    }
    // persong[i].style.border = "3px #009933 solid";
    console.log("event fired");

    persong[i].children[2].classList.remove("hidedisplayg");
  });
}

function toggleBackDrop() {
  backDrop.classList.toggle("visible");
}
// yesBtn.addEventListener("click", Votesuccess);
placeVoteBtn.addEventListener("click", submitVoteHandler);
