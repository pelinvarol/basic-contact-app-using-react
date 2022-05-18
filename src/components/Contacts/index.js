import {useEffect, useState} from 'react' //kısayol -> rfce
import List from './List';
import Form from './Form';
import "./styles.css"

function Contacts() {
  const [contacts, setContacts] = useState([
    {fullname: "Pelin",
    phone_number: "123456"},
    {fullname: "Ceyda",
    phone_number: "785314"},
    {fullname: "Mehmet",
    phone_number: "510937"},
  ]);

  useEffect(() => {
    console.log(contacts); //CONTACTS DEĞİŞTİĞİ ANDA LOGLASIN VE BİZ BUNU GÖRÜNTÜLEYEBİLELİM İSTEDİK! 
  } , [contacts])
  return (
    <div id="container">
      <h1>Contacts</h1>
        <List contacts= {contacts} />
        <Form addContacts={setContacts} contacts={contacts}/>
    </div>
   
  )
}

export default Contacts;