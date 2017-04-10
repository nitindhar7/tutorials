✅✅✅ Goals:

✅ - 2 different screens
✅ - navigate to and from the 2 different screens
✅ - load initial state on first app start
✅ - redux store based flow
✅ - Persist state to storage
✅ - pull out state from the storage on app restart

Flow:

- Start on BlueScreen, which shows an input field, 2 buttons and some copy.
- on first start the copy is pulled out from the app initial state
- when user fills in the input field and hits the submit button, the state is updated.
- on restart of app, the user update state populates the copy
- when the user hits the switch button, the screen changes to OrangeScreen, which also has a switch button (back to BlueScreen)
