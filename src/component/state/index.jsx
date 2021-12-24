import React from "react";
import './state.style.css'

class State extends React.Component{
    state={
        count:0,
        name:'jabed',
        age:27
    }
    render(){
        return(
            console.log(this.state),
            <div className="Container">
                <h1>Understand React State</h1>
                <p style={{marginTop:'50px'}}>Count: {this.state.count}</p>
              
                <button onClick={()=>{
                    // this.setState({count:this.state.count+1,name:'sabura'})
                    // this.setState(prev=>{
                    //     return {
                    //         count:prev.count+1,
                    //         age:prev.age+3
                    //     }
                    // })
                    // console.log('Clicked',this.state.count)
                    // console.log(this.state)
                    
                    // with asyn 
                    this.setState(prev=>{
                        return {
                            count:prev.count+1,
                            age:prev.age+3
                        }
                    },()=>{
                        console.log('Clicked',this.state.count)
                    })
                  

                }}>Add 1</button>
            </div>
        )
    }
}

export default State;