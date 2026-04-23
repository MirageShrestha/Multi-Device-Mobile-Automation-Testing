const openApp = async (primaryApp, fallbackApp = null) => {
    try {
        await driver.activateApp(primaryApp);
    } catch (error) {
        if (fallbackApp) {
            await driver.activateApp(fallbackApp);
        } else {
            throw error;
        }
    }

    await driver.pause(3000);
};

const getCurrentUdid = () => {
    return driver.capabilities['appium:udid'] || driver.capabilities.udid;
};

const isEmulator = () => {
    const udid = getCurrentUdid();
    return udid.startsWith('emulator-');
};

const findFirstExistingElement = async (locators = []) => {
    for (const locator of locators) {
        try {
            const element = await $(locator);

            if (await element.isExisting()) {
                return { element, locator };
            }
        } catch (error) {
            // continue to next locator
        }
    }

    return { element: null, locator: null };
};

const clickElement = async (element, timeout = 5000) => {
    await element.waitForDisplayed({ timeout });
    await element.click();
};

const typeDigits = async (value) => {
    for (const digit of value.split('')) {
        const digitButtons = await $$(
            `android=new UiSelector().text("${digit}")`
        );

        const digitButton = digitButtons[0];

        await digitButton.waitForDisplayed({ timeout: 5000 });
        await digitButton.click();

        await driver.pause(150);
    }
};

module.exports = {
    openApp,
    getCurrentUdid,
    isEmulator,
    findFirstExistingElement,
    clickElement,
    typeDigits
};