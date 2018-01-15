import React from "react";
export default class YearView extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
            <div>
                <button className="lastBtn" onClick={()=>{this.props.changeMonthView(this.props.month-1)}}>&lt;</button>
                <p className="yearMonth">
                    <button onClick={()=>{this.props.showWho("year")}}>{this.props.year}年</button>
                    <button onClick={()=>{this.props.showWho("totalMonth")}}>{this.props.month+1}月</button>
                </p>
                <button className="nextBtn"  onClick={()=>{this.props.changeMonthView(this.props.month+1)}}>&gt;</button>
            </div>
        </div>
    }
}