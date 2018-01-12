import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Container from '../components/container'
import styles from './index.module.css'

const LogoText = () => (
  <span style={{ fontWeight: '600', color: '#fff', textTransform: 'uppercase', marginLeft: '10px' }}>JeroenSlor</span>
)

const LogoIcon = () => (
  <svg width='39px' height='37px' viewBox='0 0 39 37' version='1.1' xmlns='http://www.w3.org/2000/svg'>
    <g id='Branding' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='3' x='1.5' y='1.5' width='36' height='34'></rect>
      <text id='JS' fontFamily='SourceSansPro-Bold, Source Sans Pro' fontSize='16' fontWeight='bold' fill='#FFFFFF'>
        <tspan x='12.48' y='27'>JS</tspan>
      </text>
    </g>
  </svg>
)

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <LogoIcon />
    <LogoText />
  </div>
)

const NavItem = ({ text, link }) => (
  <li style={{ margin: '0 0 0 30px', padding: 0 }}>
    <a className={styles.navItem__link} href={link}>{text}</a>
  </li>
)

const Nav = () => (
  <ul className={styles.nav}>
    <NavItem text='about' link='#' />
    <NavItem text='projects' link='#projects' />
    <NavItem text='contact' link='#contact' />
  </ul>
)

const Header = () => (
  <header className={styles.header}>
    <Logo />
    <Nav />
  </header>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='Jeroen Slor | Freelance JavaScript Developer'
      meta={[
        { name: 'description', content: 'Jeroen Slor, Freelance JavaScript Developer' }
      ]}
    />
    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
