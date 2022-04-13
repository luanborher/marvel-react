import { Close, HeaderNavbar, Image, Links, Logo } from './styles';
import ButtonLink from '../Button';

interface Props {
  active: string;
}

const Navbar = ({ active }: Props) => (
  <HeaderNavbar>
    <Logo
      src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo.png"
      alt="logotipo da marvel"
    />
    <div>
      <Links>
        <ButtonLink active={active === 'Filmes'} route="Filmes">
          FILMES E SÉRIES
        </ButtonLink>
        <ButtonLink active={active === 'Personagens'} route="Personagens">
          PERSONAGENS
        </ButtonLink>
        <Close>
          <Image
            src="https://i.pinimg.com/originals/a1/4d/cf/a14dcf617c862170e1808db56ea12dc3.png"
            alt="perfil"
            style={{ backgroundColor: '#fff', borderRadius: '50%' }}
          />
          <ButtonLink active={active === ''} route="">
            SAIR
          </ButtonLink>
        </Close>
      </Links>
    </div>
  </HeaderNavbar>
);

export default Navbar;
