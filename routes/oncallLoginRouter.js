const express = require('express');
const router = express.Router();
const validator = require('../middleware/validator');
const userController = require('../controller/user.controller');
const redir1 = "/oncall.identity/connect/authorize?client_id=OnCall&redirect_uri=http://localhost:3000/oncall/&response_type=code id_token&scope=openid profile oncall-auth&state=OpenIdConnect.AuthenticationProperties=YrLz1Uz3T2eE4BBg_SGlx7Zu0n0g11BT93lVQ3LLo6ElqIvsiTmk3yjcOTR1JV4yB-B7A5mBDQmG0i2BprD0lxLOqRDrtV9rQjf-XA1ahckkd8HBjzcAGwMZcU8ogMOthvwrg_BJ-CuusER2m_xvbty0YnSDpFjHUjwHWSXZy5K9fiamSyq_uHyLFVu5eGwUZ8UPMjC-x3SUbxxyXQfoOrnVgcAYRSmFZqv62_LjEmrpTR5nwXB9BMK-erO9yaau&response_mode=form_post&nonce=638048922273116310.ZWUzYmUzOGYtNjMxYi00MWNkLWFmYzctZWNkNDkyMDc2NWY1ZTkwNWYxYzMtY2U0MC00Y2JjLTkzYmMtODk3Y2Q0N2FmZGQ2&ui_locales=en-gb&x-client-SKU=ID_NET461&x-client-ver=6.8.0.0";
const redir2 = "/oncall.identity/Account/Login?ReturnUrl=/oncall.identity/connect/authorize/callback?client_id=OnCall&redirect_uri=https://localhost:3000/oncall/&response_type=code id_token&scope=openid profile% oncall-auth&state=OpenIdConnect.AuthenticationProperties=YrLz1Uz3T2eE4BBg_SGlx7Zu0n0g11BT93lVQ3LLo6ElqIvsiTmk3yjcOTR1JV4yB-B7A5mBDQmG0i2BprD0lxLOqRDrtV9rQjf-XA1ahckkd8HBjzcAGwMZcU8ogMOthvwrg_BJ-CuusER2m_xvbty0YnSDpFjHUjwHWSXZy5K9fiamSyq_uHyLFVu5eGwUZ8UPMjC-x3SUbxxyXQfoOrnVgcAYRSmFZqv62_LjEmrpTR5nwXB9BMK-erO9yaau&response_mode=form_post&nonce=638048922273116310.ZWUzYmUzOGYtNjMxYi00MWNkLWFmYzctZWNkNDkyMDc2NWY1ZTkwNWYxYzMtY2U0MC00Y2JjLTkzYmMtODk3Y2Q0N2FmZGQ2&ui_locales=en-gb&x-client-SKU=ID_NET461&x-client-ver=6.8.0.0";
const redir3 = "/oncall.identity/connect/authorize/callback?client_id=OnCall&redirect_uri=https://localhost:3000/oncall/&response_type=code id_token&scope=openid profile oncall-auth&state=OpenIdConnect.AuthenticationProperties%3DYrLz1Uz3T2eE4BBg_SGlx7Zu0n0g11BT93lVQ3LLo6ElqIvsiTmk3yjcOTR1JV4yB-B7A5mBDQmG0i2BprD0lxLOqRDrtV9rQjf-XA1ahckkd8HBjzcAGwMZcU8ogMOthvwrg_BJ-CuusER2m_xvbty0YnSDpFjHUjwHWSXZy5K9fiamSyq_uHyLFVu5eGwUZ8UPMjC-x3SUbxxyXQfoOrnVgcAYRSmFZqv62_LjEmrpTR5nwXB9BMK-erO9yaau&response_mode=form_post&nonce=638048922273116310.ZWUzYmUzOGYtNjMxYi00MWNkLWFmYzctZWNkNDkyMDc2NWY1ZTkwNWYxYzMtY2U0MC00Y2JjLTkzYmMtODk3Y2Q0N2FmZGQ2&ui_locales=en-gb&x-client-SKU=ID_NET461&x-client-ver=6.8.0.0";

const logoutRedir2 = "/oncall.identity/Account/Logout?logoutId=LOGOUTID";

const logger = require('../logger/api.logger');

