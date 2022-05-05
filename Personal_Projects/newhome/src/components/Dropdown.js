import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import { menudata } from '../data/Menudata';
import { Button } from './Button';



const DropdownContainer = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #cd853f;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '100')};
`;

const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`; 

const CloseIcon = styled(FaTimes)`
color: #000d1a;
`;
const DropdownWrapper = styled.div``;
const DropdownMenue = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;
margin-bottom: 4rem;

@media screen and (max-width: 480px){
grid-template-rows: repeat(4, 60px);         
}

`;
const DropdownLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
color: #fff;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
color: #fff;
cursor: pointer;
transition: 0ms.2s ease-in-out;

&:hover{
 color: #000d1a;
}
`;
const BtnWrap = styled.div`
display: flex;
justify-content: center;

`;




const  Dropdown = ({isOpen, toggle})  => {
  return (
<DropdownContainer isOpen={isOpen} onClick={toggle}>
<Icon onClick={toggle}>
<CloseIcon />
</Icon>
<DropdownWrapper>
<DropdownMenue>
{menudata.map((item, index) => (
              <DropdownLink to={item.link} key={index}>
              {item.title}
              </DropdownLink>
)) }
</DropdownMenue>
<BtnWrap>
<Button primary="true" round="true" big="true" to="/contact">

Contact Us
</Button>
</BtnWrap>
</DropdownWrapper>
</DropdownContainer>

 

  )
}

export default Dropdown;
