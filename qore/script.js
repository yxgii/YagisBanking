document.querySelectorAll('.sub-image').forEach(img => {
    img.addEventListener('click', () => {
      const textBlock = document.getElementById(img.dataset.target);
  

      if (img.classList.contains('active')) {
        img.classList.remove('active');
        textBlock.classList.remove('active');
      } else {

        document.querySelectorAll('.sub-image').forEach(i => i.classList.remove('active'));
        document.querySelectorAll('.sub-text').forEach(t => t.classList.remove('active'));
 
        img.classList.add('active');
        textBlock.classList.add('active');
      }
    });
  });
  