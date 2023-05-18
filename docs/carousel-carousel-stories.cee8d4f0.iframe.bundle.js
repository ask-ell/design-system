"use strict";(self.webpackChunk_ask_ell_jest_typescript_starter=self.webpackChunk_ask_ell_jest_typescript_starter||[]).push([[45],{"./src/carousel/carousel.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithFailingLoading:()=>WithFailingLoading,WithImages:()=>WithImages,WithoutInputs:()=>WithoutInputs,__namedExportsOrder:()=>__namedExportsOrder,default:()=>carousel_stories});var core=__webpack_require__("./src/core/index.ts");const carouselComponentTag=new core._g("carousel"),carouselImageContainerComponentTag=new core._g("carousel-image-container"),carouselArrowComponentTag=new core._g("carousel-arrow"),hiddenElementClassName=`${carouselImageContainerComponentTag.toString()}-hidden`,fromMiddleToLeftAnimationClassName=`${carouselImageContainerComponentTag.toString()}-from-middle-to-left`,fromMiddleToRightAnimationClassName=`${carouselImageContainerComponentTag.toString()}-from-middle-to-right`,fromLeftToMiddleAnimationClassName=`${carouselImageContainerComponentTag.toString()}-from-left-to-middle`,fromRightToMiddleAnimationClassName=`${carouselImageContainerComponentTag.toString()}-from-right-to-middle`;class CarouselArrow{constructor(symbol){const element=(0,core.f3)(Window).document.createElement("span");element.innerText=symbol,element.classList.add(carouselArrowComponentTag.toString()),this.element=element}}class CarouselLeftArrow extends CarouselArrow{constructor(root){super("<");const rootLeftPaddingValue=(0,core.f3)(Window).getComputedStyle(root).getPropertyValue("padding-left");this.element.style.left=rootLeftPaddingValue}}class CarouselRightArrow extends CarouselArrow{constructor(root){super(">");const rootRightPaddingValue=(0,core.f3)(Window).getComputedStyle(root).getPropertyValue("padding-right");this.element.style.right=rootRightPaddingValue}}let ShiftAnimationDirection=function(ShiftAnimationDirection){return ShiftAnimationDirection[ShiftAnimationDirection.UNDEFINED=0]="UNDEFINED",ShiftAnimationDirection[ShiftAnimationDirection.LEFT=1]="LEFT",ShiftAnimationDirection[ShiftAnimationDirection.RIGHT=2]="RIGHT",ShiftAnimationDirection}({});class Carousel extends core.l5{currentIndex=0;previousIndex=this.currentIndex;images=new Array;imageContainers=new Array;static shiftAnimationDuration=500;constructor(){super(),this.reset(),this.classList.add(carouselComponentTag.toString()),this.inspectImagesAttribute()}onChanges(){this.reset(),this.inspectImagesAttribute()}getPreviousIndex(){return this.previousIndex}getCurrentIndex(){return this.currentIndex}getLastShiftAnimationDirection(){return this.lastShiftAnimationDirection?this.lastShiftAnimationDirection:ShiftAnimationDirection.UNDEFINED}inspectImagesAttribute(){const encodedImages=this.getAttribute("images");null!==encodedImages&&(this.images=(0,core.pe)(encodedImages),this.createImageContainers())}reset(){this.innerHTML="",this.currentIndex=0,this.previousIndex=this.currentIndex,this.images=new Array,this.imageContainers=new Array}createImageContainers(){const imagesPreloaders=new Array,domCacheService=core.it.getInstance();this.images.forEach(((image,index)=>{const imageContainer=(0,core.f3)(Window).document.createElement("div");imageContainer.classList.add(carouselImageContainerComponentTag.toString()),index!==this.currentIndex&&imageContainer.classList.add(hiddenElementClassName),imageContainer.style.backgroundImage=`url("${image.src}")`,this.imageContainers.push(imageContainer),this.appendChild(imageContainer);const imagePreloader=domCacheService.preloadImage(image).catch((()=>{this.imageContainers[index].innerText="Error: unreachable resource"}));imagesPreloaders.push(imagePreloader)})),Promise.all(imagesPreloaders),this.imageContainers.length>1&&this.createArrows()}createArrows(){const leftArrow=new CarouselLeftArrow(this);this.appendChild(leftArrow.element),leftArrow.element.addEventListener("click",(()=>{null==this.timeOut&&(this.lastShiftAnimationDirection=ShiftAnimationDirection.RIGHT,this.setCurrentIndex(0===this.currentIndex?this.imageContainers.length-1:this.currentIndex-1))}));const rightArrow=new CarouselRightArrow(this);this.appendChild(rightArrow.element),rightArrow.element.addEventListener("click",(()=>{null==this.timeOut&&(this.lastShiftAnimationDirection=ShiftAnimationDirection.LEFT,this.setCurrentIndex(this.currentIndex===this.imageContainers.length-1?0:this.currentIndex+1))}))}setCurrentIndex(currentIndex){this.previousIndex=this.currentIndex,this.currentIndex=currentIndex,this.runAnimations()}runAnimations(){this.imageContainers[this.currentIndex].classList.remove(hiddenElementClassName);const shiftAnimationDirection=this.getLastShiftAnimationDirection();if(shiftAnimationDirection===ShiftAnimationDirection.UNDEFINED)return;const isToTheRight=shiftAnimationDirection===ShiftAnimationDirection.RIGHT,previousImageContainerClass=isToTheRight?fromMiddleToRightAnimationClassName:fromMiddleToLeftAnimationClassName;this.imageContainers[this.previousIndex].classList.add(previousImageContainerClass);const currentImageContainerClass=isToTheRight?fromLeftToMiddleAnimationClassName:fromRightToMiddleAnimationClassName;this.imageContainers[this.currentIndex].classList.add(currentImageContainerClass),this.timeOut=setTimeout((()=>{this.imageContainers[this.previousIndex].classList.remove(previousImageContainerClass),this.imageContainers[this.previousIndex].classList.add(hiddenElementClassName),this.imageContainers[this.currentIndex].classList.remove(currentImageContainerClass),this.clearTimeOut()}),Carousel.shiftAnimationDuration)}clearTimeOut(){clearTimeout(this.timeOut),this.timeOut=void 0}}const imagesMock=[...Array(3).keys()].map(((_,index)=>({src:`https://images.pexels.com/photos/266211${index}/pexels-photo-266211${index}.jpeg?auto=compress&cs=tinysrgb&w=1600`}))),fakeImagesMock=[...Array(2).keys()].map(((_,index)=>({src:`fakeurl${index}.com`})));!function importCarouselComponent(){(0,core.DS)(carouselComponentTag,Carousel)}();const carousel_stories={title:"Components/Carousel"},style="width: 100%; height: 400px;",WithoutInputs={name:"Without images",render:()=>`<${carouselComponentTag.toString()} style="${style}"></${carouselComponentTag.toString()}>`},WithImages={name:"With images",render:()=>`<${carouselComponentTag.toString()} style="${style}" images="${(0,core.HI)(imagesMock)}"></${carouselComponentTag.toString()}>`},WithFailingLoading={name:"With failing loading",render:()=>`<${carouselComponentTag.toString()} style="${style}" images="${(0,core.HI)(fakeImagesMock)}"></${carouselComponentTag.toString()}>`};WithoutInputs.parameters={...WithoutInputs.parameters,docs:{...WithoutInputs.parameters?.docs,source:{originalSource:"{\n  name: 'Without images',\n  render: () => `<${carouselComponentTag.toString()} style=\"${style}\"></${carouselComponentTag.toString()}>`\n}",...WithoutInputs.parameters?.docs?.source}}},WithImages.parameters={...WithImages.parameters,docs:{...WithImages.parameters?.docs,source:{originalSource:'{\n  name: \'With images\',\n  render: () => `<${carouselComponentTag.toString()} style="${style}" images="${encrypt(imagesMock)}"></${carouselComponentTag.toString()}>`\n}',...WithImages.parameters?.docs?.source}}},WithFailingLoading.parameters={...WithFailingLoading.parameters,docs:{...WithFailingLoading.parameters?.docs,source:{originalSource:'{\n  name: \'With failing loading\',\n  render: () => `<${carouselComponentTag.toString()} style="${style}" images="${encrypt(fakeImagesMock)}"></${carouselComponentTag.toString()}>`\n}',...WithFailingLoading.parameters?.docs?.source}}};const __namedExportsOrder=["WithoutInputs","WithImages","WithFailingLoading"]},"./src/core/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_g:()=>ComponentTag,l5:()=>CustomHTMLElement,it:()=>DomCacheService,pe:()=>decrypt,DS:()=>defineWebComponent,HI:()=>encrypt,f3:()=>inject});class CustomHTMLElement extends HTMLElement{findElementsByComponentTag(componentTag){return this.querySelectorAll(`.${componentTag.toString()}`)}}class DomCacheService{cacheDomElementTag=new ComponentTag("cache");cache=inject(Window).document.createElement(this.cacheDomElementTag.toString());constructor(){this.cache.style.position="absolute",this.cache.style.zIndex="-1000",this.cache.style.opacity="0",inject(Window).document.body.appendChild(this.cache)}static getInstance(){return null==DomCacheService.instance&&(DomCacheService.instance=new DomCacheService),DomCacheService.instance}async preloadImage({src}){await new Promise(((resolve,reject)=>{const image=new Image;image.onload=()=>{resolve()},image.onerror=reject,image.src=src,this.cache.appendChild(image)}))}}class ComponentTag{constructor(componentName){this.value=`ask-ell-${componentName}`}toString(){return this.value}}class CommonError extends Error{constructor(message){super(message)}}class EvenDefinedComponentError extends CommonError{constructor(componentTag){super(`"${componentTag.toString()}" is event defined`)}}function inject(_token){return window}function defineWebComponent(componentTag,_constructor){if(inject(Window).customElements.get(componentTag.toString()))throw new EvenDefinedComponentError(componentTag);inject(Window).customElements.define(componentTag.toString(),_constructor)}function encrypt(data){let dataToEncrypt="object"==typeof data?JSON.stringify(data):String(data);return btoa(dataToEncrypt)}function decrypt(data){return JSON.parse(atob(data))}}}]);