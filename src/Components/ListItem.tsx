import { JokesTypes } from '../Interfaces';
import { JokeItem } from './JokeItem';
import { useDispatch } from "react-redux";
import styled from 'styled-components'
import { deleteItemAction } from '../store/Favorite/action'

const Div = styled.div`
display: flex;
margin: 20px;
`
const Span = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
@media (max-width: 500px) {
    flex-wrap: nowrap;
    flex-direction: column;
}
`
const SpanDelete = styled.span`
text-align: center;
color: #fff;
background: #db3a3a;
writing-mode: vertical-rl;
cursor: pointer; 
`

interface ListItemProps {
    jokeCart: JokesTypes[]
}

export const ListItem: React.FC<ListItemProps> = ({ jokeCart }) => {
    const dispatch = useDispatch();

    return (
        <>
            <Span>
                {jokeCart.map(i =>
                    <Div key={i.id}>
                        <JokeItem item={i} />
                        <SpanDelete onClick={() => dispatch(deleteItemAction(i.id))}>delete</SpanDelete>
                    </Div>
                )}
            </Span>
        </>
    );
}
