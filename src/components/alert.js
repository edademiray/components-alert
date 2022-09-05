import createElement from '../utilities/createElement';
import * as alertWrn from '../assets/img/warning.svg';
import * as alertSuccess from '../assets/img/success.svg';
import * as alertError from '../assets/img/error.svg';
import * as alertInfo from '../assets/img/info.svg';


const loadAlert = (props) => {
	const {
		alertType,
		header,
		content,
		closeAble = true,
		haveSelection = false,
		acceptFunction,
		declineFunction,
		
	} = props;

	//#region create element

	const alertContainer = createElement({ classList: ['alert-container'] });
	const iconContainer = createElement({ classList: ['icon-container'] });
	const alertTextContainer = createElement({ classList: ['alert-text-container'] });
	const buttonContainer = createElement({ classList: ['button-container'] });

	const headerElement = createElement({
		type: 'h5',
		innerText: header ? header : 'This is a Header, fyi',
	});
	const contentElement = createElement({
		type: 'p',
		innerText: content ? content : 'This is a content, fyi',
	});




	const logo = createElement({ type: 'img',classList:['alert-img'], src: alertSuccess.default });

	const closeButton = createElement({ type: 'button', innerText: 'x',classList:['alert-close-img'] });
	const acceptButton = createElement({ type: 'button', innerText: 'Accept',classList:['accept-icon'] });
	const declineButton = createElement({ type: 'button', innerText: 'Decline',classList:['decline-icon'] });

	//#endregion

	switch (alertType) {
		case 'success':
			alertContainer.classList.add('success');
			logo.src = alertSuccess.default

			break;
		case 'warning':
			alertContainer.classList.add('warning');
			logo.src = alertWrn.default


			break;
		case 'error':
			alertContainer.classList.add('error');
			logo.src = alertError.default

			
			break;
		case 'info':
			alertContainer.classList.add('info');
			logo.src = alertInfo.default

			break;

		default:
			alertContainer.classList.add('warning');
			logo.src = alertWrn.default

			break;
	}

	closeAble ? '' : closeButton.classList.add('hide');
	haveSelection ? '' : acceptButton.classList.add('hide');
	haveSelection ? '' : declineButton.classList.add('hide');

	const closeFunction = () => {
		alertContainer.classList.add('hide')
	}

    acceptButton.addEventListener('click', acceptFunction)
    declineButton.addEventListener('click', declineFunction)
	closeButton.addEventListener('click',closeFunction)

	//#region append

	iconContainer.append(logo);
	alertTextContainer.append(headerElement, contentElement);
	buttonContainer.append(acceptButton, declineButton, closeButton);
	alertContainer.append(iconContainer, alertTextContainer, buttonContainer);

	//#endregion

	return alertContainer;
};

export default loadAlert;
