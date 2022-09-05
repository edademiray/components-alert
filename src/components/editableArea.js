import createElement from '../utilities/createElement';

const loadArea = (props ) =>{
    const mainReactangle = createElement({classList:['rectangle-main']})
    const changerBtn = createElement({classList:['changer-btn'],type:'button'})

   

     let x , y, h, w ;

   function ts(e){
    console.log('mousedown',e)

    const recValue = window.getComputedStyle(mainReactangle)
 
    

     x = e.clientX;
     y = e.clientY;
       
      recW = mainReactangle.clientHeight;
      recH = mainReactangle.clientWeight;
     

   }
   
   function tm(e){
   console.log('touchmove',e)
  //  console.log('w değeri:',window.getComputedStyle(mainReactangle))
  const recValue = window.getComputedStyle(mainReactangle)

  
   console.log(h,w,recValue.height,recValue.width)
  
   let recW = mainReactangle.width
   let recH = mainReactangle.height

    const mx = e.clientX;
    const my = e.clientY;
    
    const cx = mx - x ;
    const cy = my - y ;
    

    mainReactangle.style.width=cx+recW;
    mainReactangle.style.height=cy+recH;

   }

    

    changerBtn.addEventListener('mousedown',ts)
    changerBtn.addEventListener('touchmove', tm)
    mainReactangle.append(changerBtn)
    return mainReactangle;
}
export default loadArea;
