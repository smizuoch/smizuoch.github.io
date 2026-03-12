const header = document.getElementById('header');
const navToggle = document.getElementById('navToggle');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('themeToggle');
const htmlEl = document.documentElement;

const pageTitle = document.getElementById('pageTitle');
const metaDescription = document.getElementById('metaDescription');
const ogTitle = document.getElementById('ogTitle');
const ogDescription = document.getElementById('ogDescription');
const ogLocale = document.getElementById('ogLocale');
const twitterTitle = document.getElementById('twitterTitle');
const twitterDescription = document.getElementById('twitterDescription');

const THEME_STORAGE_KEY = 'theme';
const DEFAULT_LANG = 'ja';
const themeMediaQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

const translations = {
  ja: {
    text: {
      'nav-about': '概要',
      'nav-skills': 'スキル',
      'nav-stats': '実績',
      'nav-work': '仕事',
      'nav-contact': '連絡',
      'hero-subtitle': '42 Tokyo Student · Software Developer',
      'hero-available': 'お仕事受付中',
      'hero-contact-btn': 'お問い合わせ',
      'about-title': '概要',
      'about-p1': '<a href="https://42tokyo.jp/" target="_blank" rel="noopener" class="link">42 Tokyo</a> で学ぶエンジニアです。ピアラーニング型の教育カリキュラムを通じて、低レイヤーからフロントエンドまで幅広く取り組んでいます。',
      'about-p2': 'C / C++ を軸に、Python・TypeScript も活用しながら、ゲーム開発・システムプログラミング・Web 開発を行っております。',
      'about-p3': '日本語を主として使用しております。連絡はメールにお願いします。',
      'info-name-label': '名前',
      'info-name-value': '水落 正太郎',
      'info-affiliation-label': '所属',
      'info-lang-label': '言語',
      'info-lang-value': '日本語',
      'info-email-label': 'メール',
      'skills-title': 'スキル / ツール',
      'skills-languages': '言語',
      'skills-tools': '環境 / ツール',
      'stats-title': '実績',
      'work-title': 'お仕事',
      'work-status-text': '現在、お仕事のご依頼を受け付けています',
      'work-highlight-title': '企業案件実績あり',
      'work-highlight-desc': '企業向けの開発プロジェクトに携わった実績があります。要件定義から実装・納品まで対応可能です。',
      'work-services-title': '対応可能な業務',
      'work-service-1': 'システムプログラミング (C / C++)',
      'work-service-2': 'Web アプリケーション開発 (TypeScript)',
      'work-service-3': 'Python スクリプト・自動化',
      'work-service-4': 'ゲーム開発 (Unity / C#)',
      'work-cta-text': 'まずはお気軽にご連絡ください。',
      'work-cta-btn': 'お問い合わせ',
      'contact-title': '連絡先',
      'contact-desc': '連絡はメールにお願いします。',
      'contact-email-label': 'メール',
      'stats-image-alt': 'smizuoch の 42 stats',
    },
    meta: {
      title: 'smizuoch | ソフトウェアエンジニア',
      description: '42Tokyo在籍のソフトウェアエンジニア。C / C++ / Python / TypeScript を軸に、システムプログラミングからWeb開発まで幅広く対応。課題を深く理解し、クリーンで保守性の高いコードを届けます。',
      locale: 'ja_JP',
    },
    labels: {
      navOpen: 'メニューを開く',
      navClose: 'メニューを閉じる',
      themeDark: 'ダークモードに切り替え',
      themeLight: 'ライトモードに切り替え',
    },
  },
  en: {
    text: {
      'nav-about': 'About',
      'nav-skills': 'Skills',
      'nav-stats': 'Stats',
      'nav-work': 'Work',
      'nav-contact': 'Contact',
      'hero-subtitle': '42 Tokyo Student · Software Developer',
      'hero-available': 'Available for Work',
      'hero-contact-btn': 'Contact',
      'about-title': 'About',
      'about-p1': 'Engineer studying at <a href="https://42tokyo.jp/" target="_blank" rel="noopener" class="link">42 Tokyo</a>. Through a peer-learning curriculum, I work on everything from low-level systems to frontend development.',
      'about-p2': 'I primarily work with C/C++, while also utilizing Python and TypeScript for game development, system programming, and web development.',
      'about-p3': 'I am primarily a Japanese speaker. Please contact me via email.',
      'info-name-label': 'Name',
      'info-name-value': 'Shotaro Mizuochi',
      'info-affiliation-label': 'Affiliation',
      'info-lang-label': 'Language',
      'info-lang-value': 'Japanese',
      'info-email-label': 'Email',
      'skills-title': 'Skills & Tools',
      'skills-languages': 'Languages',
      'skills-tools': 'Engines & Tools',
      'stats-title': 'My Stats',
      'work-title': 'Work',
      'work-status-text': 'Currently accepting project inquiries',
      'work-highlight-title': 'Corporate Project Experience',
      'work-highlight-desc': 'I have experience on development projects for companies, handling everything from requirements definition to implementation and delivery.',
      'work-services-title': 'Available Services',
      'work-service-1': 'Systems Programming (C / C++)',
      'work-service-2': 'Web Application Development (TypeScript)',
      'work-service-3': 'Python Scripts & Automation',
      'work-service-4': 'Game Development (Unity / C#)',
      'work-cta-text': 'Feel free to reach out anytime.',
      'work-cta-btn': 'Get in Touch',
      'contact-title': 'Contact',
      'contact-desc': 'Reach out via email.',
      'contact-email-label': 'Email',
      'stats-image-alt': "smizuoch's 42 stats",
    },
    meta: {
      title: 'smizuoch | Software Developer',
      description: 'Software engineer studying at 42 Tokyo. I build across systems programming and web development with C, C++, Python, and TypeScript.',
      locale: 'en_US',
    },
    labels: {
      navOpen: 'Open menu',
      navClose: 'Close menu',
      themeDark: 'Switch to dark mode',
      themeLight: 'Switch to light mode',
    },
  },
};

