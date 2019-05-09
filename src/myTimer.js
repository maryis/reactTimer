import React from 'react'
import './App.css';


class TimerSample extends React.Component {


    constructor(props){
        super(props);
        this.state={cnt: parseInt(this.props.count)};//first call of state :definition
        console.log('construct');
        //this.props.count=2;  //props are readonly

    }
    componentDidMount()
    {
        //you can not setstate before mounting
        this.timer = setInterval(this.counting.bind(this), 1000);
        console.log('didMount');

    }

    counting() {
        let cnt=this.state.cnt;
        this.setState({cnt: cnt+1});
        console.log('counting');

    }

    render() {
        console.log('render');
        let count=this.state.cnt;
        return (
            <div className="pretty" >
                The Counter : {count}
            </div>
        );
    }
}

export default TimerSample;