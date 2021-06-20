import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import PreviewCollection from "../../components/Preview-collection/PreviewCollection";

import Page404 from "../../components/404/404";

import { RootState } from "../../store";
import { useSelector } from "react-redux";
import Section from "../../models/section";
const SectionPage: React.FC = () => {
  const sectionName = useRouter().query.sectionName;
  const { directory: sections, toys } = useSelector(
    (state: RootState) => state
  );
  const section = sections.find(
    (section:Section) => section.title.toLowerCase().replace(/ /g, "") === sectionName
  );

  return (
    <section>
      <Head>
        <meta
          name="description"
          content={`Toys ${section ? section.title : "section"} Page`}
        />
      </Head>
      {section ? (
        <PreviewCollection
          items={toys.filter(toy =>
            section.id < 3
              ? toy.gender === section.id || toy.gender === 0
              : toy.sectionId === section.id
          )}
          section={section.title}
          isMore={false}
        />
      ) : (
        <Page404 />
      )}
    </section>
  );
};

export default SectionPage;
