const nextBtn = document.getElementById('arrow');
const sections = ["home", "details", "map", "upcoming"]
var sectionNum = 1;
var shouldRotate = false;

nextBtn.addEventListener('click', () => {
    console.log(shouldRotate);
    window.scrollTo({
        top: document.getElementById(sections[sectionNum]).offsetTop,
        behavior: 'smooth'
    })

    if ( shouldRotate ) {
        deRotate();
    }

    if ( sectionNum === sections.length-1){
        sectionNum = 0;
        rotate();
    } else {
        sectionNum++;
    }
});

function rotate() {
    nextBtn.classList.remove("deRotate180");
    nextBtn.classList.add("rotate180");
    shouldRotate = true;
}

function deRotate() {
    nextBtn.classList.add("deRotate180");
    nextBtn.classList.remove("rotate180");
    shouldRotate = false;
}