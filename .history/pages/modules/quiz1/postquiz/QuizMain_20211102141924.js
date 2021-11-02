import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link'
  

class Quiz extends Component {

    // initiating the local state
    
    state = {
        quiestions: {
            1: 'How do you stand up to cyberbullying?',
            2: 'How can parents help?',
            3: 'When should someone seek police assistance or medical attention?'
        },
        answers: {
            1: {
                1: 'Tell a parent',
                2: 'Ignore it',
                3: 'Laugh'
            },
            2: {
                1: 'Dont speak to other parents',
                2: 'Never check the school website',
                3: 'Keep open lines of communication'
            },
            3: {
                1: 'There are threats of hate violence, such as racism or homophobia',
                2: 'There are serious bodily injuries.',
                3: 'A and B'
            }
        },
        correctAnswers: {
            1: '1',
            2: '3',
            3: '3'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }
    // var router = useRouter();

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }
    

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
          
            <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                            <p>Thank you!</p>
                            {/* <btn onClick={() => router.push('../cyberbullying/content')}>CONTENT PAGE</btn> */}
                            <Link href="../cyberbullying/end">
                            <a>About Us</a>
                            </Link>
                        </div>
                    )
                }
            </div>
        );
    }
}
export default Quiz;