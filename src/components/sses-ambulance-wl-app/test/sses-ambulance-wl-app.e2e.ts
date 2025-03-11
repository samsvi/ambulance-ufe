import { newE2EPage } from '@stencil/core/testing';

describe('sses-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sses-ambulance-wl-app></sses-ambulance-wl-app>');

    const element = await page.find('sses-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
