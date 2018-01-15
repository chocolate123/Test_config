import React,{Component} from "react";
import Calendar from "./Calendar/Calendar";
export default class App extends Component{
    constructor(){
        // 初始化this
        super();
    }
    render(){
        return <div>
           <Calendar></Calendar>
        </div>
    }
}
