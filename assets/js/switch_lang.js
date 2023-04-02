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
  const browserLang = window.navigator.language;
  const lang = (browserLang === 'ja') ? 'ja' : 'en';
  setLanguageElements(lang);
});
