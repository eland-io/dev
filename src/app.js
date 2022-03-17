export default {
    name : 'Eland.io',
    
    data : {
        async contact(){
           const res = await fetch('./data.json')
           const contact = await res.json()

           console.log(contact);
           return contact
        }
    },
}
