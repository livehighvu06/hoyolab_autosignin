async function checkSignIn(game) {
  const signInInfo = await signIn(game.baseURL, game.actId);
  const totalDays = await getUserSignInInfo(game.userInfo);
  const todayAward = await getAward(totalDays, game.awardList);
  signInNotify(totalDays, todayAward, signInInfo);
}

function checkSignInStarRail() {
  checkSignIn(games.starrail);
}

function checkSignInZZZ() {
  checkSignIn(games.zzz);
}
