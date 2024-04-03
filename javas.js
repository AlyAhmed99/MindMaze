function imgslid(i) {
    document.querySelector('.sp1').src = i;
}
function changecolor(color) {

    let sec = document.querySelector('.sec');
    sec.style.background = color;
}


let currentIndex = 0;
const textts=['Morgue']
const texts = [
    '             A deranged serial killer was a brilliant doctor, but an accident happened to him that caused him hysteriaHe chooses his victims carefully, traps them, and brings them to his place to practice his hobby: dissecting human corpses.He enjoys keeping his victims alive until the last momentYou learned that one of your friends fell victim at the hands of this doctor and is currently in the morgue. Your mission is to save your friend before the doctor does anything.',
];
function changetext() {
    const paragraph = document.getElementById('paragraph');
    const title = document.getElementById('title');

    paragraph.textContent = texts[currentIndex];
    title.textContent = textts[currentIndex];

}
let currentIndexx = 0;
const texttts=['Room 13 ']
const textss = [
    'Room 13           You are a group of friends, and you are returning from your vacation. Your car has broken down in a deserted place. You have not found anything other than a small, old hotel owned by a strange old man. You decide to spend the night until the morning comes and you know how to find a ride.. but the hotel is not open and things are not normal. Its normal and terror has filled the place. You only have 60 minutes to know how to escape from the hotel or else...',
];
function changetextt() {
    const paragraph = document.getElementById('paragraph');
    paragraph.textContent = textss[currentIndexx];
    title.textContent = texttts[currentIndex];

} let currentIndexxx = 0;
const textttss=['Horror HouseEmily  ']
const textsss = [
    ' Rose was born in Bavaria. Raised by a religious Romanian family, she began suffering from seizures at the age of 16. She was eventually diagnosed with epilepsy and put on various medications to help control the spasms. However, medications did not seem to curb her increasingly erratic behavior, and her family began looking for help outside the traditional medical field. She reportedly screamed incessantly and began eating insects, behaviors that were not subsided with a doctors prescription.Reports vary as to whose idea it was to perform the exorcism—some say Emily requested it, others say it was a decision made by her and her parents—but in the end, the family enlisted the help of your group to set about exorcising Emily from her demons.',
];
function changetexttt() {
    const paragraph = document.getElementById('paragraph');
    paragraph.textContent = textsss[currentIndexxx];
    title.textContent = textttss[currentIndex];
}
function showsidebar(){
    const sidebar = document.querySelector('.sidebar');
    const firstnav = document.querySelector('.firstnav');

    sidebar.style.display = 'flex'
    firstnav.style.display='none'
}
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar');
    const firstnav = document.querySelector('.firstnav');

    sidebar.style.display = 'none'
    firstnav.style.display='flex'

}

