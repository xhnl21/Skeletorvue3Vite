var jobs = "/jobs/";
export default {
    get () {
        return "/bpi/currentprice.json";
    },
    add (id) {
        return jobs+"getTemplateByID/" + id;
    },
    del (id) {
        return jobs+"delJobs/" + window.master_client + "/" + window.localorgdata + "/" + id;
    },
    jobsPdf (idInvoice) {
        return window.urlbase + "api/v2/invoice/pdf/" + idInvoice + "/" + window.localAccountID + "/" + localStorage.getItem("oauth_m");
    }
};
