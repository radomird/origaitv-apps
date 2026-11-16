// Minecraft on the TV: Minecraft's own launcher, which signs you in and
// starts the game. The box starts it from this manifest's exec, since an
// app's worker starts no processes.
//
// Signing in and the game are Minecraft's own, on the TV. Both are made for a
// mouse and keyboard, and the app's description says so.

import type { TvApp } from "../../.origaitv-os/apps/contract/contract.ts";

const app: TvApp = {
  id: "origaitv.minecraft",

  // The box opens Minecraft itself, so there's nothing for the app to do.
  async launch() {},
};

export default app;
