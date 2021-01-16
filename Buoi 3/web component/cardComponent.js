const style=`
<style>
.card{
    font-family:sans-serif;
    
}
.title{
    font-size:5rem;
    
    font-weight:600;
}
img{
    width:25vw;
}
</style>`
export class CardComponent extends HTMLElement{
    constructor(){
        super()
        //khai bao Shadow_DOM
        this._shadowDom=this.attachShadow({mode:'open'})
        this.imgsrc=this.getAttribute('imgsrc')
        this.title=this.getAttribute('title')
        this._shadowDom.innerHTML=`
       ${style}
        <div class="card">
            <img src=${this.imgsrc}>
            
            <div class="card-body">
                <div class="title">${this.title}</div>
                <div class="description">Description</div>
            </div>
        </div>
        `
    }
}
window.customElements.define('card-container',CardComponent)