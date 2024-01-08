import "./LoadingSpinner.scss";
import { ImSpinner2 } from "react-icons/im";

function LoadingSpinner({spinnerLabel}) {
	return (
		<div className="loadingSpinner">
			<div className="loadingSpinner__spinner">
				<ImSpinner2 />
			</div>
			{spinnerLabel.length > 1 ?
				<div>{spinnerLabel}</div>
				:
				<div>oof</div>
			}

		</div>
	);
}

export default LoadingSpinner;
