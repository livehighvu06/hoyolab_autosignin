// 取得目前登入幾天
async function getUserSignInInfo() {
  const url =
    "https://sg-public-api.hoyolab.com/event/luna/os/info?lang=zh-tw&act_id=用戶";
  const headers = {
    Cookie: "ltmid_v2=用戶; ltoken_v2=用戶; ltuid_v2=用戶",
  };
  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  const result = await makeRequest(url, requestOptions);
  return result.data.total_sign_day;
}
// 取得今日獎品
async function getAward(totalDays = 1) {
  const url =
    "https://sg-public-api.hoyolab.com/event/luna/os/home?lang=zh-tw&act_id=用戶";
  const headers = {
    Cookie: "ltmid_v2=用戶; ltoken_v2=用戶; ltuid_v2=用戶",
  };
  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  const result = await makeRequest(url, requestOptions);
  return result.data.awards[totalDays - 1];
}

// 取得目前的開拓力
async function getCurrentStamina() {
  const url =
    "https://bbs-api-os.hoyolab.com/game_record/hkrpg/api/note?server=prod_official_asia&role_id=用戶ID";
  const headers = {
    Cookie: "用戶",
    Ds: "用戶",
    "X-Rpc-Client_type": "5",
    "X-Rpc-Device_fp": "用戶",
    "X-Rpc-Device_id": "用戶",
    "X-Rpc-Platform": "5",
    "X-Rpc-App_version": "1.5.0",
    Ds: "用戶",
  };
  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  const result = await makeRequest(url, requestOptions);
  const stamina = result.data.current_stamina;
  const recoverTime = result.data.stamina_recover_time;

  return { stamina, recoverTime };
}
