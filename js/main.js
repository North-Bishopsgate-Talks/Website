const nextBtn = document.getElementById('arrow');
const sections = ["home", "details", "map", "upcoming"]
var sectionNum = 1;
var shouldRotate = false;
var lastScrollTop = 0;

// Get Pixel Number of Top of each Section. 
let getSectionTops = function() {
    var arr = [];
    sections.forEach(s => {
        arr.push(document.getElementById(s).offsetTop);
    })
    return arr;
}

// Load tops of each section to array. 
const tops = getSectionTops();

// Add Click event listener to Btn to ensure NextButton Arrow takes to next section. 
nextBtn.addEventListener('click', () => {
    window.scrollTo({
        top: document.getElementById(sections[sectionNum]).offsetTop,
        behavior: 'smooth'
    })

    if ( shouldRotate ) {
        deRotate();
    }

    // If Next Section should be Top of Page set Section Number to 0 and Rotate Arrow. 
    if ( sectionNum === sections.length-1){
        sectionNum = 0;
        rotate();
    } else {
        sectionNum++;
    }
});

// Add Scroll event listener to Window to ensure the NextButtom Arrow takes to next section. 
window.addEventListener('scroll', () => {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    // If Scroll Pixels are Equal to Section Top ( perform same action as next section btn)
    if ( tops.includes(st) ){
        if ( shouldRotate ){
            deRotate()
        }

        if ( st === tops[tops.length-1]) {
            sectionNum = 0;
            rotate();
        } else {
            sectionNum = tops.indexOf(st)+1;
        }
    }
});

// Add rotation to Btn Arrow. 
function rotate() {
    nextBtn.classList.remove("deRotate180");
    nextBtn.classList.add("rotate180");
    shouldRotate = true;
}

// Remove rotation of Btn Arrow. 
function deRotate() {
    nextBtn.classList.add("deRotate180");
    nextBtn.classList.remove("rotate180");
    shouldRotate = false;
}