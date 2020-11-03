import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

const Item = styled.li`
  width: 80px;
  height: 100%;
`;

const SLink = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid
    ${({ current }) => (current ? "#379979" : "transparent")};
`;

const Header = ({ location: { pathname } = {} }) => (
  <SHeader>
    <List>
      <Item>
        <SLink to="/" $current={pathname === "/"}>
          Movies
        </SLink>
      </Item>
      <Item>
        <SLink to="/tv" $current={pathname === "/tv"}>
          TV
        </SLink>
      </Item>
      <Item>
        <SLink to="/search" $current={pathname === "/search"}>
          search
        </SLink>
      </Item>
    </List>
  </SHeader>
);

export default withRouter(Header);
