export class CardComponent extends HTMLElement{
    constructor(){
        super()
        
        this._shadowDom=this.attachShadow({mode:'open'})
        // this.name=this.getAttribute('name')
        this._shadowDom.innerHTML=`
        <h1>Hello</h1>
        `
    }
    // //component duoc show len man hinh
    // connectedCallBack(){
    //     this.name=this.getAttribute('name')
    //     this._shadowDom.innerHTML=`
    //     <div>
    //     ${this.name}
    //     </div>`
    //     console.log('element'+this.name+'vua bi xoa di')
    // }
    // //component bi xoa di
    // disconnectedCallBack(){}
    // //attribute cua component thay doi
    // static get observedAttributes(name,newVal,oldVal){
    //     return ['name']
    // }

}
window.customElements.define('card-container',CardComponent)