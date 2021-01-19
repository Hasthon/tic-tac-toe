import React from 'react';
import PropType from "prop-types";

export const Name = (props) => {
    return (<>
        <div className={"containerdos " + (props.ocultar ? 'd-none' : '')}>
            <div className="choose">Pick a Weapon  <i class="fas fa-paw"></i></div>
            <div className="row">
                <div className="input1">
                    <input type="text" class="form-control" placeholder="Miaow!" onChange={props.player1Name} />
                </div>
                <div className="input2" >
                    <input type="text" class="form-control" placeholder="Purr!" onChange={props.player1Name} />
                </div>
            </div>

            <div className="container3">
                <div className="button row">
                    <div className="button1">
                        <button className="btn  btn-l"><i className="fas fa-times" onClick={props.startPlayer1}></i></button></div>
                    <div className="button2">
                        <button className="btn  btn-l" ><i className="far fa-circle" onClick={props.startPlayer2}></i></button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
};