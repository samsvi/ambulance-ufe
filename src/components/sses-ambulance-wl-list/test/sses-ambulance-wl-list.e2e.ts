import { newE2EPage } from '@stencil/core/testing';

describe('sses-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sses-ambulance-wl-list></sses-ambulance-wl-list>');

    const element = await page.find('sses-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
