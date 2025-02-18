import { newSpecPage } from '@stencil/core/testing';
import { SsesAmbulanceWlList } from '../sses-ambulance-wl-list';

describe('sses-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SsesAmbulanceWlList],
      html: `<sses-ambulance-wl-list></sses-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <sses-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sses-ambulance-wl-list>
    `);
  });
});
