// leyenda //
// type = "get", "post", "delete", "put" ===>>> obligatorio
// token = si es una ruta protegida por session "true o false"
// upload = indica si se va a subir un documento "true o false"
// event = recibira metadato de la img
// url = es la ruta donde se hace peticiones ===>>> obligatorio
// data = normalmente se usa cuando se aplica "post" y "put"
// method = indica el nombre del metodo quien invoka la funtion de peticiones ===>>> obligatorio
const resquesAMixin = {
    methods: {
        resquesA (type, token, upload, event, url, data, method) {
            if (type !== "") {
                type = type.toLowerCase();
            }
            switch (type) {
            case "post":
                if (token === true) {
                    if (upload === true) {
                        const fileSendHeader = { headers: { "Content-Type": "multipart/form-data" } };
                        const formData = new FormData();
                        let cont = [];
                        for (const i in event.target.files) {
                            if (event.target.files.hasOwnProperty(i)) {
                                cont++;
                                formData.append("image" + cont, event.target.files[i]);
                            }
                        }
                        for (const [key, value] of Object.entries(data)) {
                            formData.append(key, value);
                        }
                        window.masterb
                            .post(url, formData, fileSendHeader)
                            .then((response) => {
                                this.array ("ReturnHttp", method, response);
                            })
                            .catch((error) => {
                                this.array ("ReturnHttp", method, error);
                            });
                    } else {
                        window.masterb
                            .post(url, data)
                            .then((response) => {
                                this.array ("ReturnHttp", method, response);
                            })
                            .catch((error) => {
                                this.array ("ReturnHttp", method, error);
                            });
                    }
                } else {
                    if (upload === true) {
                        const fileSendHeader = { headers: { "Content-Type": "multipart/form-data" } };
                        const formData = new FormData();
                        let cont = [];
                        for (const i in event.target.files) {
                            if (event.target.files.hasOwnProperty(i)) {
                                cont++;
                                formData.append("image" + cont, event.target.files[i]);
                            }
                        }
                        for (const [key, value] of Object.entries(data)) {
                            formData.append(key, value);
                        }
                        window.mastera
                            .post(url, formData, fileSendHeader)
                            .then((response) => {
                                this.array ("ReturnHttp", method, response);
                            })
                            .catch((error) => {
                                this.array ("ReturnHttp", method, error);
                            });
                    } else {
                        window.mastera
                            .post(url, data)
                            .then((response) => {
                                this.array ("ReturnHttp", method, response);
                            })
                            .catch((error) => {
                                this.array ("ReturnHttp", method, error);
                            });
                    }
                }
                break;
            case "get":
                if (token === true) {
                    window.masterb
                        .get(url)
                        .then((response) => {
                            this.array ("ReturnHttp", method, response);
                        })
                        .catch((error) => {
                            this.array ("ReturnHttp", method, error);
                        });
                } else {
                    window.mastera
                        .get(url)
                        .then((response) => {
                            this.array ("ReturnHttp", method, response);
                        })
                        .catch((error) => {
                            this.array ("ReturnHttp", method, error);
                        });
                }
                break;
            case "put":
                if (token === true) {
                    if (upload === true) {
                        const fileSendHeader = { headers: { "Content-Type": "multipart/form-data" } };
                        const formData = new FormData();
                        let cont = [];
                        for (const i in event.target.files) {
                            if (event.target.files.hasOwnProperty(i)) {
                                cont++;
                                formData.append("image" + cont, event.target.files[i]);
                            }
                        }
                        for (const [key, value] of Object.entries(data)) {
                            formData.append(key, value);
                        }
                        window.masterb
                            .put(url, formData, fileSendHeader)
                            .then((response) => {
                                this.array ("ReturnHttp", method, response);
                            })
                            .catch((error) => {
                                this.array ("ReturnHttp", method, error);
                            });
                    } else {
                        window.masterb
                            .put(url, data)
                            .then((response) => {
                                this.array ("ReturnHttp", method, response);
                            })
                            .catch((error) => {
                                this.array ("ReturnHttp", method, error);
                            });
                    }
                } else {
                    if (upload === true) {
                        const fileSendHeader = { headers: { "Content-Type": "multipart/form-data" } };
                        const formData = new FormData();
                        let cont = [];
                        for (const i in event.target.files) {
                            if (event.target.files.hasOwnProperty(i)) {
                                cont++;
                                formData.append("image" + cont, event.target.files[i]);
                            }
                        }
                        for (const [key, value] of Object.entries(data)) {
                            formData.append(key, value);
                        }
                        window.mastera
                            .put(url, formData, fileSendHeader)
                            .then((response) => {
                                this.array ("ReturnHttp", method, response);
                            })
                            .catch((error) => {
                                this.array ("ReturnHttp", method, error);
                            });
                    } else {
                        window.mastera
                            .put(url, data)
                            .then((response) => {
                                this.array ("ReturnHttp", method, response);
                            })
                            .catch((error) => {
                                this.array ("ReturnHttp", method, error);
                            });
                    }
                }
                break;
            case "delete":
                if (token === true) {
                    window.masterb
                        .delete(url, data)
                        .then((response) => {
                            this.array ("ReturnHttp", method, response);
                        })
                        .catch((error) => {
                            this.array ("ReturnHttp", method, error);
                        });
                } else {
                    window.mastera
                        .delete(url, data)
                        .then((response) => {
                            this.array ("ReturnHttp", method, response);
                        })
                        .catch((error) => {
                            this.array ("ReturnHttp", method, error);
                        });
                }
                break;
            default:
                this.array ("ReturnHttp", method, "type no exit");
            }
        },
        array (name, method, data ) {
            const k = [];
            k.push({ function:name, method:method, data:data });
            this.$store.commit("SethttpResques", k);
        }
    }
};
export default resquesAMixin;