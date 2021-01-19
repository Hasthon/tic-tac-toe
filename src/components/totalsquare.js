
import React, { useState } from 'react';
import { Name } from './nombres';
import { Square } from './square';
import { WinninLogic } from './winner';


function Game() {
    const [squares, setSquare] = useState(Array(9).fill(null));
    const [isXNext, setXnext] = useState(true);
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [ocultar, setOcultar] = useState(false);

    function PrimerPlayer() {
        setOcultar(true)
        setPlayer1(setXnext(!isXNext));
    }

    function SegundoPlayer() {
        setOcultar(true)
        setPlayer2(setXnext(!isXNext));
    }


    const winningInfo = WinninLogic(squares);
    const winner = winningInfo.winner;

    const winnerHighlight = winningInfo.line;
    let status;
    if (winner) {
        status = "The Winner is " + winner;
    }
    else if (winningInfo.isDraw) {
        status = "No Winner "
    }
    else {
        status = "Next player is " + (isXNext ? 'x' : 'O');
    }
    function renderSquare(i) {
        return (<Square
            onClick={() => {
                const nextSquare = squares.slice();
                nextSquare[i] = isXNext ? 'X' : 'O';
                setXnext(!isXNext);
                setSquare(nextSquare);
            }}
            value={squares[i]}
            highlightWinner={winnerHighlight && winnerHighlight.includes(i)}
        />
        );
    }
    return (
        <>
            <div className="titulo">
                <p>TicTacToe Cat</p>
            </div>
            <div className="subtitulo">
                <p>Pick a Weapon</p>
            </div>
                <Name startPlayer1={PrimerPlayer} startPlayer2={SegundoPlayer} ocultar={ocultar} />
                {ocultar ? <div className="botones">
                    <div className="status">{status}</div>
                    <div className="board-row">
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {renderSquare(3)}
                        {renderSquare(4)}
                        {renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {renderSquare(6)}
                        {renderSquare(7)}
                        {renderSquare(8)}
                    </div>
                </div> : null
                }
        </>
    );
}

export default Game;
