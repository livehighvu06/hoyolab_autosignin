// 簽到通知
async function signInNotify(totalDays, todayAward, signInInfo) {
  const url = "https://notify-api.line.me/api/notify";
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Bearer 你的Token",
  };
  const raw = {
    message: `${"\n"}${
      signInInfo.message
    }${"\n"}本月已登入${totalDays}天，最近獎品：${todayAward.name}x${
      todayAward.cnt
    }`,
    imageFullsize: todayAward.icon,
    imageThumbnail: todayAward.icon,
    stickerPackageId: "11537",
    stickerId: "52002734",
  };
  const requestOptions = {
    method: "POST",
    headers: headers,
    payload: raw,
    redirect: "follow",
  };
  await sendRequest(url, requestOptions);
}
