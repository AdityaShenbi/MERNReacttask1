import {Component} from "react";
export class C1 extends Component{
    constructor(props){
        super(props)
        this.state = {wordCount:0, secondValue:""};
    }
    handleChange =(event) =>{
        this.setState({
            secondValue: event.target.value,
            wordCount: event.target.value === '' ? 0 : this.state.secondValue.split(' ').length
        })
    }
    render(){
        return(
            <div style={{textAlign:"center"}}>
                <h2>Responsive Paragraph Word Counter</h2>
                <textarea rows = "10" cols = "50"placeholder="Enter you name" onChange={this.handleChange}/>
                <p>Word count: {this.state.wordCount}</p>
            </div>
        )
    }
}
