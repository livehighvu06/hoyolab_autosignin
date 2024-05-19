async function checkSignIn() {
  const signInInfo = await signIn();
  const totalDays = await getUserSignInInfo();
  const todayAward = await getAward(totalDays);
  signInNotify(totalDays, todayAward, signInInfo);
}
