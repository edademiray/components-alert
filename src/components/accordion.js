import createElement from '../utilities/createElement';

const accordion = (props) => {
	//#region Constants

	const { accordionData: data } = props;

	//#endregion

	//#region Static Elements

	const accordionContainer = createElement({
		classList: ['accordion-container'],
	});

	//#endregion

	//#region Utility Functions

	const toggleAccordionElement = (element) => {
		element.classList.toggle('open-element');
	};

	//#endregion

	//#region Generate Dynamic Elements

	data.forEach((element) => {
		const accordionElement = createElement({
			classList: ['accordion-element'],
		});
		const accordionElementHeader = createElement({
			classList: ['accordion-element-header'],
			innerText: element.header,
		});
		const accordionElementBody = createElement({
			classList: ['accordion-element-body'],
			innerText: element.content,
		});

		accordionElementHeader.addEventListener('click', (e) => {
			e.preventDefault();
			toggleAccordionElement(accordionElementBody);
		});

		accordionElement.append(accordionElementHeader, accordionElementBody);
		accordionContainer.append(accordionElement);
	});

	//#endregion

	return accordionContainer;
};

export default accordion;
