import React from 'react';
// import './App.css';
import Quiz from './quizcomp/QuizMain';

// function App() {
//   return (
//     <div className="App">
//       <Quiz />
//     </div>
//   );
// }

// export default App;


import Header from '../../../components/Header';
import "tailwindcss/tailwind.css"


function Please() {
	const { user } = useAuth();
	return (
		<div className="flex flex-col min-h-screen bg-green-500">
			<Head><title> Critech|Feed </title></Head>
			<Header/>
			<Quiz/>
	
		</div>
	)
}

export default Please