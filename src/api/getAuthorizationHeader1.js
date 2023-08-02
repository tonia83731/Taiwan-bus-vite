

const getAuthorizationHeader = async() => {
  const parameter = {
    grant_type: "client_credentials",
    client_id: "a83731americacowchang-8d4ab7ca-46d8-4406",
    client_secret: "73fe99ac-7cb7-4bc9-833b-9a10ce04a30e",
  };

  let auth_url =
    `https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token`;
  try {
    let res = await axios({
      method: "POST",
      url: auth_url,
      data: qs.stringify(parameter),
      headers: { "content-type": "application/x-www-form-urlencoded" },
    });
    let accesstoken = res.data;
    return {
      authorization: `Bearer ${accesstoken.access_token}`,
    }
  } catch (err) {
    return err;
  }
};

export default getAuthorizationHeader;

// https://ithelp.ithome.com.tw/articles/10258164
// https://hackmd.io/1nMqecIOQ266nTv9PnjSQw?view#API-%E4%BB%8B%E6%8E%A5%E6%96%87%E7%AB%A0%E6%95%99%E5%AD%B8


// https://tdx.transportdata.tw/api-service/swagger#/