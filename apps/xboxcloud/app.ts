// Xbox Cloud Gaming on the TV: Xbox's own cloud gaming site in the TV's
// Chromium, played with a controller. You sign in with your Microsoft account
// on the site's own page, and pick a game there.
//
// The app only takes its page to the site. Searching, signing in and the
// games are the site's own, on the TV.

import type { AppContext, TvApp } from "../../.origaitv-os/apps/contract/contract.ts";

const HOME = "https://www.xbox.com/play";

function page(ctx: AppContext) {
  if (!ctx.page) throw new Error("Open Xbox Cloud Gaming first");
  return ctx.page;
}

const app: TvApp = {
  id: "origaitv.xboxcloud",

  async launch(ctx) {
    await page(ctx).goto(HOME);
  },
};

export default app;
