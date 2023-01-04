import * as Styled from "./style";
import searchImg from '../../assets/searchWork.svg';

// searchWork

export default function Search() {

    function handleSearch(e:any) {
    e.preventDefault()
    console.log("ola mundo");
  }

  return (
    <Styled.Container>
      <form onSubmit={(e):any => handleSearch(e)}>
        <div>
            <img src={searchImg} alt="barra de sarch" />
            <input type="text" placeholder="Title, companies, expertise or benefits" />
        </div>
        <button>Pesquisar</button>
      </form>
    </Styled.Container>
  );
}
