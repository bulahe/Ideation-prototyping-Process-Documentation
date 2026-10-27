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
{% assign projects = site.pages | where_exp: "item", "item.project" | sort: "project_date" | reverse %}
{% for project in projects %}
  <a class="home-project" href="{{ project.url | relative_url }}">
    {% if project.project_additional_dates %}
    <span class="home-project-date home-project-dates"><time datetime="{{ project.project_date | date: '%Y-%m-%d' }}">{{ project.project_date | date: "%b %-d" }}</time><span class="home-project-extra-dates">{% for additional_date in project.project_additional_dates %}<time datetime="{{ additional_date | date: '%Y-%m-%d' }}">{{ additional_date | date: "%b %-d" }}</time>{% endfor %}</span></span>
    {% else %}
    <time class="home-project-date" datetime="{{ project.project_date | date: '%Y-%m-%d' }}">{{ project.project_date | date: "%b %-d" }}</time>
    {% endif %}
    <div>
      <h2>{{ project.title | escape }}</h2>
      <p>{{ project.description | escape }}</p>
    </div>
    <span class="home-project-arrow" aria-hidden="true">↗</span>
  </a>
{% endfor %}
</div>
