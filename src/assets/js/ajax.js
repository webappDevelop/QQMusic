import Axios from 'axios'
import Jsonp from 'jsonp'

export default {
    params: {
        g_tk: 5381,
        uin: 0,
        format: 'json',
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5',
        needNewCode: 1
    },

    get(url, params = {}){
        var _this = this;

        return new Promise((resolve, reject) => {
            Axios.get(url,{
                params: Object.assign(params,_this.params)
            }).then(resolve(response))
              .catch(reject(err));
        });
    },

    post(url, params = {}){
        var _this = this;
        
        return new Promise((resolve, reject) => {
            Axios.get(url, Object.assign(params,_this.params))
                .then(resolve(response))
                .catch(reject(err));
        });     
    },

    jsonp(url, options = {param: 'jsonpCallback'}){
        url = url + (url.indexOf('?') == -1 ? '?' : '&') + this.serializeParam(this.params);
        return new Promise((resolve, reject) => {
            Jsonp(url,options,(err,data) => {
                if(err){
                    reject(err);
                }else {
                    resolve(data);
                }
            })
        });
    },

    serializeParam(params){
        var serialParams = '';
        for(var name in params){
            serialParams += `&${name}=${params[name]}`
        }
        return serialParams.slice(1);
    }
}

