import { useState } from "react";
import "./LoadingSpinner.scss";
import { ImSpinner2 } from "react-icons/im";

function LoadingSpinner({ spinnerLabel }) {
	const [loadingErrorMessage, setLoadingErrorMessage] = useState("");

	setTimeout(() => {
		setLoadingErrorMessage(
			"CryptoTalk's database is waking up. Please allow a few minutes for the data to load."
		);
	}, 5000);

	return (
		<div className="loadingSpinner">
			<div className="loadingSpinner__spinner">
				<ImSpinner2 />
			</div>
			{spinnerLabel.length > 1 ? (
				<div className="loadingSpinner__noSpinner">
					<div>{spinnerLabel}</div>
					<div className="loadingSpinner__noSpinner__loadingErrorMessage">
						{loadingErrorMessage}
					</div>
				</div>
			) : (
				<div>oof</div>
			)}
		</div>
	);
}

export default LoadingSpinner;
