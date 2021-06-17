import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import PreviewCollection from "../../components/Preview-collection/PreviewCollection";
import sections from "../../config/sections";
import toys from "../../config/toys";

const SectionPage: React.FC = () => {
  const sectionName = useRouter().query.sectionName;
  const section = sections.find(
    section => section.title.toLowerCase().replace(/ /g, "") === sectionName
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
        <div>CATEGORY</div>
      )}
    </section>
  );
};

export default SectionPage;
