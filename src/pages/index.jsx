import Metas from '@/components/metaDatas';
import Hero from '@/components/hero';
import AboutHome from '@/components/about-home';
import ImgText from '@/components/img-text';
import HorizontalSection from '@/components/horizontal-section';
import MeetHome from '@/components/meet-home';

function Home({ data }) {
  console.log(data);

  const {
    metacontent,
    hero,
    about,
    blockimages,
    horizontal_blocks,
    blogsection,
  } = data;

  return (
    <>
      <Metas metadata={metacontent} />
      <Hero contentHero={hero} />
      <AboutHome aboutHome={about} />
      {blockimages.map((data, i) => (
        <ImgText
          key={typeof window !== 'undefined' ? window.crypto.randomUUID() : i}
          data={data}
        />
      ))}
      <HorizontalSection
        horizontalType={'home'}
        horizontalData={horizontal_blocks}
      />
      <MeetHome blogdata={blogsection} />
    </>
  );
}

export async function getServerSideProps() {
  const resHome = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/home`
  );
  const data = await resHome.json();
  return {
    props: { data },
  };
}

export default Home;
