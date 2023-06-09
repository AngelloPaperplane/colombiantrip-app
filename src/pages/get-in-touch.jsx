import Metas from '@/components/metaDatas';
import Hero from '@/components/hero';
import React from 'react';

const GetInTouch = ({ data }) => {
  const { metacontent, hero } = data;
  console.log(data);

  return (
    <>
      <Metas metadata={metacontent} />
      <Hero contentHero={hero} />
    </>
  );
};

export async function getServerSideProps() {
  const content = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/getintouch`
  );
  const data = await content.json();
  return {
    props: { data },
  };
}
export default GetInTouch;
