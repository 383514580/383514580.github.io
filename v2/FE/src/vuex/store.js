import Vue from 'vue'
import Vuex from 'vuex'
import superagent from 'superagent'
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        list: [],
        detail: {}
    },
    mutations: {
        setError(state, info){
            state.error = info;
        },

        setList(state, json) {
            state.list = json;
        },

        setDetail(state, data) {
            state.detail = data;
        }
    },
    actions: {
        getList(context) {
            // context可能是store也可能是module
            // context.commit('setListLoader', true);
            return new Promise((resolve, reject) => {
                superagent.get('https://383514580.github.io/static/db/list.json')
                    .set('Accept', 'application/json')
                    .end(function(err, res) {
                        if (err) {
                            alert(err);
                            reject(err);
                        } else {
                            context.commit('setList', res.body);
                            resolve();
                        }

                    });
            });

        },
        /*
         * 获取详情
         */
        getDetail(context, id) {
            return new Promise((resolve, reject) => {
                superagent.get('https://383514580.github.io/static/db/detail/' + id + '.tpl')
                    .end(function(err, res) {
                        if (err) {
                            context.commit('setError', res.text);
                            reject(err);
                        } else {
                            context.commit('setDetail', res.text);
                            resolve();
                        }
                    });
            });
        }
    }
});
