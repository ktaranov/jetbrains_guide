---
type: 'tutorialstep'
date: 2019-04-02
title: 'Testing Your First Class'
technologies: ['pytest']
topics: ['testing']
author: 'pauleveritt'
subtitle: Make a file with a class and write the basics of a test.
thumbnail: './thumbnail.png'
longVideo:
  poster: './poster_long.png'
  url: 'https://www.youtube.com/watch?v=bFheD5JBjBI'
---

We now see a bit about writing and running a test using
:ref:`technology-pytest`. Let's start the process of writing our application.

The Player
==========

Lacrosse teams have, of course, players. We're going to make a ``Player``
class and write tests as we implement features.

Start by making a ``visual_pytest/player.py`` file with an empty ``Player``
class in it:

.. literalinclude:: player.py
    :caption: Empty Player Class ``player.py``

.. note::

    Why the docstring? Later we'll show how PyCharm can give previews
    of information during autocomplete. The information includes
    docstrings, which helps you recall things without leaving your context.

The Test
========

These tutorials are all about getting into the "flow". Lots of times I
resist: I'm tired, the problem I'm about to tackle is daunting, or I have a
lot on my mind.

As a self-hack, I write a simple test, just to see if the thing exists. It
is of modest value: it can later help show if a refactoring changed things.

Here's the new ``test_import`` in ``test_player.py``:

.. literalinclude:: test_player.py
    :caption: Test the import ``test_player.py``
    :lines: 2-
    :emphasize-lines: 1, 5

Remember that PyCharm can help you (TODO ref the tip or doc) generate the
import of ``Player``. You don't need to stop your flow, go to the top, and
write the import. Type ``Playe`` and hit ``Ctrl-Space-Space`` to
autocomplete *and* add the import line at the top, in the correctly-sorted
location, and combined with any existing import of the module.

Running
=======

Let's run everything in the file (currently one test) by right-clicking
the tab and choosing ``Run 'pytest in test_player.py'``.

PyCharm opens a tool window with the visual output of the test.

TODO

- Either change to assert Player or get rid of the self-hack

- Mention that the Ctrl-Space-Space is frustrating when it is not unique

- Ctrl-Space should be enough, don't need smart completion

