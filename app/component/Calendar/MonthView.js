import React from "react";
import cn from "classnames";
export default class MonthView extends React.Component{
    constructor(){
        super();
    }
    showMonth(){
        var year = this.props.year;
        var month = this.props.month;
        var day = this.props.day;
        //本月第一天是周几
        var firstDayWeek = new Date(year,month,1).getDay();
        //本月共有多少天
        var totalDay = new Date(year,month+1,0).getDate();
        //上月共有多少天
        var lastTotlDay = new Date(year,month,0).getDate();
        var dateArr = [];
        while(firstDayWeek--){
            dateArr.unshift({
                day:lastTotlDay,
                prev:true
            });
            lastTotlDay--;
        }
        var count = 1;
        while(totalDay){
            dateArr.push({
                day:count++,
                current:true
            });
            totalDay--;
        }
        var count =1 ;
        while(dateArr.length<42){
            dateArr.push({
                day:count++,
                next:true
            });
        }
        var domArr = [];
        for(var i=0;i<dateArr.length/7;i++){
            domArr.push(<tr key={i}>
                {
                    dateArr.slice(i*7,i*7+7).map((item,index)=>{
                        return <td key={index} className={cn({
                            "prevDay":item.prev,
                            "currentDay":item.current,
                            "nextDay":item.next,
                            "today":item.day==day&&year==new Date().getFullYear()&&month==new Date().getMonth()})}>{item.day}</td>
                    })
                }
            </tr>);
        }
        return domArr;
    }
    render(){
        return <div>
            <table>
                <tbody>
                    <tr className="title">
                        <td>日</td>
                        <td>一</td>
                        <td>二</td>
                        <td>三</td>
                        <td>四</td>
                        <td>五</td>
                        <td>六</td>
                    </tr>
                    {this.showMonth()}
                </tbody>
            </table>
        </div>
    }
}