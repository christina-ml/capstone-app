// decimal data type to have commas for USD $ currency
const addCommas = (x) => {
	return Number(x).toLocaleString("en-US");
};

export default addCommas;
