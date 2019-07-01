---
type: tutorialstep
date: 2019-07-01
title: Project Setup
technologies: [pytest]
topics: [testing]
author: pwe
subtitle: Make a PyCharm project and virtual environment with dependencies, then configure PyCharm to use pytest.
thumbnail: ../thumbnail.png
longVideo:
  poster: ../poster_long.png
  url: https://www.youtube.com/watch?v=bFheD5JBjBI
---

- We'll be using PyCharm Community Edition except for section on coverage

- Make a project

- Make a requirements.txt and enter pytest in it

- Minimal setup.py (perhaps using PyCharm)

    - Note: could be skipped by mark source root, but other tools e.g.
      CI would break

- Enable pytest as the test runner

- Make a top-level directory called tests
