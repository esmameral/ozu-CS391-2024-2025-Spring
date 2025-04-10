import { Nav, NavItem, NavLink } from "reactstrap";
export default function MenuItems(){
    return  <Nav>
    <NavItem>
      <NavLink href="/">Home</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/pages/About">About</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/pages/Contact">Contact</NavLink>
    </NavItem>
  </Nav>
}