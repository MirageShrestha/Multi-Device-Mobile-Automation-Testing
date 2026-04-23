# 📱 Multi-Device Mobile Automation Framework

Demo Link: https://drive.google.com/file/d/1pLTQpWV1uvuQtWMR-QCj0aYH5G95WCA2/view?usp=sharing 

### Appium & WebdriverIO

A lightweight and scalable automation framework demonstrating **Appium multi-capabilities** with **WebdriverIO (WDIO)** to execute tests on **multiple Android devices (real + emulator)** using a single codebase.

---

## 🚀 Tech Stack

- **Appium** (UiAutomator2)
- **WebdriverIO (WDIO)**
- **Node.js (JavaScript)**
- **Mocha Framework**

---

## ✨ Key Features

- ✅ Multi-device execution (parallel sessions)
- ✅ Real device + emulator support
- ✅ Dynamic locator handling (cross-device UI differences)
- ✅ Reusable helper utilities
- ✅ Device-aware test logic (UDID-based)
- ✅ Native Android app automation

---

## 📁 Project Structure

```

project-root/
│
├── actions/
│ └── globalActions.js
│
├── fixtures/
│ ├── call.locators.json
│ └── settings.locators.json
│
├── test/specs/
│ ├── call.spec.js
│ └── settings.spec.js
│
└── wdio.conf.js

```

---

## ⚙️ Core Utilities

| Function                     | Description                           |
| ---------------------------- | ------------------------------------- |
| `openApp()`                  | Opens app with fallback support       |
| `getCurrentUdid()`           | Returns current device UDID           |
| `isEmulator()`               | Detects emulator vs real device       |
| `findFirstExistingElement()` | Finds first working locator from list |
| `clickElement()`             | Performs safe click with wait         |
| `typeDigits()`               | Enters phone number via keypad        |

---

## 🧪 Test Scenarios

### 📞 1. Phone App Test — `TC_CALL_01`

- Open Dialer App
- Open Keypad
- Enter Phone Number
- Tap Call Button

---

### ⚙️ 2. Settings App Test — `TC_SETTINGS_01`

- Open Settings App
- Navigate to **About Section**
- Validate Android Version

**Assertions:**

- ✔ Emulator → expects `17`
- ✔ Real Device → expects `13 TKQ1.221114.001`

---

## 🔄 Multi-Capabilities Concept

Each capability represents **one device session**.

### Example Devices:

- 📱 Real Device (UDID-based)
- 📱 Emulator 1 → `emulator-5554`
- 📱 Emulator 2 → `emulator-5556`

➡️ Tests execute **in parallel across all devices**

---

## 🧠 Smart Handling

- **Dynamic Locators**
  Handles UI variations across different devices

- **Device-Based Logic**
  Uses UDID to differentiate emulator vs real device

- **Fallback Strategy**
  Supports multiple app packages / locators

---

## 📦 Setup

Install dependencies:

```bash
npm install
```

---

## ▶️ Run Tests

Run all tests:

```bash
npx wdio run wdio.conf.js
```

Run specific test:

```bash
npx wdio run wdio.conf.js --spec ./test/specs/call.spec.js
```

---

## ✅ Use Cases

- Cross-device testing
- Parallel execution
- Device compatibility validation
- Scalable mobile automation framework

---

## 👤 Author

**Mirage Shrestha**
QA Automation Engineer
Appium | WebdriverIO | Mobile Testing

---
