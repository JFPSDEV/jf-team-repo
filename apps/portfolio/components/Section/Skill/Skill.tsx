import React from 'react';
import { Section } from '../Section';
import { Card, Grid, Stack, Text, Title } from '@jfteam/material';
import { generateUUID } from '@jfteam/utils';

interface SkillProps {}

const title = 'Compétences';

const list = [
  {
    id: generateUUID(),
    title: 'Langages de programmation',
    text: 'Principalement ces 2 dernères années: JS/TS, HTML/CSS. Langages pratiqué plus anicennemnt: php, python, C#, Java',
  },
  {
    id: generateUUID(),
    title: 'Maîtrise de frameworks',
    text: 'Node.js, React, NextJS, NestJS, Angular, VueJS, Symphony, Laravel, Spring Boot, NET (C#) Entity Framework',
  },
  {
    id: generateUUID(),
    title: 'Back-end avancé',
    text: 'Conception et à mise en œuvre d’ API RESTful et Graphql, ainsi que des connaissances solides en bases de données. Manipulation de données via SQL ou un Framework ORM.',
  },
  {
    id: generateUUID(),
    title: 'Optimisation des performances ',
    text: `Capacité à optimiser les performances des applications web en réduisant les temps de chargement, en optimisant les requêtes réseau et en améliorant l'efficacité du code. (SSR) Server-Side Rendering.  (Lazy loading) chargement différé.`,
  },
  {
    id: generateUUID(),
    title: 'Débogage et résolution de problèmes',
    text: 'Identification, analyse et résolution des bugs et des problèmes de performance pour assurer la stabilité et la fiabilité des applications.',
  },
  {
    id: generateUUID(),
    title: 'Sécurité web',
    text: 'Compréhension des vulnérabilités courantes et des meilleures pratiques en matière de sécurité pour protéger les applications contre les attaques malveillantes.',
  },
  {
    id: generateUUID(),
    title: `Test et qualité`,
    text: ` Utilisation de frameworks de test automatique pour garantir la qualité du code et la stabilité des applications, en automatisant les tests unitaires, d'intégration.`,
  },
  {
    id: generateUUID(),
    title: `Travail d'équipe`,
    text: `Capacité à collaborer efficacement au sein d'une équipe de développement, en communiquant clairement, en partageant les connaissances et en collaborant sur des projets complexes.`,
  },
  {
    id: generateUUID(),
    title: `Veille technologique`,
    text: `Reste informé des dernières tendances et évolutions dans le domaine du développement web, et à les intégrer de manière proactive dans les projets.`,
  },
];

export const Skill = (props: SkillProps) => {
  const {} = props;

  return (
    <Section isDashed={false} py={80} bg="#f0f0ff">
      <Title order={2} ta="center" pb={50}>
        {title.toUpperCase()}
      </Title>
      <Grid>
        {list.map(({ id, title, text }) => (
          <Grid.Col key={id} span={{ base: 12, md: 4 }}>
            <Card shadow="sm" padding="md" radius="md" h="100%">
              <Stack>
                <Title order={3}>{title}</Title>
                <Text>{text}</Text>
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Section>
  );
};
