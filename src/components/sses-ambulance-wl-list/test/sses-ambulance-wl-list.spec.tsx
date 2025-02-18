import { newSpecPage } from '@stencil/core/testing';
import { SsesAmbulanceWlList } from '../sses-ambulance-wl-list';

describe('sses-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SsesAmbulanceWlList],
      html: `<sses-ambulance-wl-list></sses-ambulance-wl-list>`,
    });
    
    const wlList = page.rootInstance as SsesAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
