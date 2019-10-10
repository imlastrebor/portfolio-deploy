import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.div`
  display: inline-block;
  margin: 0 10px;
  @media only screen and (max-width: 1024px) {
    display: block;
    margin-top: 20px;
  }
`

const ImageWrapper = styled.div`
  max-width: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const PortfolioImage = styled.img`
  max-width: 300px;
  z-index: -99;
  opacity: 0;
  transition: 0.25s linear;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`
const PortfolioItemNameLink = styled(Link)`
  /* font-family: "Muli", sans-serif; */
  font-family: "Archivo";
  font-weight: bold;
  font-size: 4em;
  display: inline-block;
  z-index: 1;
  text-decoration: none;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
  transition: 0.25s linear;
  &:hover {
    color: #fff;
  }
  @media only screen and (max-width: 624px) {
    &:hover {
      color: transparent;
    }
  }
`

// --------------
//   Styles end
// --------------

const PortfolioWorks = ({ image, title, link, id }) => {
  const [imageStyle, setImageStyle] = useState({})

  function changeStyle(e) {
    e.preventDefault()
    setImageStyle({ visibility: "visible", opacity: ".8" })
  }
  function resetStyle(e) {
    e.preventDefault()
    setImageStyle({ visibility: "hidden", opacity: "0" })
  }

  return (
    <Wrapper key={id}>
      <ImageWrapper>
        <PortfolioImage style={imageStyle} src={image} />
      </ImageWrapper>
      <PortfolioItemNameLink
        to={link}
        onMouseEnter={changeStyle}
        onMouseLeave={resetStyle}
      >
        {title}
      </PortfolioItemNameLink>
    </Wrapper>
  )
}

export default PortfolioWorks
