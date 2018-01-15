import React from "react";
export default class TotalMonth extends React.Component{
    constructor(){
        super();
    }
    getAllMonth(){
        var count=1;
        var trs=[];
        for(let i=0;i<6;i++){
            var tds=[];
            for(let j=0;j<2;j++){
                tds.push(<td key={count} data-id={count}>{count++}</td>)
            }
            trs.push(<tr key={i}>{tds}</tr>)
        }
        return trs;
    }
    render(){
        return <div>
           <table className="allMonth" ref="month">
               <tbody>
                    {this.getAllMonth()}
               </tbody>
           </table>
        </div>
    }
    componentDidMount(){
        //备份this
        var self = this;
        $(this.refs.month).delegate("td","click",function(){
           var month = $(this).data("id");
           self.props.changeMonth(month-1);
           self.props.showWho("month");
        })
    }
}