/* ============================
   Navigation
   ============================ */
const header = document.getElementById('header');
const navToggle = document.getElementById('navToggle');
const navList = document.querySelector('.nav-list');

function setNavMenuState(open) {
  navList.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  navToggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');

  const spans = navToggle.querySelectorAll('span');
  if (open) {
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    return;
  }
  spans.forEach(span => {
    span.style.transform = '';
    span.style.opacity = '';
  });
}

setNavMenuState(false);

// Sticky header shadow
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// Mobile nav toggle
navToggle.addEventListener('click', () => {
  setNavMenuState(!navList.classList.contains('open'));
});

// Close mobile nav when a link is clicked
navList.querySelectorAll('.nav-link').forEach(link => {
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

/* ============================
   Scroll reveal
   ============================ */
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

// Add reveal class
revealTargets.forEach(selector => {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('reveal');
  });
});

// IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${(i % 6) * 60}ms`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ============================
   Active nav link on scroll
   ============================ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.style.color = '');
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.style.color = 'var(--color-accent)';
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(section => sectionObserver.observe(section));

/* ============================
   Dark Mode
   ============================ */
const themeToggle = document.getElementById('themeToggle');
const htmlEl = document.documentElement;
const THEME_STORAGE_KEY = 'theme';
const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

/**
 * localStorage から保存済みテーマを取得する
 */
function getStoredTheme() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === 'dark' || stored === 'light' ? stored : null;
  } catch (e) {
    return null;
  }
}

/**
 * ユーザー選択のテーマを保存する
 */
function setStoredTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (e) {
    // localStorage が使えない環境では保存をスキップ
  }
}

/**
 * テーマをDOMに適用する
 */
function applyTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);
}

// ボタンクリックでトグル
themeToggle.addEventListener('click', () => {
  const current = htmlEl.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  setStoredTheme(next);
});

// システム設定が変わったとき、ユーザーが手動で設定していなければ追従する
themeMediaQuery.addEventListener('change', (e) => {
  if (!getStoredTheme()) {
    applyTheme(e.matches ? 'dark' : 'light');
  }
});
/* ============================
   i18n – Browser Language Auto Apply
   ============================ */
const translations = {
  ja: {
    'hero-available': 'お仕事受付中',
    'about-p1': '<a href="https://42tokyo.jp/" target="_blank" rel="noopener" class="link">42 Tokyo</a> で学ぶエンジニアです。ピアラーニング型の教育カリキュラムを通じて、低レイヤーからフロントエンドまで幅広く取り組んでいます。',
    'about-p2': 'C / C++ を軸に、Python・TypeScript も活用しながら、ゲーム開発・システムプログラミング・Web 開発に興味を持っています。',
    'about-p3': '日本語を主として使用しております。連絡はメールにお願いします。',
    'info-name-label': '名前',
    'info-name-value': '水落 正太郎',
    'info-affiliation-label': '所属',
    'info-lang-label': '言語',
    'info-lang-value': '日本語',
    'info-email-label': 'メール',
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
    'contact-desc': '連絡はメールにお願いします。',
  },
  en: {
    'hero-available': 'Available for Work',
    'about-p1': 'Engineer studying at <a href="https://42tokyo.jp/" target="_blank" rel="noopener" class="link">42 Tokyo</a>. Through a peer-learning curriculum, I work on everything from low-level systems to frontend development.',
    'about-p2': 'With C / C++ as my foundation, I also use Python and TypeScript, and I\'m interested in game development, systems programming, and web development.',
    'about-p3': 'I am primarily a Japanese speaker. Please contact me via email.',
    'info-name-label': 'Name',
    'info-name-value': 'Shotaro Mizuochi',
    'info-affiliation-label': 'Affiliation',
    'info-lang-label': 'Language',
    'info-lang-value': 'Japanese',
    'info-email-label': 'Email',
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
    'contact-desc': 'Reach out via email.',
  },
};

function applyLang(lang) {
  // テキストコンテンツの翻訳
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // HTML コンテンツの翻訳（リンクを含む要素）
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // <html lang> を更新
  document.documentElement.setAttribute('lang', lang === 'ja' ? 'ja' : 'en');
}

// 初期化: ブラウザ言語を検出して自動適用
(function () {
  const browserLang = navigator.language || 'ja';
  applyLang(browserLang.startsWith('ja') ? 'ja' : 'en');
})();
