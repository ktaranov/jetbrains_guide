---
type: 'tutorialstep'
date: 2019-04-02
title: Skipping Tests
technologies: ['pytest']
topics: ['testing']
author: 'pauleveritt'
subtitle: Use both IDE features and pytest markers to skip certain tests.
thumbnail: './thumbnail.png'
longVideo:
  poster: './poster_long.png'
  url: 'https://www.youtube.com/watch?v=bFheD5JBjBI'
---

Sometimes you want to overhaul a chunk of code and don't want to stare
at a broken test. You could comment it out. But pytest provides an
easier (and more feature-ful) alternative for skipping tests.

We'll show this in action while implementing:

- The ability to add multiple guardians at once

- A concept of the "primary guardian" of a player

## Bulk Guardians



### Primary Guardian and Skipping Tests

- Property which returns the first guardian

- Let's use a pytest marker to temporarily skip some tests

- Write a test which adds three guardians, autorun fails

- Go to implementation, implement it, passes

- We decide to do a nicer repr on the Guardian dataclass

    - Open guardian.py on left, test_guardian on right,

    - Write test, fails, write implementation

    - Leave guardian.py on left !!

- Remove the skip

- Go back to where we were in test_player.py and change the assert on
  primary guardian to assert the repr

TODO Show the use of PyCharm features for skipping tests

