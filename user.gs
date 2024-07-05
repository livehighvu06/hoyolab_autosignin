// 取得目前登入幾天
async function getUserSignInInfo(userInfoURL) {
  const result = await sendRequest(userInfoURL, requestOptions("GET"));
  return result.data.total_sign_day;
}

// 取得今日獎品
async function getAward(totalDays, awardListURL) {
  const result = await sendRequest(awardListURL, requestOptions("GET"));
  return result.data.awards[totalDays - 1];
}
