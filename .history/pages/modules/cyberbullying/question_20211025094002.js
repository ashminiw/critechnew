import { useState, useEffect } from "react";
import { getRandomQuestions } from "./cyberbully"


const question = ({data, currentQuestionIndex, selectAnswer }) => {
	const [selectedChoice, setSelectedChoice] = useState();
	const [disabledChoices, setDisabledChoices] = useState(false);
	const classes = useStyles();
	

}
export default question;