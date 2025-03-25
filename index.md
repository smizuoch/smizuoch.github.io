---
layout: default
title: Home
---

<h1>Welcome to {{ site.title }}</h1>
<p>{{ site.description }}</p>

<section>
  <h2>Latest Posts</h2>
  <ul>
    {% for post in site.posts limit: 5 %}
      <li>
        <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        <small>{{ post.date | date: "%Y-%m-%d" }}</small>
      </li>
    {% endfor %}
  </ul>
</section>