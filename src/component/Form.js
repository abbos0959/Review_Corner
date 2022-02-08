import React, { useState, useEffect } from "react";

export const Form = () => {
  const initialState = { familiya: "", ism: "" };

  const [formValues, setFormValues] = useState(initialState);
  const [formerrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const Handlechange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
      const {name,value}=e.target
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    
  };

  useEffect(() => {
console.log(formerrors);
if(Object.keys(formerrors).length===0 && isSubmit){
console.log(formValues);
}

  },[formerrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.familiya) {
      errors.familiya = "Iltimos Familiyangizni Kiriting!";
    }
    if (!values.ism) {
      errors.ism = "Iltimos Ismingizni Kiriting!";
    }
    return errors;
  };
  return (
    <div className="form-control">
      <div className="form">
     
        <form onSubmit={handleSubmit}>
          <div className="for">
            <label>
              Familiyangizni Kiriting:
              <input
                type="text"
                name="familiya"
                value={formValues.familiya}
                onChange={Handlechange}
              />
            </label>
            <p style={{color:"red"}}>{formerrors.familiya}</p>
          </div>
          <div className="for">
            <label>
              Ismingizni Kiriting:
              <input
                type="text"
                name="ism"
                value={formValues.ism}
                onChange={Handlechange}
              />
            </label>
            <p style={{color:"red"}}>{formerrors.ism}</p>
          </div>
          <div className="for">
            <label>
              Yashash Manzilingiz:
              <select>
                <option>Yashash Manzilingiz</option>
                <option>Qashqadaryo</option>
                <option> Surxondaryo</option>
                <option> Namangan</option>
                <option>Toshkent</option>
                <option>Jizzax</option>
                <option>Andijon</option>
                <option>Farg`ona</option>
                <option>Samarqand</option>
                <option> Sirdaryo</option>
                <option>Buxoro</option>
                <option>Xorazm</option>
                <option>Navoiy</option>
                <option>Qoraqalpog`iston Respublikasi</option>
              </select>
            </label>
          </div>
          <div className="for">
            <label>
              Tug`ilgan yilingizni kiriting :
              <input type="date" placeholder="salom" />
            </label>
          </div>

          <div className="for">
            <label>
              Jinsingiz:
              <select>
                <option>Erkak</option>
                <option> Ayol</option>
              </select>
            </label>
          </div>

          <button className="but">Saved</button>
        </form>
      </div>
    </div>
  );
};
