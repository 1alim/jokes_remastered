import { useSelector, useDispatch } from "react-redux";
import { addJoke } from "../store/Joke/action";
import { RootState } from "../store/reducers";
import { favoriteJoke } from "../store/Favorite/action";
import { JokeItem } from "../Components/JokeItem";
import styled from "styled-components";
import { useInterval } from "../utils/useInterval";

const DivWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`
const Button = styled.button`
  border-radius: 3px;
  width: 100px;
  height: 30px;
  color: #fff;
  background: #f78f8f;
  margin: 5px;
  cursor: pointer; 
`;

export const Main = () => {
  const dispatch = useDispatch();
  const { joke } = useSelector((state: RootState) => state.joke);
  const timer = useInterval(() => dispatch(addJoke()), 1000)

  return (
    <DivWrap> 
      <Div>
        <Button onClick={() => dispatch(addJoke())}>get joke</Button>
        <Button onClick={() => timer?.addInterval()}>interval joke</Button>
        <Button onClick={() => { joke && dispatch(favoriteJoke(joke)) }}>To Favorite</Button>
      </Div>
      {console.log(joke)}
      <div>
        {joke && (
          <JokeItem width={'80vw'} item={joke} />
        )}
      </div>
    </DivWrap>
  );
};
