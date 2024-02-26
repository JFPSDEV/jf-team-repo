import { Contact, Footer, Hero, Preface, Project, Techno, Testimonial } from '@/components/Section';
import { IHomePage } from '@/utils';
import React from 'react';

interface HomePageProps {
  page: IHomePage;
}

export const HomePage = ({ page }: HomePageProps) => {
  return (
    <>
      <Hero />
      {page?.preface && <Preface row={page.preface} />}
      <Techno />
      {page?.project && <Project row={page.project} />}
      {page?.testimonial && <Testimonial row={page.testimonial} />}
      {page?.contact && <Contact row={page.contact} />}
      <Footer />
    </>
  );
};
