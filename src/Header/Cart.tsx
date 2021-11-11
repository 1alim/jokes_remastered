import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../store/reducers';
import styled from 'styled-components'
import { clearFavorite } from '../store/Favorite/action'
import { ListItem } from "../Components/ListItem";

const Div = styled.div`
text-align: center;
width: 200px;
height: 25px;
background: #f35757;
color: #fff;
cursor: pointer; 
`

export const Cart = () => {
    const jokeCart = useSelector((state: RootState) => state.favoriteJokes.joke);
    const dispatch = useDispatch();

if (!jokeCart.length) {
    return <h1>there is nothing</h1>
}
    return (
        <div >
            <Div onClick={() => dispatch(clearFavorite())}>delete all</Div>
            <ListItem jokeCart={jokeCart} />
        </div>
    );
}

