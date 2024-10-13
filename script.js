    let currentIndex = 0;
const members = document.querySelectorAll('.member');

function showMember(index) {
    members.forEach((member, i) => {
        member.style.display = (i === index) ? 'flex' : 'none';
    });
}

function nextMember() {
    currentIndex = (currentIndex + 1) % members.length;
    showMember(currentIndex);
}

function prevMember() {
    currentIndex = (currentIndex - 1 + members.length) % members.length;
    showMember(currentIndex);
}

showMember(currentIndex);

document.getElementById('nextButton').addEventListener('click', nextMember);
document.getElementById('prevButton').addEventListener('click', prevMember);

    