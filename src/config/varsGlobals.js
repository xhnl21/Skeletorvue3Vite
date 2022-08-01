// datos locales y token
window.getDataSession = localStorage.getItem("getDataSession"); // token master
window.localtoken = localStorage.getItem("accessToken"); // token billing
window.userType = localStorage.getItem("userType"); // user_type
window.getStart = localStorage.getItem("start"); // start
window.oauthM = localStorage.getItem("oauthM"); // oauth_m

if(!localStorage.getItem("accessWeb")) {
    localStorage.setItem("accessWeb", 0);
}
window.accessWeb = localStorage.getItem("accessWeb") || "0";
window.emailVerify = true;
if(!localStorage.getItem("versionCache")) {
    localStorage.setItem("versionCache", null);
}
