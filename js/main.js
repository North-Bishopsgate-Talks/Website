const nextBtn = document.getElementById("arrow");
const sectionElements = document.getElementsByTagName("section");
var sections = [];
var tops = [];
var sectionNum = 1;
var shouldRotate = false;
var lastScrollTop = 0;

// Dynamically load Sections and Section Tops.
for (let i = 0; i < sectionElements.length; i++) {
  const element = sectionElements[i];
  sections.push(element.id);
  tops.push(element.offsetTop);
}

// Add Click event listener to Btn to ensure NextButton Arrow takes to next section.
nextBtn.addEventListener("click", () => {
  window.scrollTo({
    top: document.getElementById(sections[sectionNum]).offsetTop,
    behavior: "smooth"
  });

  if (shouldRotate) {
    deRotate();
  }

  // If Next Section should be Top of Page set Section Number to 0 and Rotate Arrow.
  if (sectionNum === sections.length - 1) {
    sectionNum = 0;
    rotate();
  } else {
    sectionNum++;
  }
});

// Add Scroll event listener to Window to ensure the NextButtom Arrow takes to next section.
window.addEventListener("scroll", () => {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  // If Scroll Pixels are Equal to Section Top ( perform same action as next section btn)
  if (tops.includes(st)) {
    if (shouldRotate) {
      deRotate();
    }

    if (st === tops[tops.length - 1]) {
      sectionNum = 0;
      rotate();
    } else {
      sectionNum = tops.indexOf(st) + 1;
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
