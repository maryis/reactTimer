import React from 'react'
import TimerSample from "./myTimer";



class Loops extends React.Component {
    constructor(props)
{
    super(props);
    this.state = {
        colors: [1, 2, 3, 4]
    };
}

   func =(prevState) =>
{
    this.setState(this.prevState.colors.push(5));

}
        render(){
        return(
            <div>
                <ul>
                    {
                        this.state.colors.map((item,index)=> {
                            return (
                                <li key={index} > { item } </li>
                            )
                        })
                    }
                </ul>
                <button  onClick={this.func}>
add kjhkj
                </button>
            </div>
        );
    }
}

export default Loops;