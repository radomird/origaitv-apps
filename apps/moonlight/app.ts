// Moonlight on the TV: games streamed from your own PC. Moonlight is already
// on every box, so adding the app puts it on home. The box starts it from
// this manifest's exec, since an app's worker starts no processes.
//
// Pairing with your PC and picking a game are Moonlight's own, on the TV.

import type { TvApp } from "../../.origaitv-os/apps/contract/contract.ts";

const app: TvApp = {
  id: "origaitv.moonlight",

  // The box opens Moonlight itself, so there's nothing for the app to do.
  async launch() {},
};

export default app;
