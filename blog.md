---
layout: default
title: ブログ
---

<div class="blog-container">
  <header class="page-header">
    <h1>ブログ</h1>
    <p class="lead">プログラミング、技術、学習の記録などをシェアしています。</p>
  </header>

  <div class="blog-grid">
    {% for post in site.posts %}
      <div class="blog-card">
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <div class="blog-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y年%m月%d日" }}</time>
          {% if post.categories.size > 0 %}
          <span class="blog-categories">
            カテゴリ:
            {% for category in post.categories %}
            <a href="{{ '/categories/' | append: category | relative_url }}" class="category-link">{{ category }}</a>{% unless forloop.last %}, {% endunless %}
            {% endfor %}
          </span>
          {% endif %}
        </div>
        <div class="blog-excerpt">
          {{ post.excerpt | strip_html | truncatewords: 50 }}
        </div>
        <a href="{{ post.url | relative_url }}" class="read-more">続きを読む →</a>
      </div>
    {% endfor %}
  </div>

  {% if site.posts.size == 0 %}
    <div class="no-posts">
      <p>まだ記事がありません。近日公開予定です。</p>
    </div>
  {% endif %}
</div>

<style>
.blog-container {
  margin: 2rem 0;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.blog-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.blog-card {
  background-color: var(--light-gray);
  border-radius: var(--border-radius);
  padding: 2rem;
  transition: var(--transition);
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--box-shadow);
}

.blog-card h2 {
  margin-bottom: 0.5rem;
}

.blog-meta {
  color: var(--medium-gray);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.category-link {
  color: var(--primary-color);
}

.blog-excerpt {
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.read-more {
  font-weight: 500;
}

.no-posts {
  text-align: center;
  padding: 3rem;
  background-color: var(--light-gray);
  border-radius: var(--border-radius);
}
</style>
