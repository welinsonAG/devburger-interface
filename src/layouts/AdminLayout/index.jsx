
import { Outlet, Navigate } from 'react-router-dom';
import { Container } from './styles';
import { SideNavAdmin } from '../../components/SideNavAdmin';

export function AdminLayout() {
  const storedUser = localStorage.getItem('devburger:userData');

  const user = storedUser ? JSON.parse(storedUser) : null;

  const isAdmin = user?.admin;
 console.log("USER:", user);
console.log("ISADMIN:", isAdmin);

  return isAdmin ? (
    <Container>
      <SideNavAdmin />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  ) : (
    <Navigate to="/login" />
  );
}
