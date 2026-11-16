# RetroArch test data

This is what the RetroArch app's tests use (`contract.json`).

There's nothing recorded here. RetroArch is a normal program: the box starts it full screen, from the `exec` line in its manifest. The app has no page and doesn't talk to a server.

So the tests check that the app follows OrigaiTV's rules for an official app, that opening it doesn't do or ask for anything, and that it can't be asked to do anything else.

There's nothing to sign in to. Your games, RetroArch's cores and its settings are RetroArch's own, on the TV.

The rest needs RetroArch on an installed box: that adding the app installs it, that it opens full screen, and that holding the guide button gets you home. I'll check that on my NUC with a controller.
