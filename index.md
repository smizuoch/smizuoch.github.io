---
layout: home
title: Home
---

<div class="hero-section">
  <h1>{{ site.title }}</h1>
  <p class="lead">{{ site.description }}</p>
  <div class="cta-buttons">
    <a href="{{ '/about' | relative_url }}" class="btn btn-primary">自己紹介</a>
    <a href="{{ '/projects' | relative_url }}" class="btn btn-secondary">プロジェクト</a>
  </div>
</div>

<section class="featured-section">
  <h2>スキルと技術</h2>
  <div class="skills-container">
    <div class="skill-category">
      <h3>プログラミング言語</h3>
      <div class="skill-items">
        <div class="skill-item">C</div>
        <div class="skill-item">C++</div>
        <div class="skill-item">Python</div>
      </div>
    </div>
    <div class="skill-category">
      <h3>開発環境</h3>
      <div class="skill-items">
        <div class="skill-item">VS Code</div>
        <div class="skill-item">Vim</div>
        <div class="skill-item">Ren'Py</div>
      </div>
    </div>
    <div class="skill-category">
      <h3>OS</h3>
      <div class="skill-items">
        <div class="skill-item">macOS</div>
        <div class="skill-item">Windows</div>
        <div class="skill-item">Ubuntu</div>
      </div>
    </div>
  </div>
</section>

<section class="latest-posts">
  <h2>最新の記事</h2>
  <div class="post-grid">
    {% for post in site.posts limit: 3 %}
      <div class="post-card">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p class="post-date">{{ post.date | date: "%Y年%m月%d日" }}</p>
        <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
        <a href="{{ post.url | relative_url }}" class="read-more">続きを読む</a>
      </div>
    {% endfor %}
  </div>
  <div class="view-all">
    <a href="{{ '/blog' | relative_url }}" class="btn btn-outline">すべての記事を見る</a>
  </div>
</section>

<section class="github-stats">
  <h2>GitHub統計</h2>
  <div class="stats-container">
    <img src="https://github-readme-stats.vercel.app/api?username=smizuoch&show_icons=true&theme=merko&count_private=true" alt="GitHub統計" class="stats-card">
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=smizuoch&layout=donut&theme=merko" alt="使用言語統計" class="stats-card">
    <img src="https://badge.mediaplus.ma/darkblue/smizuoch?1337Badge=off&UM6P=off" alt="42 Tokyo統計" class="stats-card">
  </div>
</section>