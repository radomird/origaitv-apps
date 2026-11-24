# origaitv-apps

The apps that come with [OrigaiTV](https://github.com/radomird/origaitv-os), the world's first open-source agentic TV OS. Powered by [Omarchy](https://omarchy.org).

If you run OrigaiTV, this is where the apps in _Apps_ on your TV come from. If you write code, it's also the place to see how an OrigaiTV app is put together.

## What you get

Right now there are fifteen. Six are for watching:

- **Disney+.** Disney+'s own site on the TV. You sign in from your phone, with its password manager. Then you can search, ask for something by name, and pick up where you left off from its tile. Your phone's arrows get you around Disney+'s pages. It opens on whichever Disney+ profile you're signed in to.
- **HBO Max.** HBO Max's own site on the TV, the same way: sign in from your phone, search, ask for an episode by name and season, and pick up where you left off. HBO Max asks who's watching on its own page, and your phone's arrows pick.
- **Prime Video.** Prime Video's own site on the TV, the same way. On Linux, Prime Video plays in SD. It picks any season from the series' own season list, and Prime Video asks who's watching on its own page.
- **Jellyfin.** Your Jellyfin films and shows on the TV. Search, open something, and pick up where you left off.
- **Plex.** Your Plex server's own web app on the TV, signed in with your Plex account. Search and picking up where you left off are coming soon.
- **Immich.** Your Immich photos on the TV. Search your albums and open one.

To add one, open _Apps_ on the TV and pick it. That's it.

Disney+, HBO Max and Prime Video also work with New this week on your TV. Pick a title there and its app opens on that title's own page, ready for you to press play.

Netflix, YouTube and YouTube Kids are coming soon.

### Games

The other nine are for games, one for each game platform Omarchy has:

- **Steam.** Steam Big Picture, full screen. Go back to home and your game keeps running. To quit it, hold OK on its tile and pick Quit. If Steam isn't on the box yet, adding the app installs it, and you sign in right on the TV.
- **RetroArch.** Classic consoles, for the games you already own.
- **Moonlight.** Games streamed from your own PC. It's already on your TV, so adding it just puts it on home.
- **Xbox Cloud Gaming.** Xbox games streamed from the cloud, on Xbox's own site.
- **GeForce NOW.** NVIDIA's own app. It streams the PC games you own from NVIDIA's cloud.
- **Minecraft.** Minecraft's own launcher.
- **Lutris.** Windows games, and games from other stores.
- **Heroic.** Your Epic, GOG and Amazon games.
- **Battle.net.** Blizzard's games. The first time you open it, it runs Battle.net's own setup.

Minecraft, Lutris, Heroic and Battle.net are made for a computer, so you'll need a mouse and keyboard for them.

You add a game in _Settings_, under _Home and apps_, then _Games_, or from _Add an app_ in _Apps_. Adding one installs it, and you can add a few at once. Removing one leaves your games and saves where they are.

## Your passwords stay yours

Jellyfin, Immich and Plex only talk to the server you point them at (and Plex to its own sign-in page). Disney+, HBO Max and Prime Video only open their own sites (and Prime Video sends you to Amazon's own page to sign in). Either way, you sign in on that site's own page, on your TV, and the box never keeps your password.

Disney+, HBO Max and Prime Video also turn down their sites' non-essential cookies for you. Each one presses its own site's Reject All or Decline when the cookie banner comes up, so the banner isn't in your way while you sign in.

Steam is just Steam, and most of the other game apps work the same way. The box starts each one like any other program, and the app itself doesn't talk to anything. Where there's a sign-in, it's the platform's own, in its own window on the TV. Xbox Cloud Gaming is the one website: it only opens Xbox's own site, and you sign in on its page.

## How your box gets the apps

Every time an app changes here, CI builds a fresh list of apps (`index.json`), signs it with OrigaiTV's key, and puts it in this repo's `index` release.

Your box downloads that list and checks the signature, so it knows the list really came from OrigaiTV. Then it downloads the app at the exact commit the list names, checks that it follows OrigaiTV's app rules, and only then runs it. Updating one app never touches the others.

## For developers

Each app is a folder in `apps/` with a `manifest.json` (what the app is and what it's allowed to reach), its code, and its test data.

To run every check on your machine:

```
test/run
```

That's what CI runs on a pull request:

- the basic checks every OrigaiTV repo has: no em dashes, no secrets, no streaming service named outside its own app's folder, and clean shell scripts
- type checks against the app rules in [origaitv-os](https://github.com/radomird/origaitv-os)
- each app against its test data (replies recorded from its real server, or pages made by hand), in a real Chromium with no network
- a real install, from a test list signed with a throwaway key
- a check that every app you changed has a newer version in its manifest

Steam and the other game apps don't talk to a server, so there's nothing to record for them. Their tests just make sure each one follows the rules and doesn't try anything else. Xbox Cloud Gaming's tests open one small page I made by hand, at Xbox's address.

Disney+ doesn't have a server you can run either. Like every streaming app here, I write it by hand against pages I saved from my own signed-in sessions, and those pages stay private. So its tests use small pages I made by hand, at Disney+'s addresses, with only what the app reads. The tests press your phone's arrows in them too.

To record fresh test data, push a branch named `record/jellyfin`, `record/immich` or `record/plex`. CI starts the service's official Docker image, records new replies, and pushes them back to your branch. Each app's `fixtures` folder has a short README about what's in it.

## What you won't find here

Anything for Spotify. And the apps you make on your box stay there.

Each streaming app keeps its service's addresses, and the parts of its pages it reads, in its own folder. Nothing else in this repo has them.

## Icons

Each app brings its own icon, `icon.svg` in its folder, so its tile shows its logo from the first look at home, before the app has ever opened. Coming soon: a web app will swap it for the icon its own page shows, the first time it opens. An app that runs as its own program keeps the one here.

I didn't draw these. Each one is its owner's own logo, taken from a collection that keeps them tidy:

| App | Where it's from | Licence | What I changed |
| --- | --- | --- | --- |
| [Battle.net](apps/battlenet/icon.svg) | [Simple Icons](https://github.com/simple-icons/simple-icons/blob/16.38.1/icons/battledotnet.svg) | CC0 | white on its blue |
| [Disney+](apps/disneyplus/icon.svg) | [selfh.st icons](https://github.com/selfhst/icons/blob/df07d93a4b9e1c3930007971a1dfa6203ea02aea/svg/disney-plus-light.svg) | CC BY 4.0 | on a dark blue square |
| [GeForce NOW](apps/geforcenow/icon.svg) | [selfh.st icons](https://github.com/selfhst/icons/blob/df07d93a4b9e1c3930007971a1dfa6203ea02aea/svg/nvidia.svg) | CC BY 4.0 | nothing |
| [HBO Max](apps/hbomax/icon.svg) | [selfh.st icons](https://github.com/selfhst/icons/blob/df07d93a4b9e1c3930007971a1dfa6203ea02aea/svg/hbo-max-light.svg) | CC BY 4.0 | on a black square |
| [Heroic](apps/heroic/icon.svg) | [Simple Icons](https://github.com/simple-icons/simple-icons/blob/16.38.1/icons/heroicgameslauncher.svg) | CC0 | white on its blue |
| [Immich](apps/immich/icon.svg) | [selfh.st icons](https://github.com/selfhst/icons/blob/df07d93a4b9e1c3930007971a1dfa6203ea02aea/svg/immich.svg) | CC BY 4.0 | nothing |
| [Jellyfin](apps/jellyfin/icon.svg) | [selfh.st icons](https://github.com/selfhst/icons/blob/df07d93a4b9e1c3930007971a1dfa6203ea02aea/svg/jellyfin.svg) | CC BY 4.0 | nothing |
| [Lutris](apps/lutris/icon.svg) | [Simple Icons](https://github.com/simple-icons/simple-icons/blob/16.38.1/icons/lutris.svg) | CC0 | white on its orange |
| [Minecraft](apps/minecraft/icon.svg) | [selfh.st icons](https://github.com/selfhst/icons/blob/df07d93a4b9e1c3930007971a1dfa6203ea02aea/svg/minecraft.svg) | CC BY 4.0 | nothing |
| [Moonlight](apps/moonlight/icon.svg) | [Moonlight's own repo](https://github.com/moonlight-stream/moonlight-qt/blob/v6.2.0/app/res/moonlight.svg) | GPL-3.0, like Moonlight | nothing |
| [Plex](apps/plex/icon.svg) | [selfh.st icons](https://github.com/selfhst/icons/blob/df07d93a4b9e1c3930007971a1dfa6203ea02aea/svg/plex.svg) | CC BY 4.0 | nothing |
| [Prime Video](apps/primevideo/icon.svg) | [selfh.st icons](https://github.com/selfhst/icons/blob/df07d93a4b9e1c3930007971a1dfa6203ea02aea/svg/amazon-prime-video.svg) | CC BY 4.0 | nothing |
| [RetroArch](apps/retroarch/icon.svg) | [Simple Icons](https://github.com/simple-icons/simple-icons/blob/16.38.1/icons/retroarch.svg) | CC0 | white on black |
| [Steam](apps/steam/icon.svg) | [selfh.st icons](https://github.com/selfhst/icons/blob/df07d93a4b9e1c3930007971a1dfa6203ea02aea/svg/steam.svg) | CC BY 4.0 | nothing |
| [Xbox Cloud Gaming](apps/xboxcloud/icon.svg) | [selfh.st icons](https://github.com/selfhst/icons/blob/df07d93a4b9e1c3930007971a1dfa6203ea02aea/svg/xbox.svg) | CC BY 4.0 | nothing |

Where a logo is one colour, or too dark to see on a dark TV, I put it on a rounded square so it reads on any theme. The [selfh.st icons](https://github.com/selfhst/icons) are under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [Simple Icons](https://github.com/simple-icons/simple-icons) under [CC0](https://creativecommons.org/publicdomain/zero/1.0/), and Moonlight's under [GPL-3.0](https://github.com/moonlight-stream/moonlight-qt/blob/v6.2.0/LICENSE). The logos themselves are still their owners' trademarks (see below).

## Whose names these are

Disney+, Netflix, Prime Video, HBO Max, YouTube, Steam, Xbox, GeForce NOW, Minecraft, Battle.net and the other names here are trademarks of their owners. I only name them, and show their logos, to say which services and games the apps work with. The apps aren't made or endorsed by any of them.

## Something's broken?

A streaming service changes its pages now and then, and an app here can stop finding its way around them. When that happens the tile still opens the service's site. [Tell me](https://github.com/radomird/origaitv-apps/issues/new/choose) which app and what you pressed, and I'll fix it. For a security problem, please [tell me privately](https://github.com/radomird/origaitv-apps/security/advisories/new) first.

## License

MIT, like Omarchy. OrigaiTV isn't made or endorsed by the Omarchy project.
