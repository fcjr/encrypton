import { SettingsState, UPDATE_SETTINGS, SettingsActionTypes } from "./types";

export function updateSettings(newSettings: SettingsState): SettingsActionTypes {
  return {
    type: UPDATE_SETTINGS,
    payload: newSettings
  };
}
