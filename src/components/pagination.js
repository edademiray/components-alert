import createElement from '../utilities/createElement';

const renderPage = (pageNumber) => {
	const paginationPageList = [
		...document.getElementsByClassName('pagination-page'),
	];
	if (paginationPageList.length) {
		paginationPageList[0].innerText = `This is Page ${pageNumber}`;
	}
};

const paginationBar = (pageCount) => {
	const paginationBar = createElement({ classList: ['pagination-bar'] });
	const goFirstButton = createElement({
		classList: ['control-button'],
		innerText: '<<',
	});
	const goBackwardButton = createElement({
		classList: ['control-button'],
		innerText: '<',
	});
	const goForwardButton = createElement({
		classList: ['control-button'],
		innerText: '>',
	});
	const goLastButton = createElement({
		classList: ['control-button'],
		innerText: '>>',
	});

	const controlGroupOne = createElement({ classList: ['control-group-one'] });
	const controlIndexGroup = createElement({
		classList: ['control-index-group'],
	});
	const controlGroupTwo = createElement({ classList: ['control-group-two'] });
	let pageIndex = 1;

	const buttonCount = pageCount >= 10 ? 10 : pageCount;

	const updatecontrolIndexGroupForward = (index, pageCount) => {
		const startingIndex = index + 8 > pageCount ? pageCount - 9 : index - 1;
		updateControlIndexGroup(startingIndex);
	};
	const updatecontrolIndexGroupBackward = (index) => {
		const startingIndex = index - 8 < 1 ? 1 : index - 8;
		updateControlIndexGroup(startingIndex);
	};

	const updateControlIndexGroup = (index) => {
		const paginationIndexButtonList = [
			...document.getElementsByClassName('pagination-index-button'),
		];

		if (index < 1) {
			index = 1;
		} else if (index > pageCount - buttonCount + 1) {
			index = pageCount - buttonCount + 1;
		}
		paginationIndexButtonList.forEach((button, iteratorIndex) => {
			button.innerText = index + iteratorIndex;
		});
	};

	const goFirst = () => {
		pageIndex = 1;
		renderPage(1);
		updateControlIndexGroup(1);
	};
	const goLast = () => {
		pageIndex = pageCount;
		renderPage(pageCount);
		updateControlIndexGroup(pageIndex - buttonCount + 1);
	};

	const goBackward = () => {
		pageIndex = pageIndex - 1 < 1 ? 1 : pageIndex - 1;
		console.log(pageIndex);
		renderPage(pageIndex);
		updateControlIndexGroup(pageIndex);
	};

	const goForward = () => {
		pageIndex = pageIndex + 1 > pageCount ? pageCount : pageIndex + 1;
		renderPage(pageIndex);
		updateControlIndexGroup(pageIndex - buttonCount + 1);
	};
	goFirstButton.addEventListener('click', (e) => {
		e.preventDefault();
		goFirst();
	});
	goLastButton.addEventListener('click', (e) => {
		e.preventDefault();
		goLast();
	});
	goForwardButton.addEventListener('click', (e) => {
		e.preventDefault();
		goForward();
	});
	goBackwardButton.addEventListener('click', (e) => {
		e.preventDefault();
		goBackward();
	});

	for (let i = 0; i < buttonCount; i++) {
		const paginationIndexButton = createElement({
			classList: ['pagination-index-button'],
			innerText: i + 1,
		});
		paginationIndexButton.addEventListener('click', (e) => {
			e.preventDefault();
			const index = parseInt(paginationIndexButton.innerText);
			renderPage(index);
			pageIndex = index;
			if (pageCount > 10 && i < 2) {
				updatecontrolIndexGroupBackward(index, pageCount);
			} else if (pageCount > 10 && i > 7) {
				updatecontrolIndexGroupForward(index, pageCount);
			}
		});

		controlIndexGroup.append(paginationIndexButton);
	}

	controlGroupOne.append(goFirstButton, goBackwardButton);
	controlGroupTwo.append(goForwardButton, goLastButton);

	paginationBar.append(controlGroupOne, controlIndexGroup, controlGroupTwo);

	return paginationBar;
};

const loadPagination = (pageCount) => {
	const paginationMainContainer = createElement({
		classList: ['pagination-main-container'],
	});
	const paginationPageContainer = createElement({
		classList: ['pagination-page'],
		innerText: `This is Page 1`,
	});
	const pagination = paginationBar(pageCount);

	paginationMainContainer.append(paginationPageContainer, pagination);

	return paginationMainContainer;
};

export default loadPagination;
