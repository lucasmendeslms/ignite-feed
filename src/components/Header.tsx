import headerStyles from './css/Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className={headerStyles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </header>
  )
}