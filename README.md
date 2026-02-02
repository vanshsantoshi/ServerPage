# ServerPage

Backend server for handling requests from the Android client application.

This server is built using **Node.js** and is intended to receive and process data sent from the Android app during testing and development.

---

## Requirements

- Node.js
- Git
- A hosting platform (for production/testing on real devices)

---

## Running the Server Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/vanshsantoshi/ServerPage
   ```

2. Navigate to the project directory:
   ```bash
   cd ServerPage
   ```

3. Start the server:
   ```bash
   node index.js
   ```

The server will start listening on the configured port.

---

## Important Note

⚠️ **Android (API 28+) restricts cleartext HTTP traffic by default.**  
Because of this limitation, running the server locally over plain HTTP may not work on modern Android devices.

For proper testing, it is recommended to deploy the server on a cloud hosting platform such as **Render** or **Heroku**.

---

## Deploying on Render

1. Sign in to your **Render** dashboard.
2. Click **New → Web Service**.
3. Connect your GitHub account.
4. Fork this repository and select it from the list.
5. Set the **Start Command** to:
   ```bash
   node index.js
   ```
6. Choose the **Free** instance type.
7. Click **Deploy Web Service** and wait for deployment to complete.

---

## Android Client Configuration

Once the server is live:

- Copy your deployed Render service URL.
- Update the server URL in the Android client (e.g., `Keylogger.java`) with the new endpoint.

---

## Disclaimer

This project is intended **strictly for educational and research purposes**.  
Use it only in controlled environments and on devices you own or have explicit permission to test.

---

## License

This project is provided for learning and research use only.
