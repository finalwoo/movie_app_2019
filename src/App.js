import React from 'react';

function Movie({name, papapa}) {
    return (
        <div>
        <h2>title</h2>
        <h3>Movie Start {name} : {papapa}</h3>
        </div>
    )
    
}

function App() {
    return (
        <div className="App">
            <h1>Hello!!</h1>
            <Movie 
                name="겨울왕국2" 
                something={true}
                papapa={["hello", 1]}
            />
            <Movie 
                name="나를찾아줘" 
                something={true}
                papapa={["bye",  2]}
            />
            <Movie 
                name="블랙머니" 
                something={true}
                papapa={["see you", 3]}
            />
        </div>
    )
}

 

export default App;
