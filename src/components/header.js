import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import DesktopNavMenu from "./DesktopNav"
import MobileNavMenu from "./MobileNav"

const Header = ({ siteTitle }) => {
  return (
    <>
      <DesktopNavMenu />
      <MobileNavMenu />
    </>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
