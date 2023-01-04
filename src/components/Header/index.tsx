import { Link } from "react-router-dom";
import * as Styled from "./style";

export default function Header() {
  return (
    <Styled.Container className="center">
      <Link to="/">
        <strong>Github</strong>
        Jobs
      </Link>
    </Styled.Container>
  );
}
