import React, { useState } from "react";

export const TwoLinkedComponent = () => {
	const [value, setValue] = useState("");
	return (
		<div>
			<h2>{value}</h2>
			<input
				type="text"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
		</div>
	);
};

export default TwoLinkedComponent;
