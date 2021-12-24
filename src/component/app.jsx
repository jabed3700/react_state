import React, {Component} from 'react'
import './app.style.css'

class App extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.count = 0
    // }

    // count = 0
    state = {
        count:0
    }
    render(){
        console.log(this.count);
        return <div className='App'>
            <h1>Lorem ipsum is testing</h1>
            <h1>Count: {this.state.count}</h1>

            <button onClick={()=>{
                // this.count++
                // this.setState({count:this.state.count+1})
                this.setState(prev=>{
                    return {
                        count:prev.count+1
                    }
                },()=>{
                console.log("clicked",this.state.count);
                })
            }}>All 1+</button>
        </div>
    }
}

export default App;