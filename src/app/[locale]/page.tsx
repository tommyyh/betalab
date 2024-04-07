import Benefits from '@/components/Home/Benefits/Benefits';
import Landing from '@/components/Home/Landing/Landing';
import Solution from '@/components/Home/Solution/Solution';
import Work from '@/components/Home/Work/Work';
import Preloader from '@/components/Preloader/Preloader';
import { getTranslations } from 'next-intl/server';

const Home = async () => {
  const l = await getTranslations('home');
  const l2 = await getTranslations('welcome');

  return (
    <>
      <Preloader text={l2('welcome')} />
      <Landing l={l} />
      <Solution l={l} />
      <Work l={l} />
      <Benefits lang={l} />
    </>
  );
};

export default Home;
