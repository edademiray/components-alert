import './assets/style.scss';
import Loadtab from './components/tab';
import loadArea from './components/editableArea';
//import loadAlert from './components/alert';

// const acceptFunction = () => {
// 	window.alert('This is acceptable');
// };
// const declineFunction = () => {
// 	window.alert('This is unacceptable');
// };



// const alertType = 'warning'

// const info = loadAlert({ alertType: 'info', header: "Bu Header Eda'ya ait" });
// const success = loadAlert({ alertType: 'success', content: ' Enes burayı işgal etti Enes burayı işgal etti Enes burayı işgal etti' });
// const error = loadAlert({ alertType: 'error', closeAble: false });
// const warning = loadAlert({
// 	alertType,
// 	haveSelection: [],
// 	acceptFunction,
// 	declineFunction,
// });

// document.body.append(info, success, error, warning);

// import loadPagination from './components/pagination';
// import accordion from './components/accordion';
// import {accordionData} from './dumyData/accordionData'
// console.log(accordionData);
// const pagination = loadPagination(50)
// const as = accordion({accordionData});



document.body.append(Loadtab());