let currentLang = DEFAULT_LANG;

function getMessages(lang) {
  return translations[lang] || translations[DEFAULT_LANG];
}

function getStoredTheme() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === 'dark' || stored === 'light' ? stored : null;
  } catch (e) {
    return null;
  }
}

function setStoredTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (e) {
    // localStorage unavailable
  }
}

function updateMeta(messages) {
  pageTitle.textContent = messages.meta.title;
  document.title = messages.meta.title;
  metaDescription.setAttribute('content', messages.meta.description);
  ogTitle.setAttribute('content', messages.meta.title);
  ogDescription.setAttribute('content', messages.meta.description);
  ogLocale.setAttribute('content', messages.meta.locale);
  twitterTitle.setAttribute('content', messages.meta.title);
  twitterDescription.setAttribute('content', messages.meta.description);
}

function updateNavToggleLabel(open) {
  const { labels } = getMessages(currentLang);
  navToggle.setAttribute('aria-label', open ? labels.navClose : labels.navOpen);
}

function updateThemeToggleState(theme) {
  const { labels } = getMessages(currentLang);
  const isDark = theme === 'dark';
  themeToggle.setAttribute('aria-label', isDark ? labels.themeLight : labels.themeDark);
  themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
}

function applyTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);
  updateThemeToggleState(theme);
}

function setNavMenuState(open) {
  navList.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  updateNavToggleLabel(open);

  const spans = navToggle.querySelectorAll('span');
  if (open) {
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    return;
  }

  spans.forEach((span) => {
    span.style.transform = '';
    span.style.opacity = '';
  });
}

function applyLang(lang) {
  currentLang = translations[lang] ? lang : DEFAULT_LANG;
  const messages = getMessages(currentLang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (messages.text[key] !== undefined) {
      el.textContent = messages.text[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (messages.text[key] !== undefined) {
      el.innerHTML = messages.text[key];
    }
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (messages.text[key] !== undefined) {
      el.setAttribute('alt', messages.text[key]);
    }
  });

  htmlEl.setAttribute('lang', currentLang);
  updateMeta(messages);
  updateNavToggleLabel(navList.classList.contains('open'));
  updateThemeToggleState(htmlEl.getAttribute('data-theme') || 'light');
}

function setActiveNavLink(id) {
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });
}

setNavMenuState(false);
header.classList.toggle('scrolled', window.scrollY > 10);

window.addEventListener(
  'scroll',
  () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  },
  { passive: true }
);

navToggle.addEventListener('click', () => {
  setNavMenuState(!navList.classList.contains('open'));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setNavMenuState(false);
  });
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navList.classList.contains('open')) {
    setNavMenuState(false);
    navToggle.focus();
  }
});

const revealTargets = [
  '.hero-title',
  '.hero-subtitle',
  '.hero-actions',
  '.section-title',
  '.about-text',
  '.about-card',
  '.skills-block',
  '.skill-card',
  '.stats-card',
  '.contact-desc',
  '.contact-card',
];

revealTargets.forEach((selector) => {
  document.querySelectorAll(selector).forEach((el) => {
    el.classList.add('reveal');
  });
});

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.style.transitionDelay = `${(index % 6) * 60}ms`;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add('visible'));
}

const sections = document.querySelectorAll('section[id]');

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNavLink(entry.target.id);
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((section) => sectionObserver.observe(section));
} else {
  const updateActiveSection = () => {
    const offset = header.offsetHeight + 24;
    let activeId = '';

    sections.forEach((section) => {
      if (window.scrollY + offset >= section.offsetTop) {
        activeId = section.id;
      }
    });

    setActiveNavLink(activeId);
  };

  window.addEventListener('scroll', updateActiveSection, { passive: true });
  updateActiveSection();
}

themeToggle.addEventListener('click', () => {
  const currentTheme = htmlEl.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  setStoredTheme(nextTheme);
});

if (themeMediaQuery) {
  const handleSystemThemeChange = (event) => {
    if (!getStoredTheme()) {
      applyTheme(event.matches ? 'dark' : 'light');
    }
  };

  if (typeof themeMediaQuery.addEventListener === 'function') {
    themeMediaQuery.addEventListener('change', handleSystemThemeChange);
  } else if (typeof themeMediaQuery.addListener === 'function') {
    themeMediaQuery.addListener(handleSystemThemeChange);
  }
}

(function init() {
  const browserLang = navigator.language || DEFAULT_LANG;
  const nextLang = browserLang.startsWith('ja') ? 'ja' : 'en';
  applyLang(nextLang);
  const initialTheme =
    getStoredTheme() ||
    (themeMediaQuery && themeMediaQuery.matches ? 'dark' : null) ||
    htmlEl.getAttribute('data-theme') ||
    'light';
  applyTheme(initialTheme);
  updateThemeToggleState(initialTheme);
})();
