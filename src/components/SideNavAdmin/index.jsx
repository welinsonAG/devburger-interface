import { navLinks } from './navLinks';
export function SideNavAdmin() {
  return (
    <Container>
      <img src={Logo} alt="Hamburger Logo DevBurger" />
      <NavLinkContainer>
        {navLinks.map((link) => (
          <NavLink key={link.id} to={link.path}>
            {' '}
            {link.label}
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <navLinks>
          
        </navLinks>
      </Footer>
    </Container>
  );
}
