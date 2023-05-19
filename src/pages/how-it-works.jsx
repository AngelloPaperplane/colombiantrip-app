import Metas from '@/components/metaDatas';
import AfterHero from '@/components/after-hero';
import Hero from '@/components/hero';
import HorizontalSection from '@/components/horizontal-section';
import React from 'react';

const HowItWorks = ({ dataContent }) => {
  const { metacontent, hero, horizontal } = dataContent.data;

  const contentAfterHero = {
    title: { text: 'About your trip', negative: true },
    infoItems: [
      {
        text: 'Start your enchanting journey—click below to fill out our brief travel inquiry form to get started:',
      },
    ],
    needPadding: true,
  };
  return (
    <>
      <Metas metadata={metacontent} />
      <Hero contentHero={hero} />
      <HorizontalSection horizontalType={'works'} horizontalData={horizontal} />
      <AfterHero contentAfterHero={contentAfterHero} />
    </>
  );
};

export async function getServerSideProps() {
  const resData = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v1/howworks`
  );
  const dataContent = await resData.json();
  return {
    props: { dataContent },
  };
}

export default HowItWorks;
