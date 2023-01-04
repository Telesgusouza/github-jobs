import * as Styled from './style';

import Header from "../../components/Header"
import Search from "../../components/Search"
import FilterOptions from '../../components/FilterOptions';
import WorkList from '../../components/WorkList';

export default function JobList() {

    return (
        <div>
            <Header />
            <Search />
            <Styled.ContainerContent>
                <FilterOptions />
                <WorkList />
            </Styled.ContainerContent>
        </div>
    )
}