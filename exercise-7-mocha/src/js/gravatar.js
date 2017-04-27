import md5 from 'md5';

const init = () => {
  const hash = md5(window.emailHash.email);
  const imgSize = 100;
  const genericImg = "mm";
  const avatarUrl = `http://www.gravatar.com/avatar/${hash}?s=${imgSize}&d=${genericImg}`;

  Array.from(document.querySelectorAll('.js-gravatar-hash')).forEach((el) => {
    el.parentNode.removeChild(el);
  });

  document.querySelectorAll('.profile-avatar')[0].setAttribute('src', avatarUrl);
};

export default {
  init
};