const loginFormResponse = '<html>\
                  <body><script> \
                     const LOGIN_MODEL = {"allowRememberLogin":true,"enableLocalLogin":true,"externalProviders":[],"visibleExternalProviders":[],"isExternalLoginOnly":false,"externalLoginScheme":null,"labels":{"LI_WARNING":"Warning","LI_SYSTEM_USE_NOTIFICATION":"This is a restricted system. System usage may be monitored, recorded, and subject to audit. Any unauthorized use or access is strictly forbidden and may be subject to civil and/or criminal penalties. Use of this system indicates consent to monitoring and recording.","SPLASH_SCREEN_COPYRIGHT":"This program is protected by U.S. and international copyrights as described in the About Box.","LI_ACCEPT":"Accept","LI_USER_NAME":"Username","LI_PASSWORD":"Password","LI_REMEMBER_ME":"Remember Me","LI_CHANGE_PASSWORD":"Change Password after Login","LI_LOG_IN":"Log In"},"errorMessage":null,"displaySystemUseNotification":false,"username":"","password":"","rememberLogin":false,"returnUrl":"/oncall.identity/connect/authorize/callback?client_id=OnCall\u0026redirect_uri=https%3A%2F%2Flocalhost:3000%2Foncall%2F\u0026response_type=code%20id_token\u0026scope=openid%20profile%20oncall-auth\u0026state=OpenIdConnect.AuthenticationProperties%3D8_8_Rt7WFgTVrkBdDbqvOuTRe77EaB0wvGbQxeUArqGNPPASTwekYWZajsEZLP1czJNaqUzr7ZDQeQDSfO5rXJxz6vFLwUuPkWLkAwrPQQ8I3aCzPEFl35TXmiqcnu4Zqm0J2QadzyMKnVQAl1TlvihK0wBOuGMjvUObhNlP7K8OWNfOrbEXc5v0ESELNOzI3LFeUHKIiv01DD9gTC5Yic4SL20k7bLOudJi2MgDf29tyaMJyq0gMlDguXi9scb9\u0026response_mode=form_post\u0026nonce=638059329796022537.Nzg1ZWY4YzctYjk5Ny00OGVmLTk5MDctMjk3OTYzYzU3ZjBmN2FjNjJmMGMtMWQ4ZS00YTBiLTgxOTItYTlhYzY0MTU1Mzgw\u0026ui_locales=en-gb\u0026x-client-SKU=ID_NET461\u0026x-client-ver=6.8.0.0","changePassword":false};\
                     const antiForgery = "CfDJ8Mb7KLqKtGRBgJJsMBch2om2n8JkUY3rLmEnvQMWE3KIAMLsIzEIugZ6V2c9nXYuU3qclL4dxiYBiREEtY9EP5h4v_dVxg3y-ifNNFf3WLvOMxW1hndbmfqJZmVm9hJ5g99XTcc3G3yuaFS77DU2tzY";\
                  </script><form action="" method="POST"><input type="text" name="username"/ ><br /><input type="password" name="password" /><br /><input type="submit" />\
                  <input type="hidden" name="returnUrl" value="/oncall.identity/connect/authorize/callback?client_id=OnCall&redirect_uri=http%3A%2F%2Flocalhost:3000%2Foncall%2F&response_type=code%20id_token&scope=openid%20profile%20oncall-auth&state=OpenIdConnect.AuthenticationProperties%3Dk7-jYzE0t0Jhlv85H-n_dg4Z3l6GelHSWiJNJMNIV5VjVtOGXpcCHCpyUnu3-VqXePPwFv_CTpN5QqKBProClkmEIckl6lt5ZGqLMoMtvKT7BqMxga3Y4n047k5TvSMBIMsv8UfsrhRbsLxVQtdPHWLt-gR6u0v99NVXY35b3R8V36EOj_LXMSg8EWWUMKqRW1NHigXRRtXepmgYCzShjrdZfZwYAI7sypX0NhbSgzj5r68pow2ZHDscV2uib_67&response_mode=form_post&nonce=638059330476111617.YjU2YzM2ZWEtOGJiYS00ZmU0LWIwODUtZjBlZDNkMDJkMTE2Y2I3OTY3M2MtYTRkNS00Yjg5LWI1NDAtNGRmMmQyMzhmYTAz&ui_locales=en-gb&x-client-SKU=ID_NET461&x-client-ver=6.8.0.0" /><input type="hidden" name="__RequestVerificationToken" value="abc123" /></form>\
                  </body></html>';

