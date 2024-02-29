import { useNavigate } from "react-router-dom";
import { useState } from 'react'


function HireForm(props) {
  const {person, setHiredPeople} = props
  const [wage, setWage] = useState(0)
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault()
    person.wage = wage;
    setHiredPeople((hiredPeople)=>[...hiredPeople, person]);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm