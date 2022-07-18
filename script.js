const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');
const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const modal = document.getElementById('modal');
const navbar = document.getElementById('navbar');



  // Show modal and navbar
  
  const brandContainer = document.getElementById('brandContainer')
  
  brandContainer.addEventListener('click', (e) => {
    if (e.target.className === 'toggle' || e.target.className === 'fa fa-bars fa-2x'){
      let selectedNode = e.target;
      while(!selectedNode.classList.contains('portfolio-item-wrapper')){
        selectedNode = selectedNode.parentNode;
      }
      const nav = selectedNode.querySelector('.navbar');
      nav.classList.toggle('hidden')
    } else if(e.target.nodeName === 'BUTTON'){
      modal.firstElementChild.childNodes[3].firstElementChild.innerHTML = 
      `Sign Up For ${e.target.getAttribute('data-name')} Deals`
      modal.classList.add('show-modal')
    }
  })

  
  // Hide modal
  close.addEventListener('click', () => modal.classList.remove('show-modal'));
  
  // Hide modal on outside click
  window.addEventListener('click', e =>
    e.target == modal ? modal.classList.remove('show-modal') : false
  );


// Mouseover Variable to darken each brand image

  portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
      portfolioItem.childNodes[1].classList.add('image-blur');
    });

    portfolioItem.addEventListener('mouseout', () => {
      portfolioItem.childNodes[1].classList.remove('image-blur');
    });
  });


