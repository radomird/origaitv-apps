// Lutris on the TV: Lutris's own window, where you add games from other
// stores and play Windows games. The box starts it from this manifest's exec,
// since an app's worker starts no processes.
//
// Signing in to a store and installing games are Lutris's own, on the TV.
// Its window is made for a mouse and keyboard, and the app's description
// says so.

import type { TvApp } from "../../.origaitv-os/apps/contract/contract.ts";

const app: TvApp = {
  id: "origaitv.lutris",

  // The box opens Lutris itself, so there's nothing for the app to do.
  async launch() {},
};

export default app;
