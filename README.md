# Galileo Take-Home Providers MasterView

## What is it?

This is a React App that creates a master view for a user to add providers (doctors).

## What does it (or should it) do?

- The user should be able to click "Add Provider" to open a modal and view a list of all available providers.
- From the modal, if the user then clicks "Add", an API call will be made to fetch the tasks for that provider and then that provider, with tasks sorted by priority, will be added to the list of "Chosen Providers".
- As providers are added to "Current Providers", they are removed from the master list in the modal.
- When all providers from the modal have been added to the "Current Providers" list, the "Add Providers" button which triggers the modal should be disabled.

## How to View the Example

1. Enter the directory
``` cd galileo-takehome ```

2. Install dependencies
``` npm i ```

3. Run the project
``` npm run dev ```

4. View in browser
Go to ``` localhost:1234 ``` in your browser.

5. Enjoy?
This step is optional.

## Notes

Because this project is on the smaller side, I chose to utilize `parcel` instead of a more-involved `webpack` or `create-react-app` setup (though `parcel` still requires the addition of a `.babelrc` file and installation of the `regenerator-runtime`, as included in the `babel` plugin).
