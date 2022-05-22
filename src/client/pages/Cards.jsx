import React, {Component} from "react"
import Card from "./CardUI"
import person1 from "../Components/image/person1.jpg"
import person2 from "../Components/image/person2.jpg"
import person3 from "../Components/image/person3.jpg"

class Cards extends Component{
    render(){
        return(
            <div className={"container-fluid d-flex justify-content-center"}>
                <div className={"row"}>
                    <div className={"col-md-4"}>
                        <Card imgsrc={person1} title={"Ralph Johnson"} sectitle={"BAKER"}/>
                    </div>
                    <div className={"col-md-4"}>
                        <Card imgsrc={person2} title={"Jane Zafron"} sectitle={"CONFECTIONER"}/>
                    </div>
                    <div className={"col-md-4"}>
                        <Card imgsrc={person3} title={"Hanna Mcallister"} sectitle={"DESIGNER"}/>
                    </div>
                </div>
            </div>
        );

}
}

export default Cards;