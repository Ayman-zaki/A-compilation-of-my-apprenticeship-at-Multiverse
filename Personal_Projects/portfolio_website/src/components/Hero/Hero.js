import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<section row nopading>
<LeftSection>
<SectionTitle>
Welcome To <br />
My Personal Portfolio
</SectionTitle>
<SectionText>
I'm a full stack web Developer in Dallas, TX.
I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. 
</SectionText>
<Button onClick={()=> window.location= 'https://google.com'}>Learn More</Button> 
</LeftSection>
</section>
);

export default Hero;