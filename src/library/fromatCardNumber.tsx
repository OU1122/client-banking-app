export const formatCardNumber = (number: number): string => {
	const cardNumberStr = number.toString();
	const maskedSection = cardNumberStr.slice(0, -4).replace(/\d/g, "*");
	const visibleSection = cardNumberStr.slice(-4);

	const maskedWithSpaces = maskedSection.replace(/(.{4})/g, "$1 ");

	return maskedWithSpaces + visibleSection;
};
