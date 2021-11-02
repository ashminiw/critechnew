import { useState, useEffect } from "react";
import { getRandomQuestions } from "./cyberbully"
import Question from "./question"

const Quiz = () => {
	const [questions, setQuestions] = useState([]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [nextQuestionVisible, setNextQuestionVisible] = useState(false);
	const [resultsVisible, setResultsVisible] = useState(false);
	const [score, setScore] = useState(0);

	useEffect( () => {
		const fetchQuestions = async () => {
			const questions = await getRandomQuestions();
			setQuestions(questions);
		};
		fetchQuestions();

	}, []);

	const selectAnswer = (choiceId) => {
		if (currentQuestion.correctAnswer === choiceId) {
			setScore(score+1);
		}
		if (currentQuestionIndex + 1 !== questions.length){
			setNextQuestionVisible(true);
		}
		else{
			setResultsVisible(true);
		}
	}

	const renderQuizResults = () => {
		if (resultsVisible) {
			const percentage = ((score/questions.length)+ 100).toFixed(1);
			return (
				<div>
				<p>Congrats! You got {score} out of {questions.length} ({percentage}%) correct! </p>
				</div>
			)
		}
	}

	const currentQuestion = questions[currentQuestionIndex];

	return(
		<div>
			<Question data={currentQuestion} currentQuestion={currentQuestionIndex + 1} />
		</div>
	)

}

export default Quiz;