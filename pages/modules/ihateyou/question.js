import { useState, useEffect } from "react";
import { getRandomQuestions } from "./cyberbully"
import styles from '../Quiz.module.css';
import classes from "../Quiz.module.css";


const Question = ({data, currentQuestionIndex, selectAnswer }) => {
	if (!data) {
		return null;
	}

	return (
		<div>
			{JSON.stringify(data)}
		</div>
	)
	const [selectedChoice, setSelectedChoice] = useState();
	const [disabledChoices, setDisabledChoices] = useState(false);

	useEffect( () => {
		setSelectedChoice(null);
		setDisabledChoices(false);
	}, [data])

	const onChoiceSelect = (choice) => {
		setSelectedChoice(choice.id);
		selectAnswer(choice.id);
		setDisabledChoices(true);
	}; 

	const renderChoice = (choice, index) => {
		let className = '';
		if (selectedChoice === choice.id) {
			className = choice.id === data.correctAnswer ? 'text-green' : 'text-red';
		}
		if (selectedChoice && choice.id == data.correctAnswer) {
			className = 'text-green';
		
		}
		return (
			<button onClick={() => onChoiceSelect(choice)} className={className} key={choice.id} disabled={disabledChoices}></button>
		)
	}
 	
	//CLASSES 4 STYLING - DW AB THAT RN 
	//let class.correctAnswer = text.green
	return (
		<div>
			<p>{currentQuestionIndex}</p>
			<p>{data.question}</p>
			<button className="flex flex-col">
				{data.choices.map((choices, index) => renderChoice(choice,index))}
			</button>
			{/* //{renderExplanation()} */}
		</div>


	)
		

	}
export default Question;