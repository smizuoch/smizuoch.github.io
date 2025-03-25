---
layout: default
title: プロジェクト
---

<div class="projects-container">
  <header class="page-header">
    <h1>プロジェクト</h1>
    <p class="lead">これまでに取り組んだ主なプロジェクトをご紹介します。</p>
  </header>

  <div class="projects-grid">
    <!-- 42Tokyoのプロジェクト（サンプル） -->
    <div class="project-card">
      <div class="project-header">
        <h3>libft</h3>
        <div class="project-badges">
          <span class="badge">C</span>
          <span class="badge">ライブラリ</span>
        </div>
      </div>
      <p class="project-description">
        標準CライブラリとUNIX関数の一部を再実装したライブラリ。メモリ管理、文字列操作、リスト操作などの基本的な関数を含む。
      </p>
      <div class="project-links">
        <a href="https://github.com/smizuoch/libft" class="btn btn-sm">GitHub</a>
      </div>
    </div>

    <!-- 他のプロジェクト（サンプル） -->
    <div class="project-card">
      <div class="project-header">
        <h3>ft_printf</h3>
        <div class="project-badges">
          <span class="badge">C</span>
          <span class="badge">標準関数実装</span>
        </div>
      </div>
      <p class="project-description">
        Cの標準関数printfを再実装したプロジェクト。可変引数を処理し、様々な変換指定子をサポート。
      </p>
      <div class="project-links">
        <a href="https://github.com/smizuoch/ft_printf" class="btn btn-sm">GitHub</a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-header">
        <h3>言語モデル実験</h3>
        <div class="project-badges">
          <span class="badge">Python</span>
          <span class="badge">機械学習</span>
        </div>
      </div>
      <p class="project-description">
        自然言語処理モデルを使った実験プロジェクト。テキスト生成や感情分析などを実装。
      </p>
      <div class="project-links">
        <a href="#" class="btn btn-sm">詳細</a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-header">
        <h3>画像生成アプリ</h3>
        <div class="project-badges">
          <span class="badge">Python</span>
          <span class="badge">深層学習</span>
        </div>
      </div>
      <p class="project-description">
        GANを活用した画像生成アプリケーション。テキストから画像を生成する機能を実装。
      </p>
      <div class="project-links">
        <a href="#" class="btn btn-sm">詳細</a>
      </div>
    </div>
  </div>

  <div class="github-section">
    <h2>GitHub 統計</h2>
    <div class="github-stats">
      <img src="https://github-readme-stats.vercel.app/api?username=smizuoch&show_icons=true&theme=merko&count_private=true" alt="GitHub stats">
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=smizuoch&layout=donut&theme=merko" alt="Top Languages">
    </div>
    <div class="github-cta">
      <a href="https://github.com/smizuoch" class="btn btn-primary">GitHubをチェック</a>
    </div>
  </div>
</div>

<style>
.projects-container {
  margin: 2rem 0;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: var(--light-gray);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  transition: var(--transition);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--box-shadow);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.project-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.badge {
  background-color: var(--primary-color);
  color: white;
  font-size: 0.8rem;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
}

.project-description {
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.btn-sm {
  padding: 0.4rem 1rem;
  font-size: 0.9rem;
}

.github-section {
  margin-top: 4rem;
  text-align: center;
}

.github-stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
}

.github-stats img {
  max-width: 100%;
  height: auto;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: var(--transition);
}

.github-stats img:hover {
  transform: translateY(-5px);
}

.github-cta {
  margin-top: 1.5rem;
}
</style>
