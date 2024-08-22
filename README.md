# Jira Title Copier Chrome Extension

This Chrome extension allows you to quickly copy the title of a Jira ticket with a single click.

## Features

- Adds a button to your Chrome toolbar
- When clicked on a Jira ticket page, it copies the ticket title to your clipboard
- Displays an alert with the copied title for confirmation

## Installation

1. Clone or download this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the directory containing the extension files.

## Usage

1. Navigate to a Jira ticket page in your browser.
2. Click on the Jira Title Copier extension icon in your Chrome toolbar.
3. The ticket title will be copied to your clipboard, and you'll see an alert confirming the action.

## How it Works

The extension uses Chrome's `executeScript` API to inject a script into the active tab. This script:

1. Finds the Jira ticket title element using a CSS selector.
2. Extracts the text content of the title.
3. Copies the title to the clipboard using the Clipboard API.
4. Shows an alert to confirm the action.

## Troubleshooting

If the extension fails to copy the title, ensure that:

1. You are on a Jira ticket page.
2. The page has fully loaded before clicking the extension icon.
3. You have granted the necessary permissions to the extension.

If issues persist, the HTML structure of Jira pages may have changed. In this case, you might need to update the CSS selector in `background.js`.

## Contributing

Feel free to fork this repository and submit pull requests for any improvements or bug fixes.

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
