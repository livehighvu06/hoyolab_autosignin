async function signIn(baseURL, actId) {
  const payload = { act_id: actId, lang: "zh-tw" };
  const result = await sendRequest(baseURL, requestOptions("POST", payload));
  console.log(result);
  return result;
}
