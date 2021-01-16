import {Student} from './student.js'
export class StudentCollection {
    
    constructor(className){
        this.className=className
        this.listStudent=[]
    }
    ddStudent(student){
        
    aif (student instanceof Student){
        student.class=this.className
        this.listStudent.push(student)   
        }
    }
    showByAge(age){
        let result=this.listStudent.filter(stu=>{return stu.age===age})
        this.showResult(result,age)
    }
    findByName(name){
        let result=this.listStudent.filter(stu=>{return stu.name.includes(name)})
        this.showResult(result,name)
    }
    countByAgeHome(age,home){
        let i=0
        for(let stu of this.listStudent){
            
            i=(stu.age===age&&stu.home===home? i+1:i)
        }
        console.log(`Số học sinh có tuổi ${age} và quê ${home} là: ${i}`)    
    }
    showResult(result,criteria){
        console.log('Danh sách các học sinh có',typeof criteria==='number'?`tuổi là ${criteria}: `:`tên là ${criteria}: `)
        for(let i of result){
            console.log(`Họ tên: ${i.name} 
        Tuổi: ${i.age} 
        Lớp: ${i.class}
        Quê quán: ${i.home}`)
        }
    }
    

}


