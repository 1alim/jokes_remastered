import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from '../store/reducers';

const Div = styled.div`
display: flex;
justify-content: space-between;
padding: 0px 40px;
background: #8c73f8;
margin-bottom: 20px;
a {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
   }
a:link {
    color: #fff;
   }
   a:visited {
    color: #fff;
   }
svg {
  display: flex;
  justify-content: center;
  align-items: center;
}
`
const DivCount = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 22px;
background: #f8737a;
border-radius: 50px;
margin-top: -45px;
`



export const Header = () => {
  const jokeCart = useSelector((state: RootState) => state.favoriteJokes.joke);

  return (
    <Div>
      <NavLink to={"/"}>
        <h1>
          jokes
        </h1>
      </NavLink>
      <NavLink to={"/cart"}>
        <svg height="44" id="svg8" version="1.1" viewBox="0 0 6.3499998 6.3500002" width="44" xmlns="http://www.w3.org/2000/svg" >
          <defs id="defs2" />
          <g id="layer1">
            <path fill="#fff" d="M 3.1867957,0.54991431 A 0.26001054,0.26929038 1.2739714e-6 0 0 2.9542519,0.69719198 L 2.2669552,2.1131264 0.75128557,2.330684 A 0.26001054,0.26929038 1.2739714e-6 0 0 0.60555784,2.7885373 L 1.693347,3.9031979 1.4235958,5.4622758 A 0.26001054,0.26929038 1.2739714e-6 0 0 1.7987667,5.7495969 L 3.1573403,5.0204423 4.5081619,5.7687171 A 0.26001054,0.26929038 1.2739714e-6 0 0 4.8864335,5.4865638 L 4.6389034,3.9233518 5.7416785,2.826261 A 0.26001054,0.26929038 1.2739714e-6 0 0 5.6000852,2.3658241 L 4.0880327,2.1275957 3.4198563,0.70132609 A 0.26001054,0.26929038 1.2739714e-6 0 0 3.2307208,0.55404842 0.26001054,0.26929038 1.2739714e-6 0 0 3.1867957,0.54991299 Z" id="path1242" />
          </g>
        </svg>
        {!!jokeCart.length && <DivCount>{jokeCart.length}</DivCount>}
      </NavLink>
    </Div>
  );
}