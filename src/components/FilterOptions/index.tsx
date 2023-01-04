import * as Styled from "./style";

import imgPlanet from "../../assets/planet.svg";

export default function FilterOptions() {

    function handleSearch(e:any) {
        e.preventDefault();
        console.log('ola mundo')
    }

  return (
    <Styled.Container>
      <Styled.ContainerCheckbox>
        <input type="checkbox" />
        Tempo integral
      </Styled.ContainerCheckbox>

      <Styled.LocationSearch>
        <strong>Localiação</strong>
        <form onSubmit={(e):any => handleSearch(e)} >
          <img src={imgPlanet} alt="Search de pesquisa" onClick={handleSearch} />
          <input type="text" placeholder="cidade, estado, cep " />
        </form>
      </Styled.LocationSearch>

        <Styled.ListCity>

            <li>
                <input type="radio" name="radio" />
                São Paulo
            </li>

            <li>
                <input type="radio" name="radio" />
                Rio de Janeiro
            </li>
            
            <li>
                <input type="radio" name="radio" />
                Campo Grande
            </li>
            
            <li>
                <input type="radio" name="radio" />
                Brasilia
            </li>

        </Styled.ListCity>

    </Styled.Container>
  );
}
