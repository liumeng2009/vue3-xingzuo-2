import axios from 'axios'
import { appKey } from '@/config/config.js'

function axiosGet(options) {
    axios(options.url + '&key=' + appKey)
    .then(res => {
        options.success(res);
    })
    .catch(error => {
        options.error(error);
    })
}

export {
    axiosGet
}