# GeForce NOW test data

This is what the GeForce NOW app's tests use (`contract.json`).

There's nothing recorded here. GeForce NOW is a normal program that comes as a flatpak: the box starts it with `flatpak run`, from the `exec` line in its manifest. The app has no page and doesn't talk to a server.

So the tests check that the app follows OrigaiTV's rules for an official app, that opening it doesn't do or ask for anything, and that it can't be asked to do anything else.

Signing in is GeForce NOW's own, on the TV, and so are your library and the games.

The rest needs GeForce NOW on an installed box: that adding the app installs it, that it opens and streams a game, and that holding the guide button gets you home. I'll check that on my NUC with a controller.
