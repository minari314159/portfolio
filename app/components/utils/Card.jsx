const Card = ({ children, style }) => {
	// Rest of the code

	return (
		<div
			className={` bg-textmain rounded-xs  backdrop-filter backdrop-blur-md bg-opacity-30 h-fit p-5 shadow-sm shadow-tertiary flex flex-col gap-5 ${style}`}>
			{children}
		</div>
	);
};

export default Card;
