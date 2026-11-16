# Minecraft test data

This is what the Minecraft app's tests use (`contract.json`).

There's nothing recorded here. Minecraft's launcher is a normal program: the box starts it from the `exec` line in its manifest. The app has no page and doesn't talk to a server.

So the tests check that the app follows OrigaiTV's rules for an official app, that opening it doesn't do or ask for anything, and that it can't be asked to do anything else.

Signing in is the launcher's own, on the TV, and so is the game.

The rest needs Minecraft on an installed box: that adding the app installs the launcher, that it opens, and that holding the guide button gets you home. The launcher and the game are made for a mouse and keyboard, so that's what I'll check them with on my NUC.
