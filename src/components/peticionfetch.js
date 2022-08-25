import { useEffect, useState } from 'react'
import CardsPopulate from '../components/cards'

function PeticionApi() {
  const [course, setcourse] = useState([])
  const API_URL = 'https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories'

  function getCoursesApi() {
    return new Promise((resolve, reject) => {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          resolve(data.communityCategories)
        })
    })
  }

  async function requestApi() {
    const courses = await getCoursesApi()
    setcourse(courses)
    console.log(courses)
  }

  useEffect(() => {
    requestApi()
  }, [])

  return (

    <div className="peticion">
      {
        course.map(course => {
          return <CardsPopulate
            name={course.name}
            companyCode={course.companyCode}
            logo={course.logo}
            users={course.users}
            quizzes={course.totalQuizzes}
            background={course.background}
            key={course.id}
          />
        })
      }
    </div>


  )
}

export default PeticionApi;