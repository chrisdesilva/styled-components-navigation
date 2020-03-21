import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"

const DesktopNavMenu = () => {
  const [background, setBackground] = useState(false)
  const navRef = useRef()

  navRef.current = background
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 20
      if (navRef.current !== show) {
        setBackground(show)
      }
    }
    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <StyledHeader background={background}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/merch">Merch</Link>
        </li>
        <li>
          <Link to="/about">Contact</Link>
        </li>
      </ul>
    </StyledHeader>
  )
}

export default DesktopNavMenu

const StyledHeader = styled.header`
  display: none;
  @media ${breakpoints.lg} {
    display: flex;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
    padding: 0.5rem;
    transition: background 300ms;
    background: ${({ background }) => (background ? "#000" : "blue")};

    ul {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-around;
      margin: 0;

      li {
        list-style: none;

        a {
          text-decoration: none;
          color: white;
          transition: color 300ms;

          :hover {
            color: red;
          }
        }
      }
    }
  }
`
