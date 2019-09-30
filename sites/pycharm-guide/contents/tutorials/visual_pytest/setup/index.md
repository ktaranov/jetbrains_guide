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

PyCharm has projects and Python does as well. 
Let's make both, with a virtual environment, and set the project up to use `pytest`.

# New Project

We'll let the IDE guide us through the process. 
First, we use `File -> New Project` to make a new project, in a directory:

TODO Screenshot of New Project dialog

Make sure `Project Interpreter` is setup to configure a new virtual environment.
Expand the triangle if needed to set this up.

After clicking `Create`, tell PyCharm to open the project in a new window.

# Python Project

[Python packaging](https://packaging.python.org/tutorials/packaging-projects/) is, alas, a thorny topic, and we're going to make you do it for this tutorial.

Why?
Most Python packages put their tests *outside* of their source directories, to avoid accidentally shipping the tests (among other reasons.)
The tests thus need to import the package that you code is in, and that means a Python package.
Fortunately this is [all explained quite well](https://blog.godatadriven.com/setup-py) in the `pytest` docs.

We first need a `setup.py` file at the top of our new project.
Add the following:

`embed:tutorials/visual_pytest/setup/setup.py`

Now go to PyCharm's Terminal tool and type in the following:

```shell script
$ pip install -e .[tests]
```

This has two effects:

- It makes this project an "editable install" by creating a directory named `laxleague.egg-info`

- `pytest` is installed into the project's virtual environment

# Give Me Some Source

But we don't have any source code yet. 
Let's make a directory `laxleague` as a sibling of `setup.py`, then put a file `laxleague/player.py` in there containing:

`embed:tutorials/visual_pytest/setup/player.py`

# Configure Testing

One last step...we need to tell PyCharm to use `pytest` for its built-in Python testing support.
This happens automatically when we first open an existing project with `pytest` in the virtual environment.
We added `pytest` after making the environment, so we need to configure it ourselves.

Go to `Settings -> Tools -> Python Integrated Tools` and change `Default test runner:` to `pytest`:

TODO screenshot

Finally, make a top-level directory called `tests`.
This mimics the normal structure of Python projects with `pytest`.

When done, your directory structure should look like this:

TODO screenshot of project tool window