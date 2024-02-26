import { Experience, Hero, Hobby, Presentation, Skill, Study } from '@/components/Section';
import { ICVPage } from '@/utils';

interface CVPageProps {
  page: ICVPage;
}

export const CVPage = ({ page }: CVPageProps) => {
  return (
    <>
      <Hero />
      {page?.presentation && <Presentation row={page.presentation} />}
      {page?.study && <Study row={page.study} />}
      {page?.experience && <Experience row={page.experience} />}
      {page?.skill && <Skill row={page.skill} />}
      {page?.hobby && <Hobby row={page.hobby} />}
    </>
  );
};
