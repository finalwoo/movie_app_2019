import React from 'react';
import PropTypes from "prop-types";

function Food({ name, image, rating }) {
    return (
        <div>
            <h2>title</h2>
            <h3>Favorite Food {name}</h3>
            <h4>{rating}/5.0</h4>
            <div className="image">
                <img src={image} alt={name + '사진'} width="200px" />
            </div>
        </div>
    )
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired
}

const foodMenu = [
    {
        id: 1,
        name: "김밥",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F03%2F15%2F08%2F02%2Ffood-1257054_960_720.jpg&f=1&nofb=1",
        rating: 5
    },
    {
        id: 2,
        name: "라면",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimage.chosun.com%2Fsitedata%2Fimage%2F201710%2F25%2F2017102501680_0.jpg&f=1&nofb=1",
        rating: 4.5
    },
    {
        id: 3,
        name: "비빔밥",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F6QQ67F8y2b8%2Fmaxresdefault.jpg&f=1&nofb=1",
        rating: 5.5
    },
    {
        id: 4,
        name: "돈까스",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcfile6.uf.tistory.com%2Fimage%2F2116093F58367AE114E6CB&f=1&nofb=1",
        rating: 4.2
    },
    {
        id: 5,
        name: "갈비찜",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F151018444FFEB24014&f=1&nofb=1",
        rating: 3.6
    }
];
/*
function renderFood(menu) {
    return <Food key={menu.id}image={menu.image} />
}
*/
function App() {
    return (
        <div className="App">
            {
                foodMenu.map(menu => <Food key={menu.id} name={menu.name} image={menu.image} rating={menu.rating}
                />)
                // foodMenu.map(renderFood)
            }

            </div>
    )
}



export default App;
