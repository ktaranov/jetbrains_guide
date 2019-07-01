---
type: tutorialstep
date: 2019-07-01
title: Debugging During Testing
technologies: [python, pytest]
topics: [debugging, testing]
author: pwe
subtitle: When writing tests, use the PyCharm "visual debugger" to interactively poke around in the context of a problem.
thumbnail: ../thumbnail.png
longVideo:
  poster: ../poster_long.png
  url: https://www.youtube.com/watch?v=bFheD5JBjBI
---


# No Guardians and Debugging

- Realize you didn't test the case of zero guardians

- Write it, traceback

- Click on left, then click on traceback to open on left

- "Why doesn't that work?"

- Breakpoint, debugger, step into implementation, evaluate expression,
  realize error

- Note: can't use console

- Fix, but now the type hinting is mad

- Fix the return value type hint

TODO

- Move the type hinting to a separate "advanced" section