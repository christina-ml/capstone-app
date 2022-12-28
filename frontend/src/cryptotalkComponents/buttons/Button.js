import './Button.scss';

function Button({buttonText, onClick}){

    return (
        <div
            className="button"
            onClick={onClick}
        >
            {buttonText}
        </div>
    )
}

export default Button;