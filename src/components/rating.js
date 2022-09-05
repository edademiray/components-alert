import createElement from "../utilities/createElement";
import * as starRegularSrc from '../assets/star-regular.svg';
import * as starSolidSrc from '../assets/star-solid.svg';
const loadRating = () => {

    //#region Constants

    const ratingContainer = createElement({classList : ['rating-container']});
    const ratingScaleContainer = createElement({classList:['rating-scale-container']});
    const ratingScaleIconContainer = createElement({classList:['rating-scale-icon-container']});
    const ratingInformationContainer = createElement({classList:['rating-information-container']});
    const ratingCountSpan = createElement({type:'span', classList:['rating-count-span']});

    
    

    //#endregion


    const changeImage = (event) => {
        console.log(event);
        const element = event.target;
        // const parent = event.path[1];
        const rect = element.getBoundingClientRect()
        console.log(rect);
        event.fromElement.src = starSolidSrc.default
    }

    //#region Append
    for (let i = 0; i < 5; i++) {
        const ratingIcon = createElement({type:'img',src:starRegularSrc.default, classList:['rating-icon']});
        
        // ratingIcon.addEventListener('mouseover',changeImage );
        ratingScaleIconContainer.append(ratingIcon)
    }

    ratingScaleContainer.addEventListener('mouseover', changeImage)

    ratingScaleContainer.append(ratingScaleIconContainer);
    ratingInformationContainer.append(ratingCountSpan)

    ratingContainer.append(ratingScaleContainer,ratingInformationContainer)

    //#endregion

    return ratingContainer


}

export default loadRating