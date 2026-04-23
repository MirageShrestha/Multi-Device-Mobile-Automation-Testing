const callLocators = require('../fixtures/call.locators.json');
const {
    openApp,
    getCurrentUdid,
    findFirstExistingElement,
    clickElement,
    typeDigits
} = require('../actions/globalActions');

describe('Phone App', () => {
    it('[TC_CALL_01] should verify user is able to open keypad, dial number and tap call button', async () => {
        const udid = getCurrentUdid();

        await openApp('com.google.android.dialer', 'com.android.dialer');

        // Verify dialer by checking keypad button
        //  exists instead of page text
        const {
            element: keypadButton,
            locator: keypadLocator
        } = await findFirstExistingElement(callLocators.keypad_locators);

        await expect(!!keypadButton).toBe(true);

        console.log(`Keypad button found on ${udid} with locator: ${keypadLocator}`);

        await clickElement(keypadButton);
        await driver.pause(2000);

        const digitOne = await $('android=new UiSelector().text("1")');
        await expect(digitOne).toBeDisplayed();

        const phoneNumber = '9848569098';
        await typeDigits(phoneNumber);

        const {
            element: numberField
        } = await findFirstExistingElement(callLocators.number_field_locators);

        await expect(!!numberField).toBe(true);

        const {
            element: callButton,
            locator: callLocator
        } = await findFirstExistingElement(callLocators.call_button_locators);

        await expect(!!callButton).toBe(true);

        console.log(`Call button found on ${udid} with locator: ${callLocator}`);

        await clickElement(callButton);
    });
});