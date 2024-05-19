// 簽到
async function signIn() {
  const url = "https://sg-public-api.hoyolab.com/event/luna/os/sign";
  const raw = {
    act_id: "用戶",
    lang: "zh-tw",
  };
  const headers = {
    "Content-Type": "application/json",
    Cookie: "ltmid_v2=用戶; ltoken_v2=用戶; ltuid_v2=用戶",
  };
  const requestOptions = {
    method: "POST",
    headers: headers,
    payload: JSON.stringify(raw),
  };
  const result = await makeRequest(url, requestOptions);
  console.log(result);
  return result;
}
