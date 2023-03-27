import React from 'react'
import styled from 'styled-components'


function Header() {
  return (
    <Nav>
      <Logo src='/images/logo.svg'/>
      <NavMenu>
        <a href="#">
          <img src="/images/home-icon.svg" alt="home-icon" />
          <span>home</span>
        </a>
        <a href="#">
          <img src="/images/search-icon.svg" alt="home-icon" />
          <span>Search</span>
        </a>
        <a href="#">
          <img src="/images/watchlist-icon.svg" alt="home-icon" />
          <span>watchlist</span>
        </a>
        <a href="#">
          <img src="/images/original-icon.svg" alt="home-icon" />
          <span>original</span>
        </a>
        <a href="#">
          <img src="/images/movie-icon.svg" alt="home-icon" />
          <span>movies</span>
        </a>
        <a href="#">
          <img src="/images/series-icon.svg" alt="home-icon" />
          <span>series</span>
        </a>
      </NavMenu>
      <UserImg src='https://images.unsplash.com/photo-1549533948-44b7a43e2db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'/>

    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    align-items: center;
    text-decoration: none;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      color: #fff;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        background: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`