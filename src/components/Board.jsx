import React from 'react';
import Square from './Square';
import './Board.css';
import Table from './Table';



const quizList = [[[
        "./images/kabosu.png", "./images/kabosu.png", "./images/kabosu.png", "./images/kabosu.png"
    ], [
        "./images/sudati.png", "./images/sudati.png", "./images/sudati.png", "./images/sudati.png"
    ], [
        "./images/hebesu.png", "./images/hebesu.png", "./images/hebesu.png", "./images/hebesu.png"
    ], [
        "./images/aoyuzu.png", "./images/aoyuzu.png", "./images/aoyuzu.png", "./images/aoyuzu.png"
    ], [
        "かぼす"
    ]
    ], [[
        "./images/sudati.png", "./images/sudati.png", "./images/sudati.png", "./images/sudati.png"
    ], [
        "./images/kabosu.png", "./images/kabosu.png", "./images/kabosu.png", "./images/kabosu.png"
    ], [
        "./images/hebesu.png", "./images/hebesu.png", "./images/hebesu.png", "./images/hebesu.png"
    ], [
        "./images/aoyuzu.png", "./images/aoyuzu.png", "./images/aoyuzu.png", "./images/aoyuzu.png"
    ], [
        "すだち"
    ]
    ]];

let quizIndex = 0;
let quizNumber;
let score = 0;

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares : "",
            tab : "none"
        };
    };

    setUp(a) {
        let answerOrder1 = [];
        for(let j = 0; j < 4; j++){
            while(true){
            let tmp1 = intRandom(0, 3);
            if(!answerOrder1.includes(tmp1)){
                answerOrder1.push(tmp1);
                break;
            }
            }
        }

        let answerOrder2 = [];
        for(let k = 0; k < 4; k++){
            while(true){
            let tmp2 = intRandom(0, 3);
            if(!answerOrder2.includes(tmp2)){
                answerOrder2.push(tmp2);
                break;
            }
            }
        }

        function intRandom() {
            return Math.floor( Math.random() * 4);
        }
        this.setState({
            squares : [
                quizList[a][answerOrder1[0]][answerOrder2[0]],
                quizList[a][answerOrder1[1]][answerOrder2[1]],
                quizList[a][answerOrder1[2]][answerOrder2[2]],
                quizList[a][answerOrder1[3]][answerOrder2[3]],
            ]
        });
        quizNumber = a;
        this.setState({tab : "answer"});
    };

    renderSquare(i) {
        return (
            <Square 
              value = {this.state.squares[i]}
              onClick = {() => {this.handleClick(i)}} />
        );
    };



    handleClick(i) {
        loop: for (let m = 0; m < 1; m++) {
            for (let l = 0; l < quizList[quizNumber][0].length; l++) {
                if (this.state.squares[i] === quizList[quizNumber][0][l]) {
                    window.alert("正解");
                    score++;
                    break loop;
                }
            }
            window.alert("不正解");
        };

        quizIndex++

        if (quizIndex < 3) {
            this.setUp(quizNumber);
        } else {
            this.setState({tab : "result"});
        }
    };


    render() {
        return (
            <div className="Board">
                <div className="Board2">
                {(() => {
                if (this.state.tab === "none") {
                    return (
                        <div className="menu">
                            <Table onClick1={() => {this.setUp(0)}}
                            onClick2={() => {this.setUp(1)}} />
                        </div>)
                } else if (this.state.tab === "answer") {
                    return( 
                        <div>
                            <div className="dore">
                                <h1>{quizList[quizNumber][4]}はどれ？</h1>
                            </div>
                            <div className="answer">
                                <div className="answer1">{this.renderSquare(0)}
                                {this.renderSquare(1)}</div>
                                <div className="answer2">{this.renderSquare(2)}
                                {this.renderSquare(3)}</div>
                            </div>
                        </div>)
                } else {
                    return (
                        <div　className="result">
                            正解数は{score}点でした。
                        </div>
                    )
                }
                })()}
                </div>
                <footer>
                    <input className="btn1" type="image" src={"./images/home.png"} onClick={()=>{this.setState({tab : "none"})}}/>
                    <input className="btn2" type="image" src={"./images/config.png"} />
                </footer>
            </div>
            
        )
    }
};

export default Board;