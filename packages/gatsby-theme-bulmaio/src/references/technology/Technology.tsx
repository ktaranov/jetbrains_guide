import React, { FC } from 'react';
import { graphql } from 'gatsby';
import ReferenceLayout from '../../components/layout/ReferenceLayout';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import { TechnologyReference } from './models';

export interface TechnologyProps {
  data: {
    technology: TechnologyReference
  }
}

const Technology: FC<TechnologyProps> = (
  {
    data: {
      technology: { title, subtitle, body, logo, resources }
    }
  }: TechnologyProps) => {
  return (
    <ReferenceLayout pageTitle={title} subtitle={subtitle} bodyHtml={body}>
      {{
        figure: (
          <div className="image is-rounded is-96x96">
            <img className="bio-resourcecard-logo" src={logo.publicURL} alt="Logo" />
          </div>
        ),
        listing: (
          <div>
            {resources && resources.map(resource => (
              <ResourceCard
                key={resource.slug}
                thumbnail={resource.thumbnail}
                media={{ href: resource.slug, title: resource.title, subtitle: resource.subtitle }}
                technologies={{ items: resource.technologies }}
                topics={{ items: resource.topics }}
                date={{ date: resource.date }}
                author={{ thumbnail: resource.author.thumbnail, slug: resource.author.slug, title: resource.author.title }}
              />
            ))
            }
          </div>
        )
      }}
    </ReferenceLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default Technology;

export const query = graphql`
  query($slug: String!) {
    technology(slug: { eq: $slug }) {
      ...ListedTechnologyFragment
      resources {
        ...ListedResourceFragment
      }
    }
  }
`;
