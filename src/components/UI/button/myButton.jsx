import React from "react";
import classes from "./myButton.module.css";

const MyButton = ({ title, ...props }) => {
	return (
		<button {...props} className={classes.myButton}>
			{title}
		</button>
	);
};

export default MyButton;
