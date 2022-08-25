import { useState } from 'react'

function CardsPopulate({ name, companyCode, logo, users, quizzes, background, key }) {
  const [counter, setcounter] = useState(0)
  const [counter1, setcounter1] = useState(0)
  
  function handleClick (){
    setcounter(counter + 1)
  }

  function handleClick1 (){
    setcounter1(counter1 + 1)
  }
  return (
    <div className="main">
      <div className="container-cards">
        <div className="card">
          <div className="card-image">
            <img src={background} alt="fondo" className='card-image--background' />
            <img src={logo} alt="logo" className='card-image--icon' />
          </div>
          <div className="card-content">
            <h3 className='card-title'>{name}</h3>
            <p className='card-text'>Total Quizzes: {quizzes}</p>
            <p className='card-text'>Usuarios: {users}</p>
            <p className='card-text'>{companyCode}</p>
          </div>
          <div class="resources--center_buttons">
            <p class="counter_positive" id="countPositive3">{counter}</p>
            <button class="resources_button" id="buttonIncrese3" onClick={handleClick}>👍</button>
            <p class="counter_negative" id="countNegative3">{counter1}</p>
            <button class="resources_button" id="buttonNegative3" onClick={handleClick1}>👎</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsPopulate;