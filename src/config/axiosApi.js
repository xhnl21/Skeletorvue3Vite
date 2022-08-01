// conexiones
import Servers from "./urlServers";
import "./varsGlobals";
import axios from "axios";
const host = Servers;
const cnx = "test"; // valores = produccion | test | dev
window.urlmaster = host.urlmaster[cnx];
window.urldashboard = host.urldashboard[cnx];
window.urlbaselogin = host.urlbaselogin[cnx];
window.urlweb = host.urlweb[cnx];

window.masters = axios.create({
    baseURL: window.urlmaster + "api/v2/"
});

window.master = axios.create({
    baseURL: window.urlmaster,
    headers: {
        "Content-type": "application/json"
    }
});

window.mastera = axios.create({
    baseURL: window.urldashboard,
    headers: {
        "Content-type": "application/json"
    }
});

window.masterb = axios.create({
    baseURL: window.urlmaster + "api/r2",
    headers: {
        common: {
            Authorization: "Bearer " + window.localtokenR,
            oauthR: localStorage.getItem("oauthR")
        },
        post: { "Content-Type": "application/json" }
    }
});
