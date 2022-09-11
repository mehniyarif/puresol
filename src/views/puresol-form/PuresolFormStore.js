import {defineStore} from "pinia";
import axios from "@/axios";

export const puresolFormStore = defineStore('customFields', {
    state: () => ({ customFields: [] }),
    getters: {},
    actions: {
        fetchCustomFields() {
            return new Promise((resolve, reject) => {
                axios
                    .get("/custom_fields/")
                    .then(response => {
                        this.customFields = response.data
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
    },
})
