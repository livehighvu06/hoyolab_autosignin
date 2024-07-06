const headers = {
  "Content-Type": "application/json",
  Cookie: "ltmid_v2=你的Token; ltoken_v2=你的Token; ltuid_v2=你的Token",
};

const requestOptions = (method, payload) => ({
  method,
  headers,
  redirect: "follow",
  payload: payload ? JSON.stringify(payload) : null,
});

// 遊戲資訊
const games = {
  zzz: {
    awardList:
      "https://sg-act-nap-api.hoyolab.com/event/luna/zzz/os/home?lang=zh-tw&act_id=你的ID",
    baseURL: "https://sg-act-nap-api.hoyolab.com/event/luna/zzz/os/sign",
    actId: "你的ID",
    userInfo:
      "https://sg-act-nap-api.hoyolab.com/event/luna/zzz/os/info?lang=zh-tw&act_id=你的ID",
  },
  starrail: {
    awardList:
      "https://sg-public-api.hoyolab.com/event/luna/os/home?lang=zh-tw&act_id=你的ID",
    baseURL: "https://sg-public-api.hoyolab.com/event/luna/os/sign",
    actId: "你的ID",
    userInfo:
      "https://sg-public-api.hoyolab.com/event/luna/os/info?lang=zh-tw&act_id=你的ID",
  },
};
