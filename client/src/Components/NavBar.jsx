import React from "react"
import styled from 'styled-components'
import { NavLink } from "react-router-dom"
import Search from "./Search.jsx"
import Order from "./Order.jsx"
const NavBarContainer = styled.div`
height: 50px;
display:flex;
justify-content:center;
align-items:center;
margin-bottom:1rem;
background-color: #c3c3c3;
`
const NavBarLink = styled(NavLink)`
margin:1rem;
`

const NavBar = () => {
    return (
        <NavBarContainer>

            <NavBarLink to="/home">
                Home
            </NavBarLink>
            <Search />
            <Order />
            <NavBarLink to="/home/create">
                Create character
            </NavBarLink>

        </NavBarContainer>
    )
}

export default NavBar