//get one
import {getDataFromDoc} from './utils.js'
import {getDataFromDocs} from './utils.js'

async function getOneDocument(){
    //promise
    //const res=firebase.firestore().collection('users').doc('93gmjocDGbdrB6ir06cr').get().then(res=>{
        //console.log(res)})
    //console.log(res)
    //async await
    const res=await firebase.firestore().collection('users').doc('93gmjocDGbdrB6ir06cr').get()
    const user=res.data()
    user.id=res.id
    console.log(user)
    
}

//getOneDocument()
async function getManyDocument(){
    const res=await firebase.firestore().collection('users').get()
    //console.log(res)
   const user=getDataFromDocs(res)
    console.log(user)
    
}
getManyDocument()

//add document
function addDocument(){
    const data={
        name: 'name',
        age: '19'
    }
    firebase.firestore().collection('users').add(data)
}
//addDocument()

//update document
function updateDocument(){
    const docId='93gmjocDGbdrB6ir06cr'
    const data={
        
        phone:firebase.firestore.FieldValue.arrayUnion('0904')
    }
    firebase.firestore().collection('users').doc(docId).update(data)
}
//updateDocument()

//delete document
function deleteDocument(){
    const docId="93gmjocDGbdrB6ir06cr"
    firebase.firestore().collection('users').doc(docId).delete()
}
//deleteDocument()