---
type: tutorialstep
date: 2019-07-01
title: Getting Into the TDD Flow
technologies: [pytest]
topics: [testing]
author: pwe
subtitle: Setup your PyCharm project to help get into the flow of Test-Driven Development (TDD).
thumbnail: ../thumbnail.png
longVideo:
  poster: ../poster_long.png
  url: https://www.youtube.com/watch?v=bFheD5JBjBI
---

Players have parents. Pro tip for youth sports: families are complicated
now. It's not just "parent" but "guardian". Let's make a module for
a `Guardian` class.

This time let's do it with a bit of test-driven development (TDD) and
show how to get PyCharm into a good "flow" for TDD.

# Starter Tests

First, create `visual_pytest/guardian.py` with an empty class:

`embed:tutorials/visual_pytest/tdd_flow/guardian01.py`

Why do we make an empty placeholder class? 
To let PyCharm generate the import in our test, as shown in the previous step.

Let's do that part now. Create `tests/test_guardian.py` with the
`test_import` "get me into the flow" test we just saw:

`embed:tutorials/visual_pytest/tdd_flow/test_guardian.py`

Run the test by right-clicking on the tab and choosing to run it with
`pytest`. Or, as I do -- right-click in the editor *outside any block*
and run it (bigger target area than the tab.)

The tests pass, which isn't a major victory, but allows us to start getting into the flow:

TODO Screenshot of tests passing

# TDD Flow

Now let's get ourselves into a TDD flow. 
We'd like to easily look at the code we are writing and the tests we providing against that code. 
I like both visible, with my code on the left and the tests on the right.

Invoke `Find Action` with Cmd-Shift-A and search for `Split Vertically`.
On the left, open `guardian.py` and on the right, make sure `test_guardian.py` is still open. 
The run tool window is on the bottom (though on wide monitors I put it on the right):

TODO Screenshot

There, that has a nice feel to it. 

One more thing: let's have all our tests run, automatically, as we type. 
PyCharm makes this easy and visually convenient -- it even integrates with your desktop notification system when tests are finished running and PyCharm isn't visible.

First, right-click on the `tests` folder and choose `Run 'pytest in tests'` to get a temporary run configuration for *all tests* in the project. 
Then, in the tool window for the test output, click on the `Toggle auto-test` icon, two icons below the green run arrow. 
Click that green run arrow again. 
Now, all your tests run two seconds (configurable) after you stop typing.

TODO Annotated screenshot showing the 'toggle auto-test' button

One final point: you don't have to save changes to your code or tests.
PyCharm has an auto-save virtual filesystem thingy.

To see this autorun in action, put a mistake in your `assert`. 
You'll see the tests fail, automatically.

That's a nice start to a good TDD flow. 
Let's write a failing test, then fix the implementation.

# The Guardian

Our `Guardian` needs a constructor that takes and stores `first_name`
and a `last_name`. Add a new test to `tests/test_guardian.py`:

`embed:tutorials/visual_pytest/tdd_flow/test_guardian02.py`

Our tests break:

TODO Screenshot of tool window with broken test

Of course it breaks: `Guardian` has no constructor. 
Since it is the code we are writing tests for, the mistake is conveniently right there in our left tab. \
No need to think. 
Change `visual_pytest/guardian.py` to store the names:

`embed:tutorials/visual_pytest/tdd_flow/guardian.py`

As you are writing this, let PyCharm help you:

- First, use autocomplete to finish `__init__` and put your cursor in the
  right spot.

- Next, when you type your constructor arguments, use `Alt-Enter` and
  choose `Add field `first_name` to Guardian`. PyCharm will generate the
  `self.first_name = first_name` boilerplate for you.

- Finally, if the generation is in the wrong order, use
  `Shift-Alt-Up` or down to move the line, instead of cutting and pasting.

Our test now passes but doesn't do an assertion. 
Back in `test_construction`, let's show a bit about how PyCharm can help you be more productive and accurate.

First, hold down `Ctrl` and hover on the `g`. 
PyCharm tells you that `g` is of type `Guardian.` 
Next, add an assertion:

``python
assert g.first_name == 'Mary'
``

As you type `first_name` you can see PyCharm offering you the autocomplete.

Oops, we had poor style on that. 
In my projects, I prefer a testing conventions for asserts with expected on the left, meaning `expected == actual`. 
We need to flip that, but good news: PyCharm excels at such janitorial work. 
Click on the double-equal, hit `Alt-Enter`, and choose `Flip '=='`.

## Note

If you're don't have PyCharm configured to use a font with ligatures such as Fira Code, you're missing out. 
The double-equals symbol in this case is really slick-looking.

Let's write a test for last name, causing `test_guardian.py` to finish like the following:

`embed:tutorials/visual_pytest/tdd_flow/test_guardian.py`


One last point: PyCharm's tool window for testing hides passing tests by default. 
The idea is that you want to focus on failed tests. If you want to see them, click on the `Show Passed` icon to the right of the green play button.