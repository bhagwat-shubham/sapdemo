import React, { Component } from 'react';

export default class Login extends Component {

	render() {

		// this is the URL we copied from firebase storage
		const loginButtonUrl = 'https://firebasestorage.googleapis.com/v0/b/doppelganger-app.appspot.com/o/google-icon-white.png?alt=media&token=ff891c5f-f2a4-441e-b457-d71b9b21762f';

		const styles = {
			backgroundImage: `url(${loginButtonUrl})`
		}

		return (
			<div className="login-container">
				<div className="login-button">
					<div style={styles} className="google-logo">
						<span className="button-text">Sign In With Google</span>
					</div>
					
				</div>
			</div>
		);
	}
}
