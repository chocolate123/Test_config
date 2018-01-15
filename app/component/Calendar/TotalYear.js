import React from "react";
import cn from "classnames";
export default class TotalYear extends React.Component{
    constructor(){
        super();
    }
    changeYearView(year){
        this.props.changeYear(year);
        this.props.showWho("month");
    }
    allYear(){
        var domArr=[];
        var startYear = this.props.year - this.props.year % 10 - 10;
        for(let i=0;i<10;i++){
            var tds = [];
            for(let j=0;j<3;j++){
                //一定要用const定义
                const year = startYear+j*10+i;
                tds.push(<td key={j} className={cn({"today":year==this.props.year})} onClick={()=>{this.changeYearView(year)}}>{year}</td>)
            }
            domArr.push(<tr key={i}>{tds}</tr>)
        }
        return domArr;
    }
    render(){
        return <div>
           <div className="yearView">
                <table>
                    <tbody>
                        {this.allYear()}
                    </tbody>
                </table>
           </div>
        </div>
    }
}