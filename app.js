const darkModeColor = "#27AE60"
const lightModeColor = "#F56692"
let mode = 0;
let active = "";


darkMode = true;

function setControls () {
  [...document.querySelectorAll(".control")].forEach(button => {
      button.addEventListener("click", function() {
          document.querySelector(".active-btn").classList.remove("active-btn");
          this.classList.add("active-btn");
          document.querySelector(".active").classList.remove("active");
          document.getElementById(button.dataset.id).classList.add("active");
          
          const projectItems = document.querySelectorAll(".project-item");
          projectItems.forEach(project =>{
            project.style.boxShadow = "none";
          })

          resetText(active);
          active = "";

          
      })
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      mode ++; 

      //Updating currently selected 
      const projects = document.querySelectorAll('.project-item');
      if(active != ""){
        projects.forEach(project => {
          if(project.textContent.includes(active + ",") || project.textContent.includes(active + "\n")){
          project.style.boxShadow = "0 0 10px 5px " + getColor()
  
          }
        })
        const spans = document.querySelectorAll("span[data-custom-attribute='" + active + "']");
        spans.forEach((span) => {
          span.style.color = getColor();
          span.style.fontWeight = "bold";
        });
      }
  })
};


function setLogos() {
  const logoDivs = document.querySelectorAll('.logo');
  const controlAbout = document.querySelector('.control[data-id="about"]');
  
  logoDivs.forEach(logo => {
    logo.addEventListener('click', () => {
      const logoName = logo.dataset.custom;
      document.querySelector('.control[data-id="about"]').click();
      const projects = document.querySelectorAll('.project-item');

      //Add box shadows
      projects.forEach(project => {
        if(project.textContent.includes(logoName + ",") || project.textContent.includes(logoName + "\n")){

        project.style.boxShadow = "0 0 10px 5px " + getColor()

        }
      })

      //Updating text
      const spans = document.querySelectorAll("span[data-custom-attribute='" + logoName + "']");
      spans.forEach((span) => {
        span.style.color = getColor();

        span.style.fontWeight = "bold";
        active = logoName;
      });


    });
  });
}

function resetText(logoName){
  const spans = document.querySelectorAll("span[data-custom-attribute='" + logoName + "']");
  spans.forEach((span) => {
    span.style.color = "";
    span.style.fontWeight = "";
    active = logoName;
  });
}

function getColor(){
  if(mode % 2 == 0){
    return darkModeColor;
  }

  else{
    return lightModeColor;
  }
}

  
setControls();
setLogos();