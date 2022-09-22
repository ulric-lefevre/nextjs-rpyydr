import Factory, { Language } from '../utils/languageFactory';
import { gql, useQuery } from '@apollo/client';
import { ComponentType } from 'react';

const QUERY = gql(`
query {
  reparcarProject {
    id
    startDate
    nbrApps
    languages {
      name
      yearCreation
      category
      typing
      parentLanguage
    }
  }
}
`);

export const List = ({}: { project: any }) => {
  const { data, error, loading } = useQuery(QUERY);

  return (
    <span>
      {data &&
        data.reparcar.languages.map((language: Language) =>
          Factory(() => {}, Language as ComponentType<void>)
        )}

      {loading && 'Loading...'}
      {error && 'An error has occurred'}
    </span>
  );
};
