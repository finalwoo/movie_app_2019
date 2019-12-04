import React from 'react';
import PropTypes from "prop-types";

// state 는 오브젝트이고 component의 data를 넣을 공간이며 data는 변함
class App extends React.Component{
    state = {
        count: 0 // 바뀔데이터
    }
    add = () => {
        this.setState(current => ({count:current.count + 1})) //good , state를 set할때 외부의 상태에 의존하지않는 방법
    };
    minus = () => {
        this.setState({count:this.state.count - 1}) // not good
    };
    render(){
        return <div>
                <h1>The count number is : {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        
    }
}

export default App;
