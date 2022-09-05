import createElement from "../utilities/createElement";
import * as tabIco from "../assets/img/info.svg"
import loadAlert from '../components/alert';
import accordion from "./accordion";
import { accordionData } from '../dumyData/accordionData'
import loadPaginations from "./pagination";

const Loadtab = (props) => {

    
    const error = loadAlert({ alertType: 'error', closeAble: false });
    const info = loadAlert({ alertType: 'info' })
    const warning = loadAlert({ alertType: 'warning' })
    const succes = loadAlert({ alertType: 'success' })

    const tabContainer = createElement({ classList: ['tab-container'] })
    const tabButtonContainer = createElement({ classList: ['tab-button-container'] })
    const contentContainer = createElement({ classList: ['content-container'] })

    const tabIcon = createElement({type:'img',src:tabIco.default,classList:['tab-icon']})

    const btnFirst = createElement({ type: 'button', innerText: 'Alert', classList: ['tabColor'] })
    const btnSecond = createElement({ type: 'button', innerText: 'Accordion', classList: ['second-button'] })
    const btnThird = createElement({ type: 'button', innerText: 'Pagination', classList: ['third-button'] })

    const tabHeader = createElement({ type: 'h4', innerText: 'Tab Componenti', classList: ['tab-header'] })

    const contentText = createElement({ type: 'p', classList: ['content-text'], innerText: 'Deneme texti' })

    function handleAccordionLoader() {
        contentContainer.replaceChildren(accordion({ accordionData }))
        contentContainer.classList.add('bg-change')
        btnSecond.classList.add('tabColor')

        btnFirst.classList.remove('tabColor')
        btnThird.classList.remove('tabColor')


    }

    function handleAlertLoader() {

        contentContainer.replaceChildren(error, info, warning, succes)

        btnFirst.classList.add('tabColor')


        btnSecond.classList.remove('tabColor')
        btnThird.classList.remove('tabColor')


    }
    function handlePagination() {
        contentContainer.replaceChildren(loadPaginations(50))
        btnThird.classList.add('tabColor')


        btnSecond.classList.remove('tabColor')
        btnFirst.classList.remove('tabColor')



    }
    btnFirst.addEventListener('click', handleAlertLoader);
    btnSecond.addEventListener('click', handleAccordionLoader);
    btnThird.addEventListener('click', handlePagination);

    //const btnBos = createElement({ type: 'button', innerText: 'deaktif' })


    // btnBos.addEventListener('click', function ss() {

    //     btnFirst.removeEventListener('click', handleAlertLoader);
    //     btnSecond.removeEventListener('click', handleAccordionLoader);
    //     btnThird.removeEventListener('click', handlePagination);

    // })

    //#region appends
    btnFirst.append(tabIcon)

    tabButtonContainer.append(btnFirst, btnSecond, btnThird)
    contentContainer.append(error, info, warning, succes)
    tabContainer.append(tabHeader)
    tabContainer.append(tabButtonContainer, contentContainer)
    //#endregion appends

    return tabContainer

}
export default Loadtab;