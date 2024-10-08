export const linkVariants = {
	open: {
		transition: {
			staggerChildren: 0.2,
		},
	},
	closed: {
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
};
export const navVariants = {
	open: {
		y: 0,
		opacity: 1,
	},
	closed: {
		y: 50,
		opacity: 0,
	},
};

export const sidebarVariants = {
	open: {
		clipPath: "circle(1200px at 10px 10px)",
		transition: { type: "spring", stiffness: 20 },
	},
	closed: {
		clipPath: "circle(100px at 10px 10px)",
		transition: { delay: 0.2, type: "spring", stiffness: 400, damping: 40 },
	},
};

export const textVariant = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 0.5,
			duration: 1,
			type: "spring",
			stiffness: 400,
			damping: 40,
			staggerChildren: 0.1,
			staggerDirection: -1,
		},
	},
};

export const slideVariants = {
	initial: {
		x: 0,
	},
	animate: {
		x: "-500%",
		transition: {
			repeat: Infinity,
			repeatType: "mirror",
			mirrorEasing: "linear",
			duration: 20,
		},
	},
};

export const serviceVariants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 0.5,
			duration: 1,
			staggerChildren: 0.5,
		},
	},
};

export const contactVariants = {
	initial: { x: -500, opacity: 0 },
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 0.5,
			duration: 0.6,
			staggerChildren: 1,
		},
	},
};
