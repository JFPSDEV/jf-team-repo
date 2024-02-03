import React from 'react';

import { Accordion } from '@jfteam/material';

import { CardProject } from './CardProject/CardProject';
import { TProject } from '../Project';

import classes from './ProjectCardList.module.css';

interface ProjectCardListProps {
  list: TProject[];
  index: number;
  onClick: (index: number) => void;
}

const ProjectCardList = (props: ProjectCardListProps) => {
  const { list, index, onClick } = props;

  return (
    <Accordion defaultValue={list[0].title} chevron={null} value={`${index}`}>
      {list.map((item) => (
        <CardProject
          key={item.title}
          id={item.id}
          currentIndex={index}
          onClick={() => onClick(+item.id)}
          link={item.link}
          title={item.title}
          description={item.description}
        />
      ))}
    </Accordion>
  );
};

export default ProjectCardList;
