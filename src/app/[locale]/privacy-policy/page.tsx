import Solution from '@/components/Home/Solution/Solution';
import { getTranslations } from 'next-intl/server';

const PrivacyPolicy = async () => {
  const l = await getTranslations('home');

  return (
    <>
      <Solution l={l} />
    </>
  );
};

export default PrivacyPolicy;
