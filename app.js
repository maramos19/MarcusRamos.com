let selected = "";

function setControls () {
  [...document.querySelectorAll(".control")].forEach(button => {
      button.addEventListener("click", function() {
          if (!button.dataset.id || button.dataset.id !== "about" && selected != "") {
            resetText(selected);
            resetBoxes(selected);
          }
          document.querySelector(".active-btn").classList.remove("active-btn");
          this.classList.add("active-btn");
          document.querySelector(".active").classList.remove("active");
          document.getElementById(button.dataset.id).classList.add("active");
      })
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
  })
};


function setLogos() {
  const logoDivs = document.querySelectorAll('.logo');
  const controlAbout = document.querySelector('.control[data-id="about"]');
  
  logoDivs.forEach(logo => {
    logo.addEventListener('click', () => {
      selected = logo.id;

      controlAbout.click();
      highlightText(selected);
      highlightBoxes(selected);

    });
  });
}

function highlightText(name){
  const texts = document.querySelectorAll('#' + name + '-text');
  texts.forEach(text => {
    text.style.color = '#27AE60';
    text.style.fontWeight = 'bold';
  });
}

function resetText(name){
  const texts = document.querySelectorAll('#' + name + '-text');
  texts.forEach(text => {
    text.style.color = '';
    text.style.fontWeight = '';
  });
}


function highlightBoxes(name){
  const techStacks = document.querySelectorAll('p.tech-stack');
  techStacks.forEach(techStack => {
     if (techStack.textContent.includes(name)) {
      const parentDiv = techStack.parentNode.parentNode.parentNode;
      parentDiv.style.boxShadow = '0 0 10px 5px #27AE60';
    }
  });
}

function resetBoxes(name){
  const techStacks = document.querySelectorAll('p.tech-stack');
  techStacks.forEach(techStack => {
    if (techStack.textContent.includes(name)) {
      const parentDiv = techStack.parentNode.parentNode.parentNode;
      parentDiv.style.boxShadow = '';
    }
  });
}

  
  


  
setControls();
setLogos();