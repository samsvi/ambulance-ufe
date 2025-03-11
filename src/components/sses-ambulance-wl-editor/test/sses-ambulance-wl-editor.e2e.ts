import { newE2EPage } from '@stencil/core/testing';

describe('sses-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sses-ambulance-wl-editor></sses-ambulance-wl-editor>');

    const element = await page.find('sses-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
