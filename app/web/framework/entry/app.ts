import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import '../filter';
import '../directive';
import '../component';

export default class App {
  config: any;
  constructor(config) {
    this.config = config;
  }

  bootstrap() {
    if (EASY_ENV_IS_NODE) {
      return this.server();
    }
    return this.client();
  }

  create(initState) {
    const { entry, createStore, createRouter } = this.config;
    let store;
    let router;
    if (typeof createStore === 'function') {
      store = createStore(initState);
    }
    if (typeof createRouter === 'function') {
      router = createRouter();
    }
    if (store && router) {
      sync(store, router);
    }
    return {
      router,
      store,
      render: h => { // not use ...entry, why ?
        return h(entry);
      },
    };
  }

  fetch(vm): Promise<any> {
    const { store, router } = vm;
    if (!router) return Promise.resolve();
    const matchedComponents = router.getMatchedComponents();
    if (!matchedComponents) {
      const error = new Error('No Match Component');
      return Promise.reject(error);
    }
    return Promise.all(
      matchedComponents.map((component: any) => {
        const options = component.options;
        if (component.preFetch) {
          return component.preFetch(store);
        }
        if (options && options.methods && options.methods.fetchApi) {
          return options.methods.fetchApi.call(component, { store, router, route: router.currentRoute });
        }
        return null;
      })
    );
  }

  client() {
    Vue.prototype.$bus = new Vue();
    Vue.prototype.$http = require('axios');
    const vm = this.create(window.__INITIAL_STATE__);
    if (vm.router) {
      vm.router.afterEach(() => {
        this.fetch(vm);
      });
    }
    const app = new Vue(vm);
    app.$mount('#app');
    return app;
  }

  server() {
    return context => {
      const vm = this.create(context.state);
      const { store, router } = vm;
      if (router) {
        router.push(context.state.url);
        return new Promise((resolve) => {
          router.onReady(() => {
            this.fetch(vm).then(() => {
              context.state = store.state;
              return resolve(new Vue(vm));
            });
          });
        });
      } else {
        context.state = store ? store.state : context.state;
        return Promise.resolve(new Vue(vm));
      }
    };
  }
}
