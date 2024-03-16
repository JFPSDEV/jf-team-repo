import React from 'react';

import { Accordion } from '@jfteam/material';

import { CardProject } from './CardProject/CardProject';

import classes from './ProjectCardList.module.css';
import { IProjectRow } from '@/utils';

interface ProjectCardListProps {
  list: IProjectRow[];
  webSiteLabel: string;
  index: number;
  onClick: (index: number) => void;
}

const ProjectCardList = (props: ProjectCardListProps) => {
  const { list, webSiteLabel, index, onClick } = props;

  return (
    <Accordion defaultValue={list[0].title} chevron={null} value={`${index}`}>
      {list.map((item, idx) => (
        <CardProject
          key={item.title}
          id={idx.toString()}
          webSiteLabel={webSiteLabel}
          currentIndex={index}
          onClick={() => onClick(idx)}
          link={item.link}
          title={item.title}
          description={item.description}
        />
      ))}
    </Accordion>
  );
};

export default ProjectCardList;
