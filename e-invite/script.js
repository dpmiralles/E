 document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.venue-img');
    let current = 0;
    const total = images.length;
    const interval = 3000; // 2 seconds per image

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    }

    setInterval(() => {
      current = (current + 1) % total;
      showImage(current);
    }, interval);
  });