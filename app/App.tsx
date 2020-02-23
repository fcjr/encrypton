import * as React from "react";
import { connect } from "react-redux";

import { AppState } from "./store";
import { SettingsState } from "./store/settings/types";
import { updateSettings } from "./store/settings/actions";
import "./index.scss";

interface AppProps {
	updateSettings: typeof updateSettings;
	settings: SettingsState;
}

class App extends React.Component<AppProps> {
	state = {};

	componentDidMount(): void {
		this.props.updateSettings({
			trayMode: true
		});
	}

	render(): JSX.Element {
		return (
			<div className="parent">
				Encryptron
			</div>
		);
	}
}

const mapStateToProps = (state: AppState) => ({
	settings: state.settings
});

export default connect(
	mapStateToProps,
	{ updateSettings }
)(App);
