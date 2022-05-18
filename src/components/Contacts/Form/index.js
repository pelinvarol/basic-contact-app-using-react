import { useState } from 'react'

const initialFormValues = {fullname: "", phone_number: ""};

function Form({ addContacts, contacts }) {
  const [form, setForm] = useState(initialFormValues)
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault(); //bunu sayfanın direkt yenilenmemesi için, consoleda çıktımızı 
    //görmek için kullanıyoruz

    if (form.fullname === "" || form.phone_number === "") {
      return false; //eğer isim veya telefon boşsa formu gönderme diyoruz!!
    }

    addContacts([...contacts, form]); //formumuz zaten bir obje, o objeyi direkt olarak arrayin içine yerleştirebiliriz
    setForm(initialFormValues);
   // console.log(form);
  }
  return (
    <form onSubmit={onSubmit}>
      <div>

        <div>
          <input
            name="fullname"
            placeholder='Your Fullname'
            onChange={onChangeInput}
            value={form.fullname}
          />
        </div>

        <div>
          <input
            name="phone_number"
            placeholder='Your Phone Number'
            onChange={onChangeInput}
            value={form.phone_number}
          />
        </div>

        <div className='btn'>
          <button>Add</button>
        </div>
      </div>
    </form>
  )
}

export default Form