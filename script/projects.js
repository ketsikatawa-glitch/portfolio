export default function ListProject(container) {
  container.innerHTML = 
  `
    <div class='content-nav js-content-nav'>
    </div>
  `;

  const containerProject = document.querySelector('.js-content-nav');

  [
  {
    img : './image/project/calculator.png',
    typeProject : 'Web Site',
    projectName : 'Calculator - HTML/CSS/JS',
  },
  {
    img : './image/project/youtubeclone.png',
    typeProject : 'Web Site',
    projectName : 'Youtube Clone - HTML/CSS/JS',
  },
  {
    img : './image/project/2048.png',
    typeProject : 'Web Site',
    projectName : '2048 Games - HTML/CSS/JS',
  },
  {
    img : './image/project/tictactoe.png',
    typeProject : 'Web Site',
    projectName : 'Tictactoe - HTML/CSS/JS',
  }
  ].forEach((value) => {
    if(!value.img){
      containerProject.innerHTML += 
      `
      <div class="box">
        <div class="img"></div>
        <p class="type-project">${value.typeProject}</p>
        <p class="proect-description">${value.projectName}</p>
      </div>
      `;
    }
    else {
      containerProject.innerHTML += 
      `
      <div class="box">
        <div class='img'>
          <img src=${value.img}>
        </div>
        <p class="type-project">${value.typeProject}</p>
        <p class="proect-description">${value.projectName}</p>
      </div>
      `;
    }
  });
}