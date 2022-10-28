
    const shareBtn = document.getElementById('shareBtn')

shareBtn.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Фото салон Коппьютерный услуги Полиграфия || Максат: ',
      url: 'https://maksat123456.github.io/link/',
        img:'https://maksat123456.github.io/link/assets/img/%D0%A0%D0%B5%D0%B7%D0%B5%D1%80%D0%B2%D0%BD%D0%B0%D1%8F_%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F_%D0%9A%D0%BE%D0%BD%D0%B2%D0%B5%D1%80%D1%82%202019.png'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("The current browser does not support the share function. Please, manually share the link")
  }
});
