import React from 'react'
import Courses from '.data.json'

const Home = () => {
	const [curso, setCurso] = useState([])
		const getCursos = async () => {
			setCurso(Courses)
		}
		useEffect(() => {
			getCursos()
			console.log(curso)
		},[curso])
  return (
	<div>Home</div>
  )
}

export default Home