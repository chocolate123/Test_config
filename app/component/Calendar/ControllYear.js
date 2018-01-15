import React from "react";
export default class ControllYear extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
                <button className="lastBtn" onClick={()=>{this.props.changeYear(this.props.year-1)}}>&lt;</button>
                <p className="yearMonth">
                    <button>{this.props.year}年</button>
                </p>
                <button className="nextBtn"  onClick={()=>{this.props.changeYear(this.props.year+1)}}>&gt;</button>
        </div>
    }
}