const secondFormResponse = `<html><head><meta http-equiv='X-UA-Compatible' content='IE=edge' /><base target='_self'/></head><body><form method='post' action='http://localhost:3000/oncall/'><input type='hidden' name='code' value='8B0C578210BC14617147C20193014A4AD92F75FD8835B7B517346F5AEC704DBA' />
                            <input type='hidden' name='id_token' value='eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc2NjQ2RDkyNkE1ODZFRDk5RDREQzE0MEVGRUZCNEYyNDYwNjY5OTciLCJ4NXQiOiJkbVJ0a21wWWJ0bWRUY0ZBNy0tMDhrWUdhWmMiLCJ0eXAiOiJKV1QifQ.eyJuYmYiOjE2NzExMTIzNjksImV4cCI6MTY3MTExMjY2OSwiaXNzIjoiaHR0cHM6Ly9kYzEub25jYWxsLm1wc2NjLmxlaWRvcy5sb2NhbC9vbmNhbGwuaWRlbnRpdHkiLCJhdWQiOiJPbkNhbGwiLCJub25jZSI6IjYzODA2NzA5MTY4MjI0NzEwMC5PVGN4TWpJeVptWXRZV0ZrWWkwMFpEQmtMVGcxWW1RdE5tTTFaRGt3WWpGbFptVXdaVGhrTTJRM1pURXRNVGs1WmkwME9EZ3lMV0l6TXpFdE16ZG1ZalV3T1RneU1HSTAiLCJpYXQiOjE2NzExMTIzNjksImNfaGFzaCI6InpaMWRZYlVfRkllc214WWliTFEyRVEiLCJzX2hhc2giOiJqZVYtdnJjMF8td21MWThKMHV4Wk9nIiwic2lkIjoiMzBCQ0E0MDlDNkFEQzgxRTcyODUyMDExNzFGMkQ3NUIiLCJzdWIiOiIxIiwiYXV0aF90aW1lIjoxNjcxMTEyMzY5LCJpZHAiOiJsb2NhbCIsImlzQ2FkQXV0aGVudGljYXRpb24iOiJ0cnVlIiwiaXNQYXNzd29yZEV4cGlyZWQiOiJmYWxzZSIsInBhc3N3b3JkRXhwaXJpbmdTb29uIjoiZmFsc2UiLCJkYXlzQmVmb3JlUGFzc3dvcmRFeHBpcmVkIjoiIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiaGV4YWdvbmFkbWluIiwiZmFtaWx5X25hbWUiOiJBZG1pbiIsImdpdmVuX25hbWUiOiJIZXhhZ29uIiwibmFtZSI6IkhleGFnb24gQWRtaW4iLCJhbXIiOlsicHdkIl19.b5zagI6VROcpVWnjGgwT6XSlzjsSBDJebffZMjX-f2TGWBhhg_2RWrO9V_JTBL-CAykbDYoPcOSRs_RmdL703NMH2GTJAC6_8kfIwUfRmy8N621OfuQbFAdhq_u_DEwm49nsS2mAtMKW2tM13RNg_SBSXWX9LbshbDdiOky8D8l3LCecoBgy3DuorWkFVKxT6MrA2ZTrefqTAnTbb_7NrQuHZKUQAv34mCqXAbzUD2om_rBXwo5Jd2a2GTGPEpDCoGIFG87L846eulhQrEnEDS8LxKZEBVC-sfKW11oewYaClBzrTZqkSczKIK30BFGX5bJuxIxqbCy43YHkde_o0g' />
                            <input type='hidden' name='scope' value='openid profile oncall-auth' />
                            <input type='hidden' name='state' value='OpenIdConnect.AuthenticationProperties=60-1282Dkw5qsnk82rmx7p22pH8CCYr-BZXxZo2EHQlppKgI8BNpgm-PIjqV46wJ20aJdQJ7QJZGsuBkHLvX0g0v3AW4v8kt0qNQnXnTFeGhDvQ2bom7o08oEEal76yfhE4idaPmHUnrzdzFnKf_D1rnh1-CohXz7XTyGl89DXT4VYm_s1k6Z4Y3Sx4MCOSE7afP-6VEk2yWykz7CdHHmXbygKYdmOoN0RlP4qBkd3MjzzpprSTfVpDeXyJviIA3' />
                            <input type='hidden' name='session_state' value='a-NpZcuuIYlXHatLpYKcqsxeS8bvesBgY7yyu6BQEnM.A127498675C2F33B4AE7FB8605DAEDA4' />
                            <noscript><button>Click to continue</button></noscript></form><script>window.addEventListener('load', function(){document.forms[0].submit();});</script></body></html>`;

router.post('/Account/Login', validator('login'), (req, res, next) => {
    logger.info('Processing POST for Login');
    const { __RequestVerificationToken, username, password, returnUrl } = req.body;
    userController.loginUser(username, password, __RequestVerificationToken).then(() => {
    req.session.loggedIn = true;
    req.session.username = username;
    const rNum = Math.random().toString();
    const sessionId = rNum.substring(2, rNum.length);
    res.cookie('sessionId', sessionId, { maxAge: 90000, httpOnly: true });
    res.redirect(redir3)});
});

router.get('/connect/authorize/callback', (req,res) => {
    logger.info('/connect/authorize/callback');
    res.status(200).send(secondFormResponse);
});

router.post('/connect/authorize/callback', (req,res) => {
    logger.info('/connect/authorize/callback POST');
    res.status(200);
});

router.get('/connect/authorize', (req, res) => {
    logger.info('/connect/authorize path');
    res.redirect(redir2);
});

router.get('/Account/Login', (req, res) => {
    logger.info('Returning /Account/Login page details');
    res.status(200).send(loginFormResponse);
});

router.get('/connect/endsession', (req, res) => {
    logger.info('redir for logout 2');
    res.redirect(logoutRedir2);
});

router.get('/Account/Logout', (req,res) => {
    req.session.destroy();
    logger.info('final logout action');
    res.status(200).send('Logged out');
});

module.exports = router;