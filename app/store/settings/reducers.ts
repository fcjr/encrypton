import { UPDATE_SETTINGS, SettingsState, SettingsActionTypes } from "./types";

const initialState: SettingsState = {
  loggedIn: false,
};

export function settingsReducer(
  state = initialState,
  action: SettingsActionTypes
): SettingsState {
  switch (action.type) {
    case UPDATE_SETTINGS: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
