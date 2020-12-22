import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//import { domain, clientId } from "../auth_config.json";
import { createOidcAuth, SignInType } from 'vue-oidc-client';

Vue.config.productionTip = false

// note the ending '/'
const appUrl = 'https://localhost:8080/';
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// SignInType could be Window or Popup
var mainOidc = createOidcAuth('main', SignInType.Window, appUrl, {
    authority: 'https://localhost:44367/',
    redirect_uri:'http://localhost:8080/Home/SignIn',
    client_id: 'client_id_js',
    response_type: 'code',
    scope: 'openid'
});

Vue.prototype.$oidc = mainOidc

mainOidc.startup().then(ok => {
    if (ok) {
        new Vue({
            router,
            render: h => h(App),
            components: { App }
        }).$mount('#app');
    }
});
