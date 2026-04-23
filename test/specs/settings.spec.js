const settingsLocators = require('../fixtures/settings.locators.json');
const {
    openApp,
    getCurrentUdid,
    isEmulator,
    clickElement
} = require('../actions/globalActions');

describe('Android Settings App', () => {
    it('[TC_SETTINGS_01] should verify correct Android version is displayed in device info screen', async () => {
        await openApp('com.android.settings');

        const aboutSection = await $(
            isEmulator()
                ? settingsLocators.about_emulated_device
                : settingsLocators.about_phone
        );

        await expect(aboutSection).toBeDisplayed();
        await clickElement(aboutSection);

        await driver.pause(2000);

        const androidVersionLabel = await $(settingsLocators.android_version_label);
        await expect(androidVersionLabel).toBeDisplayed();

        const versionElement = await $(
            isEmulator()
                ? settingsLocators.emulator_android_version_value
                : settingsLocators.real_device_android_version_value
        );

        await expect(versionElement).toBeDisplayed();

        const versionText = await versionElement.getText();
        const udid = getCurrentUdid();

        if (udid === 'emulator-5554' || udid === 'emulator-5556') {
            await expect(versionText).toBe('17');
        } else {
            await expect(versionText).toBe('13 TKQ1.221114.001');
        }

        console.log(`Android version on ${udid}: ${versionText}`);
    });
});