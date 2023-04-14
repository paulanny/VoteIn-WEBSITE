// const Aspirants = document.getElementsByClassName('.personone');
const vote = document.querySelectorAll('.select');
const voteSession = document.getElementById('votesession');
const AllPeoples = document.querySelectorAll('.personone');
function display () {
    
    if (vote.forEach.style.display = 'none') {
        vote.forEach.style.display = 'flex';
    }
}
AllPeoples.forEach(items => {
    items.addEventListener('click', display);
});


// let element = document.getElementById('holder');

// voteSession.addEventListener('click', (e) => {
//   if(e.target.classList.contains('personone')) {
//     console.log('some event content here...');
//   }
// });