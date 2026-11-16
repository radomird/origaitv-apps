# Battle.net test data

This is what the Battle.net app's tests use (`contract.json`).

There's nothing recorded here. Battle.net has no Linux package. So the box installs umu-launcher, which runs Windows programs, and starts `origaitv-battlenet` from the `exec` line in the manifest. That's OrigaiTV's own launcher. The first time, it runs Battle.net's own setup. After that, it opens Battle.net. The app has no page and doesn't talk to a server.

So the tests check that the app follows OrigaiTV's rules for an official app, that opening it doesn't do or ask for anything, and that it can't be asked to do anything else.

Battle.net's setup and signing in are its own, on the TV, and so are the games.

The rest needs Battle.net on an installed box: that adding the app installs it, that the first open runs the setup, and that holding the guide button gets you home. Battle.net is made for a mouse and keyboard, so that's what I'll check it with on my NUC.
