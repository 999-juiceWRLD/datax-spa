import { Hero } from '@/components/Hero.component';
import { Navbar } from '@/components/Navbar.component';
import { Analytics } from '@/components/Analytics.component';
import { NewsLetter } from '@/components/Newsletter.component';
import { Card } from '@/components/Card.component';
import { CardContainer } from '@/components/CardContainer.component';
import { Footer } from '@/components/FooterContainer.component';

import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

export default function Home() {
  return (
    <div className='text-white'>
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <CardContainer 
        firstComponent={<Card imageSource={Single} type='Single User' price='$149' specs={["500 GB Storage", "1 Granted User", "Send up to 2 GB"]}/>}
        secondComponent={<Card imageSource={Double} isSpecial={true} type='Partnership' price='$199' specs={["1 TB Storage", "3 Users Allowed", "Send up to 10 GB"]}/>}
        thirdComponent={<Card imageSource={Triple} type='Group Account' price='$299' specs={["5 TB Storage", "10 Users Allowed", "Send up to 20 GB"]} />}
      />
      <Footer />
    </div>
  );
}
