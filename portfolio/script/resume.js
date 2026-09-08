export default function Resume(container) {
  container.innerHTML = `
    <div class='container-resume js-container-resume'>
      <div class='style-resume-container'>
        <p> Experience </p>
        <div class='line'></div>
        <div class='style-text-resume js-experience'></div>
      </div>

      <div class='style-resume-container'>
        <p> Education </p>
        <div class='line'></div>
        <div class='style-text-resume js-education'></div>
      </div>

      <div class='style-skills-resume'>
        <p> Skills and Technologies </p>
        <div class='line'></div>
        <div class='style-skills js-skills'></div>
      </div>
    </div> 
  `;

  const ExperienceElem = document.querySelector('.js-experience');
  const EducationElem = document.querySelector('.js-education');
  const SkillsElem = document.querySelector('.js-skills');

  //Experience
  [
    {
      job : 'Cashier',
      company : 'Krusty Krab',
      dateStart : '2018',
      dateEnd : 'Present',
      descriptionExperience : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      job : 'Cashier',
      company : 'Krusty Krab',
      dateStart : '2018',
      dateEnd : 'Present',
      descriptionExperience : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
  ].forEach(value => {
    ExperienceElem.innerHTML += 
    `
      <div class='experience-list'>
        <p class='job-company'> ${value.job} - ${value.company} </p>
        <p class='experience-date'> ${value.dateStart} - ${value.dateEnd} </p>
        <p class='expercience-description'> ${value.descriptionExperience} </p>
      </div>
    `;
  });

  //Education
  [
    {
      schoolName : 'UDD',
      education : 'Computer Engineer',
      startDate : '2024',
      Enddate : 'Present'
    },
    {
      schoolName : 'UDD',
      education : 'Computer Engineer',
      startDate : '2024',
      Enddate : 'Present'
    }
  ].forEach(value => {
    EducationElem.innerHTML += 
    `
      <div class='education-list'>
        <p class='education-title'> ${value.schoolName} - ${value.education} </p>
        <p class='education-date'> ${value.startDate} - ${value.Enddate} </p>
      </div>
    `;
  });

  //Skills
  [
    {
      image : '../icon/IconSkills/css-3.png',
      name : 'CSS'
    },
    {
      image : '../icon/IconSkills/html.png',
      name : 'HTML'
    },
    {
      image : '../icon/IconSkills/js.png',
      name : 'JavaScript'
    },
    {
      image : '../icon/IconSkills/python.png',
      name : 'Python'
    }
  ].forEach((value) => {
    SkillsElem.innerHTML += 
    `
      <div class='img-skills-align'>
        <img src=${value.image}>
        ${value.name}
      </div>
    `;
  });
}