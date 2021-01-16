import { StudentCollection } from "./StudentCollection.js"

export class Student{
    constructor(age,name,home){
        this.age=age
        this.name=name
        this.home=home
    }
    showInfo(){
        console.log(`Họ tên: ${this.name} 
    Tuổi: ${this.age} 
    Lớp: ${this.class}
    Quê quán: ${this.home}`)
    }
}
// let html=''
// for(let a of StudentCollection.listStudent){
//     html+=`<card-container name="${item.fullName}"></card-container>`
// }
