import * as emptyModule from '../loops/empty.js';

class Looper {
  constructor () {
    console.log('looper constructor')
  }

  async loadModule() {
    const num = window.location.hash.substr(1) || 1;
    console.log('num', num)
    const module = await import(`../loops/${num}.js`);
    document.querySelector('#app').appendChild(module.canvas);
    return module;
  }

  async init() {
    module = await this.loadModule();
    const startTime = performance.now();
    async function reload() {
      if (module && module.canvas) {
        try {
          document.body.removeChild(module.canvas);
        } catch (e) {

        }
      }
      try {
        module = await this.loadModule();
      } catch (e) {
        module = emptyModule;
        console.log(e);
      }
    }

    function update() {
      requestAnimationFrame(update);
      module.draw(startTime);
    }

    update();

    window.addEventListener('hashchange', async e => {
      reload();
    })
  }

}

export default new Looper()