---
date: 2020-06-03
title: 'Find Action'
technologies: ['go']
topics: ['navigation']
author: dlsniper
subtitle: Skip memorizing keyboard shortcuts and speed search for actions instead.
seealso:
  - title: Navigating to Action
    href: https://www.jetbrains.com/help/go/2017.3/navigating-to-action.html#Navigate_to_Action.xml
thumbnail: ./thumbnail.png
cardThumbnail: ./card.png
shortVideo:
  poster: ./poster_short.png
  url: https://www.youtube.com/watch?v=WQ3oGpY6V3U&list=PLM-t1Z4tbFfnXnghmtk6WVz10_pivOw25&index=2&t=0s
leadin: |
  *Actions, keyboard, speed search.*

  Want to use your keyboard but can't memorize all the shortcuts? Find
  actions by search, using speed typing.

---

This is it, the biggest tip.

Our IDEs have an incredible number of useful actions, with many bound to
keyboard shortcuts. You often discover one and think "That would be so
useful!" But you then realize: "I don't want to use my mouse and I'll
never remember shortcut number 427."

Lots of shortcuts. Different shortcuts on different operating systems.
Too much to remember!

There's a better way: Don't.

Instead, memorize one shortcut: `Find Action` (`Shift-Ctrl-A` Win/Linux,
`Shift-Cmd-A` macOS). With your keyboard and one *highly-remembered*
shortcut, you get fast access to all actions.

Invoking `Find Action` pops up the `Find` panel with tabs for `All`,
`Classes`, `Files`, `Symbols`, and `Action`, with `Action` highlighted.

Start typing the name of the action you're looking for and the
autocomplete filters out the choices. Grayed-out actions are not
valid in the context. Results also show the keyboard shortcut when an
action has one.

Or use speed typing by putting in the first few letters of each
word in the action. For `Find in Path`, `fi pa` makes it the first-listed
action in the results.

One last point: `Find Action` also matches preferences, and some are
inline toggleable. Want to disable tabs without opening
settings/preferences? Start `Find Action` and type `wi pl no` for
the `Window | Editor Tabs | Tabs Placement: None` preference.