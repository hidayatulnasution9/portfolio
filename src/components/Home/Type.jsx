import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
	return (
		<Typewriter
			options={{
				strings: [
					"Professional In Technology & Electronic",
					"IT Engineer",
					"Electrical Engineer",
					"Technician",
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
};

export default Type;
