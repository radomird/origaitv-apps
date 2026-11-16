# Xbox Cloud Gaming test data

This is what the Xbox Cloud Gaming app's tests use (`contract.json`).

Xbox Cloud Gaming has no server you can run, so there's nothing to record. `pages/play.html` is a small stand-in I made by hand, at the site's own address. It isn't a copy of Xbox's page. It's empty, since the app only opens the page and reads nothing on it.

So the tests check that the app follows OrigaiTV's rules for an official app, that opening it takes its page to the site, and that it can't be asked to do anything else.

You sign in with your Microsoft account on the site's own page, on the TV. Picking and playing a game are the site's own too.

The rest needs the real site on an installed box: that it opens, that a game plays with a controller, and that holding the guide button gets you home. I'll check that on my NUC.
