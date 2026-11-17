// Battle.net on the TV: Blizzard's own launcher, which runs with Wine through
// umu-launcher, since Battle.net has no Linux package. The box installs
// umu-launcher and starts origaitv-battlenet, OrigaiTV's own launcher, from
// this manifest's exec, since an app's worker starts no processes. The first
// time, that runs Battle.net's own setup. After that, it opens Battle.net.
//
// With no package of its own to take an icon from, its tile shows the icon
// Omarchy keeps for its own Battle.net, read on the box. No file of
// Blizzard's is in this repo.
//
// Signing in and the games are Battle.net's own, on the TV. Its window is
// made for a mouse and keyboard, and the app's description says so.

import type { TvApp } from "../../.origaitv-os/apps/contract/contract.ts";

const app: TvApp = {
  id: "origaitv.battlenet",

  // The box opens Battle.net itself, so there's nothing for the app to do.
  async launch() {},
};

export default app;
