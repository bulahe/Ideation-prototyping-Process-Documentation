---
layout: gallery
title: Ideation & Prototyping
description: A journal of projects, experiments, and creative process.
permalink: /
home: true
---

<header class="project-intro home-intro">
  <p class="eyebrow">Projects / Process documentation</p>
  <h1>Ideation &amp; <em>Prototyping</em></h1>
</header>

<div class="home-projects" aria-label="Projects">
{% assign projects = site.pages | where_exp: "item", "item.project" | sort: "project_order" %}
{% for project in projects %}
  <a class="home-project" href="{{ project.url | relative_url }}">
    <span class="home-project-number">{% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}</span>
    <div>
      <h2>{{ project.title | escape }}</h2>
      <p>{{ project.description | escape }}</p>
    </div>
    <span class="home-project-arrow" aria-hidden="true">↗</span>
  </a>
{% endfor %}
</div>
