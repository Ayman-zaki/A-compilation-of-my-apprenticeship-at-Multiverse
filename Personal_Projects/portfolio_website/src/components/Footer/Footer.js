import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
   <LinkList>
   <LinkColumn>
   <LinkTitle>Call</LinkTitle>
   <LinkItem href='tel:929-283-2726'>9292832726</LinkItem>
   </LinkColumn>
   <LinkColumn>
   <LinkTitle>Email</LinkTitle>
   <LinkItem href='mailto:aymanzaki77@gmail.com'>aymanzaki77@gmail.com</LinkItem>
   </LinkColumn>
   </LinkList>
<SocialContainer>
<CompanyContainer>
<Slogan>Innovating one project at a time</Slogan>
</CompanyContainer>

<SocialContainer>
<SocialIcons href="https://google.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        </SocialContainer>
</SocialContainer>

   </FooterWrapper>
  );
};

export default Footer;
