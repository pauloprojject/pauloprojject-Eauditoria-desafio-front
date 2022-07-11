import { Menu } from 'antd';

export function NavBar({Current, SetCurrent}) {

  const onClick = (e) => {
    SetCurrent(e.key);
  };

  return(
    <div className="headerConteiner">
      <Menu mode="horizontal" onClick={onClick} selectedKeys={[Current]}>
        <Menu.SubMenu title="Crud" key="crud">
          <Menu.Item key="cliente">
            Cliente
          </Menu.Item>
          <Menu.Item key="filme">
            Filme
          </Menu.Item>
          <Menu.Item key="locacao">
            Locação
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title="Relatórios" key="relatorios">
          <Menu.Item key="cliAtr">
            Clientes em atraso
          </Menu.Item>
          <Menu.Item key="filNunc">
            Filmes nunca alugados
          </Menu.Item>
          <Menu.Item key="cinco">
            Cinco filmes mais alugados no ano
          </Menu.Item>
          <Menu.Item key="tres">
            Três filmes menos alugados semana
          </Menu.Item>
          <Menu.Item key="segundo">
            Segundo cliente que mais alugou
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  );
}