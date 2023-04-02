function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function setLanguageElements(language) {
  const enOnlyElements = document.querySelectorAll('.en-only');
  const jaOnlyElements = document.querySelectorAll('.ja-only');

  if (language === 'ja') {
    enOnlyElements.forEach(element => element.style.display = 'none');
    jaOnlyElements.forEach(element => element.style.display = 'block');
  } else {
    enOnlyElements.forEach(element => element.style.display = 'block');
    jaOnlyElements.forEach(element => element.style.display = 'none');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let lang = getQueryParam('lang');
  if (!lang) {
    const browserLang = window.navigator.language;
    lang = (browserLang === 'ja') ? 'ja' : 'en';
  }
  setLanguageElements(lang);
});
