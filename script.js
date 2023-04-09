
/*FAQ*/
class Accordion {
    constructor(accordionListQuestions) {
      this.accordionListQuestions = document.querySelectorAll(accordionListQuestions);
      this.activeItemClass = "active";
    }
  
    toggleAccordion(item) {
      item.classList.toggle(this.activeItemClass);
      item.nextElementSibling.classList.toggle(this.activeItemClass);
    }
  
    addAccordionEvent() {
      this.accordionListQuestions.forEach((question) => {
        question.addEventListener("click", () => this.toggleAccordion(question));
      });
    }
  
    init() {
      if (this.accordionListQuestions.length) {
        this.addAccordionEvent();
      }
      return this;
    }
  }
  
  const accordion = new Accordion(".faq-question");
  accordion.init();

  // Navbar

  const ativaMenu = document.querySelector('.fa-bars');
  const navMenu = document.querySelector('header .header-txt');

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})
  