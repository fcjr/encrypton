// Describing the shape of the settings slice of state
export interface SettingsState {
	trayMode: boolean;
}

// Describing the different ACTION NAMES available
export const UPDATE_SETTINGS = "UPDATE_SETTINGS";

interface UpdateSettingsAction {
	type: typeof UPDATE_SETTINGS;
	payload: SettingsState;
}

export type SettingsActionTypes = UpdateSettingsAction;
