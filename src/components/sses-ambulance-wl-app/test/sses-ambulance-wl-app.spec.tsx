import { newSpecPage } from '@stencil/core/testing';
import { SsesAmbulanceWlApp } from '../sses-ambulance-wl-app';

describe('sses-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [SsesAmbulanceWlApp],
      html: `<sses-ambulance-wl-app base-path="/"></sses-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("sses-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [SsesAmbulanceWlApp],
      html: `<sses-ambulance-wl-app base-path="/ambulance-wl/"></sses-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("sses-ambulance-wl-list");
  });
});