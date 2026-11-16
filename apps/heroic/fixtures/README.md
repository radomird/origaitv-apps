# Heroic test data

This is what the Heroic app's tests use (`contract.json`).

There's nothing recorded here. Heroic is a normal program: the box starts it from the `exec` line in its manifest. The app has no page and doesn't talk to a server.

So the tests check that the app follows OrigaiTV's rules for an official app, that opening it doesn't do or ask for anything, and that it can't be asked to do anything else.

Signing in to Epic, GOG and Amazon, installing games and playing them are Heroic's own, on the TV.

The rest needs Heroic on an installed box: that adding the app installs it, that it opens, and that holding the guide button gets you home. Heroic is made for a mouse and keyboard, so that's what I'll check it with on my NUC.
