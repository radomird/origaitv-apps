// RetroArch on the TV: RetroArch's own menu, full screen, for playing the
// classic console games you own. The box starts it from this manifest's exec,
// since an app's worker starts no processes.
//
// Your games, RetroArch's cores and its settings are its own, on the TV.

import type { TvApp } from "../../.origaitv-os/apps/contract/contract.ts";

const app: TvApp = {
  id: "origaitv.retroarch",

  // The box opens RetroArch itself, so there's nothing for the app to do.
  async launch() {},
};

export default app;
