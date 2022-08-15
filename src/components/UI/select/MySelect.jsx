import React from "react";
import classes from "./MySelect.module.css";

const MySelect = ({ options, value, onChange }) => {
	return (
		<select value={value} onChange={(e) => onChange(e.target.value)} className={classes.MySelect}>
			<option disabled value="">Без Сортировки</option>
			{options.map((option) => (
				<option key={option.name} value={option.name}>
					{option.title}
				</option>
			))}
		</select>
	);
};

export default MySelect;
