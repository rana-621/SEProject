const reviews = document.querySelectorAll('.customer-review');

reviews.forEach((review) => {
  const stars = review.querySelectorAll('.star');
  const rating = review.querySelector('.rating');
  const result = document.createElement('p');
  rating.appendChild(result);

  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      result.textContent = 'تم تقييم هذه المراجعة بـ' + (index + 1) + ' نجوم.';
      stars.forEach((s, i) => {
        if (i <= index) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      });
    });

    star.addEventListener('mouseenter', () => {
      stars.forEach((s, i) => {
        if (i <= index) {
          s.classList.add('hover');
        } else {
          s.classList.remove('hover');
        }
      });
    });
    star.addEventListener('mouseleave', () => {
        stars.forEach((s, i) => {
          s.classList.remove('hover');
        });
   });
  });
  });
  window.addEventListener('resize', () => {
    adjustLayout();
});

