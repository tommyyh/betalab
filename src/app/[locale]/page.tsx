import Landing from '@/containers/home/landing/page';
import Solution from '@/containers/home/solution/page';
import { getTranslations } from 'next-intl/server';

const Home = async () => {
  const l = await getTranslations('home');

  return (
    <>
      <Landing l={l} />
      <Solution l={l} />
    </>
  );
};

export default Home;
