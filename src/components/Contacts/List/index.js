import { useState } from 'react'
//import Form from '../Form';


function List({ contacts }) { //contacts propunu list içine aldık!!
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase()));
  });
  return (
    <div>

      <input placeholder='Filter Contact' value={filterText} onChange={(e) => setFilterText(e.target.value)}
      />

      <ul className="list">
        {
          filtered.map((contact, i) => (
            <li key={i}>
              <span>{contact.fullname}</span>
              <span>{contact.phone_number}</span>
            </li>
          ))
          /*map dedikten sonra bana her seferinde contact dönecek ve ben bu kayıtları 
          li tagları içerisinde göstereceğim.
          !!Her map kullandığımızda her listeleme yaptığımızda indis numarasını key'i
          kullanmak olmalıdır. listeleme elemanın en dışındaki etikete veririz.
          
          contacts.map((contact,i) => (
            <li key={i}>{contact.fullname}</li>
            */
        }
        <p>
          Total contacts: {filtered.length}
        </p>
      </ul>

    </div>
  )
}

export default List;