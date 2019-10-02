---
type: tutorialstep
date: 2019-07-01
title: Hello Test
technologies: [pytest]
topics: [testing]
author: pwe
subtitle: Write a simple test and run it in PyCharm's visual test runner.
thumbnail: ../thumbnail.png
longVideo:
  poster: poster_long.png
  url: https://www.youtube.com/watch?v=yKQXgQT6mqg
---

Getting started with pytest is quite easy.
Let's write a test with a simple assert, then show the various ways to run this test.

# First Test

Make a file at `tests/test_player.py` -- meaning, not inside the nested `laxleague` directory -- with the following:

`embed:tutorials/visual_pytest/hello_test/test_player01.py`

This Python file has one function, `test_player`. 
In `pytest`, tests [are discovered](https://docs.pytest.org/en/latest/goodpractices.html#conventions-for-python-test-discovery) by default in filenames starting with `test_` and functions/methods with that same prefix.

# Running Your Test

Now that we have a test -- albeit simple -- let's see what it looks like to run the test. 
Right-click in the middle of the editor and choose `Run 'pytest in test_player.py'`.

![Run Tests via Context Menu](./context_menu.png)

Yay, our first tests run. 
Sure, small victory, but small victories can help get us into the TDD flow.

## Warning

If you don't see `pytest` in the context menu as a way to run
your tests, you probably didn't configure `pytest` as the test
framework in the `Python Integrated Tools` section of the PyCharm's
project settings. It should configure automatically, though, if your 
environment has `pytest`.

PyCharm opens a new run tool window in the bottom of the screen. This tool
window is customized for visualizing tests and their results:

![Run Tests Tool Window](./tool_window.png)

The test runner tool window lists the tests (organized by hierarchy) on the
left and the test output on the right. It also has buttons for operations
(e.g. re-run tests) and configuration (e.g. only show passing tests.)

Let's change the assertion to make the test fail and re-run the tests:

`embed:tutorials/visual_pytest/hello_test/test_player.py`

In the tool window, click the green arrow to re-run your tests. The results
look much different now:

![Failing Tests](./failing.png)

# Many Ways to Run Tests

As you learn "visual testing", you will start to master different ways to
run tests. These different ways will reflect your personal style (e.g.
mouse vs. keyboard) or different contexts (e.g. "I just want to run the
tests on this this test class.")

Here is a (non-exhaustive) list of ways that I run tests:

- *Ctrl-R*. My most frequent fave. Re-runs the tests currently selected as
the run configuration. We'll use this for the rest of the tutorial.

- *Specific test or suite*. Right-click in a test function or file.

- *Green arrow*. Click on green arrows in toolbar, gutter, tool window.

- *Right-click*. Context menu in editor, tab, tool window, project tool folder.

- *Permanent run configuration*. All of the approaches above create
*temporary* run configurations. I also make permanent run configurations
for my top-level folders under `tests` such as `unit`.
