async function sendRequest(url, requestOptions) {
  try {
    const response = await UrlFetchApp.fetch(url, requestOptions);
    return JSON.parse(response.getContentText());
  } catch (error) {
    console.error("錯誤：", error);
    return null;
  }
}
