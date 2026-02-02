# ServerPage

Backend server for handling requests from the Android client
application.

This server is built using **Node.js** and is intended to receive and
process data sent from the Android app during testing and development.

------------------------------------------------------------------------

## Requirements

-   Node.js
-   Git
-   A hosting platform (for production or testing on real devices)

------------------------------------------------------------------------

## Running the Server Locally

1.  Clone the repository:

    ``` bash
    git clone https://github.com/vanshsantoshi/ServerPage
    ```

2.  Navigate to the project directory:

    ``` bash
    cd ServerPage
    ```

3.  Start the server:

    ``` bash
    node index.js
    ```

The server will start listening on the configured port.

------------------------------------------------------------------------

## Important Note

⚠️ **Android (API 28+) restricts cleartext HTTP traffic by default.**\
Because of this limitation, running the server locally over plain HTTP
may not work on modern Android devices.

For proper testing, it is recommended to deploy the server on a cloud
hosting platform such as **Render** or **Heroku**.

------------------------------------------------------------------------

## Deploying on Render

1.  Sign in to your **Render** dashboard.

2.  Click **New → Web Service**.

3.  Connect your GitHub account.

4.  Fork this repository and select it from the list.

5.  Set the **Start Command** to:

    ``` bash
    node index.js
    ```

6.  Choose the **Free** instance type.

7.  Click **Deploy Web Service** and wait for deployment to complete.

------------------------------------------------------------------------

## Usage

### Authentication

-   The server is protected by a simple password-based login.

-   Default passcode/password:

        qwerty

-   Authentication is required before accessing stored data.

> ⚠️ This authentication method is intentionally minimal and is intended
> **only for testing and development**.

------------------------------------------------------------------------

### Viewing Stored Data

-   After a successful login, the user is redirected to:

        /dataIsStoredHere

-   This endpoint displays all incoming data received from the Android
    client.

-   Data will continue to accumulate until it is manually cleared.

------------------------------------------------------------------------

### Clearing Stored Data

-   To delete all stored data and start fresh, access:

        /clearData

-   This endpoint removes all previously saved data from the server.

-   After clearing, the server is ready to receive new data from the
    client.

------------------------------------------------------------------------

### Typical Workflow

1.  Start the server locally or deploy it on Render.
2.  Log in using the configured password.
3.  Monitor incoming data via `/dataIsStoredHere`.
4.  Clear stored data using `/clearData` when needed.
5.  Repeat testing as required.

------------------------------------------------------------------------

## Android Client Configuration

Once the server is live:

-   Copy your deployed server URL.
-   Update the server endpoint in the Android client (for example,
    inside `Keylogger.java` or the networking module).
-   Ensure the client points to the correct HTTPS endpoint when
    deployed.

------------------------------------------------------------------------

## Disclaimer

This project is intended **strictly for educational and research
purposes**.\
Use it only in controlled environments and on devices you own or have
**explicit permission** to test.

The author is not responsible for any misuse of this project.

------------------------------------------------------------------------

## License

This project is provided for **learning and research purposes only**.

