// GeForce NOW on the TV: NVIDIA's own app, which streams the PC games you own
// from NVIDIA's servers. It comes as a flatpak, so the box starts it with
// flatpak run, from this manifest's exec, since an app's worker starts no
// processes.
//
// Signing in, the library and the games are GeForce NOW's own, on the TV.

import type { TvApp } from "../../.origaitv-os/apps/contract/contract.ts";

const app: TvApp = {
  id: "origaitv.geforcenow",

  // The box opens GeForce NOW itself, so there's nothing for the app to do.
  async launch() {},
};

export default app;
