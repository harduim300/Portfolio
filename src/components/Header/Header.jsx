import { useState } from 'react';
import { scrollToId } from '../../handlers/scrollToId';
import style from './Header.module.scss';
import fotoPerfil from '/perfil.png';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import MailIcon from '@mui/icons-material/Mail';
import { ListItemIcon } from '@mui/material';

const menuOptions = [
    { label: 'Home', id: 'home-main', icon: <HomeIcon /> },
    { label: 'Sobre Mim', id: 'about-me', icon: <PersonIcon /> },
    { label: 'Projetos', id: 'projects', icon: <BuildIcon /> },
    { label: 'Contato', id: 'email-form', icon: <MailIcon /> },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (id) => {
    setAnchorEl(null);
    if (id) {
      scrollToId(id);
    }
  };

  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.logo}>
          <img className={style.logoPerfil} src={fotoPerfil} alt="Foto de perfil" />
          <h1>MCH</h1>
        </div>

        {/* Menu Desktop */}
        <nav className={style.menu_nav}>
          <ul className={style.menu_list}>
            {menuOptions.map((item) => (
              <li key={item.id}>
                <button onClick={() => scrollToId(item.id)}>{item.label}</button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu Mobile */}
        <div className={style.menu_mobile}>
          <IconButton
            aria-label="menu"
            aria-controls={open ? 'mobile-menu' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon sx={{ color: 'white' }} />
          </IconButton>
          <Menu
            id="mobile-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => handleClose()}
          >
            {menuOptions.map((item) => (
              <MenuItem key={item.id} onClick={() => handleClose(item.id)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
