// Heroic on the TV: the Heroic Games Launcher, for your Epic, GOG and Amazon
// games. The box starts it from this manifest's exec, since an app's worker
// starts no processes.
//
// Signing in to each store and installing games are Heroic's own, on the TV.
// Its window is made for a mouse and keyboard, and the app's description
// says so.

import type { TvApp } from "../../.origaitv-os/apps/contract/contract.ts";

const app: TvApp = {
  id: "origaitv.heroic",

  // The box opens Heroic itself, so there's nothing for the app to do.
  async launch() {},
};

export default app;
