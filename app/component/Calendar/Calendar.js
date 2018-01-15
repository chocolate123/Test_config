import React,{Component} from "react";
import MonthView from "./MonthView";
import YearView from "./YearView";
import TotalYear from "./TotalYear";
import ControllYear from "./ControllYear";
import TotalMonth from "./TotalMonth";
export default class Calendar extends Component{
    constructor(){
        super();
        this.state={
            year:new Date().getFullYear(),
            month:new Date().getMonth(),
            day:new Date().getDate(),
            isShow:"month"
        }
    }
    //改变日历的视图
    changeMonthView(month){
        if(month<0){
            this.setState({
                month:11,
                year:this.state.year-1
            })
        }else if(month>11){
            this.setState({
                month:0,
                year:this.state.year+1
            })
        }else{
            this.setState({
                month:month
            })
        }
    }
    //改变日历的年份
    changeYear(year){
        this.setState({
            year
        })
    }
    //改变日历月份
    changeMonth(month){
        this.setState({
            month
        })
    }
    showWho(v){
        this.setState({
            isShow:v
        })
    }
    isShowView(){
        var {year,month,day} = this.state;
        if(this.state.isShow == "month"){
            return <div>
                <YearView year={year} 
                          month={month} 
                          changeMonthView={this.changeMonthView.bind(this)}
                          showWho={this.showWho.bind(this)}></YearView>
                <MonthView year={year} month={month} day={day}></MonthView>
            </div>
        }else if(this.state.isShow == "year"){
            return <div>
                 <ControllYear year={year} changeYear={this.changeYear.bind(this)}></ControllYear>  
                 <TotalYear year={year}
                            changeYear={this.changeYear.bind(this)}
                            showWho={this.showWho.bind(this)}
                 ></TotalYear>
            </div>
        }else if(this.state.isShow == "totalMonth"){
           return <div>
                <TotalMonth month={month} 
                            showWho={this.showWho.bind(this)}
                            changeMonth={this.changeMonth.bind(this)}
                            ></TotalMonth>
           </div>
        }
    }
    render(){
        return <div className='calendar'>  
            <div className="myCalendar">chocolate的小日历</div>
            {this.isShowView()}
        </div>
    }
}