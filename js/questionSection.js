import {legalTraining80, tacticalSpecialtyTraining10, firstAid50, useOfSpecialTools20, firearmsTraining84} from './questions.js';

//* -------------------- CONSTANTS -------------------- */
const fieldQuestionsMain = document.querySelector('.field-questions');
const fieldQuestions = document.querySelector('#field-questions');
const fieldQuestionList = document.querySelector('.questions-list');
const collectionSectionLinks = document.querySelectorAll('.questions-list__section-link');
//* --------------------------------------------------- */


//* -------------------- FUNCTIONS -------------------- */
/* создает новые блоки с определенными вопроссами */
const questioning = (section) => {
  fieldQuestions.style.display = 'block';
  let count = 0;

  const titleSection = document.createElement('h3');
  titleSection.setAttribute('class', 'field-questions__body-section-title');

  fieldQuestions.append(titleSection); 

  section.forEach((elem) => {
    count++;

    const questAnswWrap = document.createElement('div');
    questAnswWrap.setAttribute('class', 'field-questions__body-quest-answ-wrap');

    const questions = document.createElement('p');
    questions.setAttribute('class', 'field-questions__body-question');
    questions.textContent = `${count}. ${elem.question}`;

    questAnswWrap.append(questions)

    elem.answers.forEach((elem) => {
      const answers = document.createElement('p');
      answers.setAttribute('class', 'field-questions__body-answer');
      answers.textContent = elem.value;
      if (elem.correct == true) {
        answers.classList.add('field-questions__body-answer--answer--correct');
      }
      questAnswWrap.append(answers);
    })

    fieldQuestions.append(questAnswWrap);
  })
}

/* заполнение выбранными вопросами */
const fillQuest = (elem, section) => {
  elem.addEventListener('click', () => {
    fieldQuestions.innerHTML = '';
    questioning(section);
    document.querySelector('.field-questions__body-section-title').textContent = `Вопроссы ${elem.textContent}`;
  })
}

/* в зависимости от того какая ссылка нажата заполняет соответствующими вопросами */
const fillQuestionSection = (elem) => {
  if (elem.id == 'legal-training-80') {
    fillQuest(elem, legalTraining80);
  }else if (elem.id == 'tactical-specialty-training-10') {
    fillQuest(elem, tacticalSpecialtyTraining10)
  }else if (elem.id == 'first-aid-50') {
    fillQuest(elem, firstAid50)
  }else if (elem.id == 'use-of-special-tools-20') {
    fillQuest(elem, useOfSpecialTools20)
  }else if (elem.id == 'firearms-training-84') {
    fillQuest(elem, firearmsTraining84)
  }
}
//* --------------------------------------------------- */


//*---------------------- EVENTS ---------------------- */
collectionSectionLinks.forEach(elem => fillQuestionSection(elem));
//* --------------------------------------------------- */


export {fieldQuestionsMain, fieldQuestionList};
