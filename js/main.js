const nextBtn = document.getElementById('arrow');
const sections = ["home", "details", "map", "upcoming"]
var sectionNum = 1;

nextBtn.addEventListener('click', () => {
    window.scrollTo({
        top: document.getElementById(sections[sectionNum]).offsetTop,
        behavior: 'smooth'
    })

    if ( sectionNum === sections.length-1){
        sectionNum = 0;
    } else {
        sectionNum++;
    }
});