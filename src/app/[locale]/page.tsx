import Benefits from '@/components/Home/Benefits/Benefits';
import Landing from '@/components/Home/Landing/Landing';
import Partners from '@/components/Home/Partners/Partners';
import Services from '@/components/Home/Services/Services';
import Solution from '@/components/Home/Solution/Solution';
import Work from '@/components/Home/Work/Work';
import Reviews from '@/components/Reviews/Reviews';
import { getTranslations } from 'next-intl/server';

const Home = async () => {
  const l = await getTranslations('home');

  return (
    <>
      <Landing l={l} />
      <Solution l={l} />
      <Work l={l} />
      <Benefits lang={l} />
      <Services l={l} />
      <Partners l={l} />
      <Reviews l={l} />
    </>
  );
};

export default Home;
