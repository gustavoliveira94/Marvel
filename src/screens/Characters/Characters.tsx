import { Grid, Container } from "@material-ui/core";

import { ICharacters } from "services/apis/marvel";

import Card from "components/Card";

export interface ICharactersPage {
  characters: ICharacters[];
}

const Characters: React.FC<ICharactersPage> = ({ characters }) => {
  return (
    <Container>
      <Grid md={12} item container direction="row" justifyContent="center">
        <h1>Personagens:</h1>
      </Grid>
      <Grid
        md={12}
        item
        container
        direction="row"
        justifyContent="center"
        data-testid="content-cards"
      >
        {characters.map(({ id, name, thumbnail }) => {
          const titleFormat = name.length <= 70 ? name : name.slice(0, 75);

          return (
            <Card
              key={id}
              image={`${thumbnail.path}.${thumbnail.extension}`}
              name={titleFormat}
              url={`character/${id}`}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default Characters;
