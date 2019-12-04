import React from 'react';
import PropTypes from "prop-types";

// state 는 오브젝트이고 component의 data를 넣을 공간이며 data는 변함
class App extends React.Component{
    constructor(props){ // 시작전 호출되며 super 를 사용해야함. 리액트가 아닌 자바스크립트임
        super(props)
        console.log("1.constructor() : render 전에 실행됨"); 
    }
    state = {
        count: 0 // 바뀔데이터
    }
    add = () => {
        this.setState(current => ({count:current.count + 1})) //good , state를 set할때 외부의 상태에 의존하지않는 방법
    };
    minus = () => {
        this.setState({count:this.state.count - 1}) // not good
    };
    componentDidMount(){
        console.log("3.componentDidMount() : component rendered reder() 이후 호출")
    }
    componentDidUpdate(){
        console.log("4.componenetDidUpdate() : 업데이트가 되면 실행")
    }
    componentWillUnmount() {
        console.log("5.componenetWillUnmount() : 컴포넌트가 끝날때 실행됨")
    }
    render(){
        console.log("2.render() : i'm rendering")
        return <div>
                <h1>The count number is : {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        
    }
}

export default App;
