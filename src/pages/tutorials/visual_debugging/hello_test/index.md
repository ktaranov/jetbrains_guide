---
type: 'tutorialstep'
date: 2019-04-02
title: Background and Setup
technologies: ['pytest']
topics: ['testing']
author: 'pauleveritt'
subtitle: Getting setup for pytest and our tutorial, including some background on Python testing.
thumbnail: './thumbnail.png'
longVideo:
  poster: './poster_long.png'
  url: 'https://www.youtube.com/watch?v=bFheD5JBjBI'
---

Getting started with pytest is quite easy. Let's write a test with a
simple assert, then show the various ways to run this test.

## First Test

Make a file at ``tests/test_import.py`` with the following:

.. literalinclude:: test_player01.py
    :caption: Hello Test first pytest ``test_player.py``

This Python file has one function, ``test_import``. In ``pytest``, tests
`are discovered <https://docs.pytest.org/en/latest/goodpractices.html#conventions-for-python-test-discovery>`_
by default in filenames starting with ``test_`` and functions/methods with
that same prefix.

## Running Your Test

Now that we have a test -- albeit simple -- let's see what it looks like to
run the test. Right-click in the middle of the editor and choose
``Run 'pytest in test_player.py'``.

.. warning::

    If you don't see ``pytest`` in the context menu as a way to run
    your tests, you probably didn't configure ``pytest`` as the test
    framework in the ``Python Integrated Tools`` section of the PyCharm's
    project settings.

PyCharm opens a new run tool window in the bottom of the screen. This tool
window is customized for visualizing tests and their results:

TODO Screen shot of the tool window

The test runner tool window lists the tests (organized by hierarchy) on the
left and the test output on the right. It also has buttons for operations
(e.g. re-run tests) and configuration (e.g. only show passing tests.)

Let's change the assertion to make the test fail and re-run the tests:

.. literalinclude:: test_player.py
    :caption: Hello Test first pytest ``test_player.py``
    :emphasize-lines: 2

In the tool window, click the green arrow to re-run your tests. The results
look much different now:

TODO Screenshot

## Many Ways to Run Tests

As you learn "visual testing", you will start to master different ways to
run tests. These different ways will reflect your personal style (e.g.
mouse vs. keyboard) or different contexts (e.g. "I just want to run the
tests on this this test class.")

Here is a (non-exhaustive) list of ways that I run tests:

- *Ctrl-R*. My most frequent. Re-runs the tests currently selected as
  the run configuration.

- *Specific test or suite*. Right-click in a test function or file.

- *Green arrow*. Click on green arrows in toolbar, gutter, tool window.

- *Right-click*. Context menu in editor, tab, tool window, project tool
  folder.

- *Permanent run configuration*. All of the approaches above create
  *temporary* run configurations. I also make permanent run configurations
  for my top-level folders under ``tests`` such as ``unit``.

TODO

- Mention autodetect of pytest

- Explain running tests with marks

- Discuss some things in run config, especially env vars

