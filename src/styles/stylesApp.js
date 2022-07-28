import styled from 'styled-components';

const NavBar = styled.nav`
${'' /* background-color: hsl(0, 0%, 100%); */}
display: flex;
padding: 45px 24px;
position:absolute;
width: 100%;
z-index:1;
`

const Ulist = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
justify-content: flex-end;
align-items: center;
gap: 32px;
width:100%;
font-weight:600;
display:none

`

export { NavBar, Ulist };