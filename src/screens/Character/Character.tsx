import { Grid, Container } from "@material-ui/core";

import { ICharacters } from "services/apis/marvel";

import Entities from "components/Entities";

import useStyles from "./styles";

export interface ICharacterPage {
  character: ICharacters;
}

const Character: React.FC<ICharacterPage> = ({ character }) => {
  const classes = useStyles();

  const image =
    character?.thumbnail?.path !==
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
      ? `${character?.thumbnail?.path}.${character?.thumbnail?.extension}`
      : "/marvel-avatar.jpg";

  return (
    <Container>
      <Grid md={12} item container direction="row" justifyContent="flex-start">
        <Grid
          md={4}
          item
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.image}
        >
          <img src={image} alt={character?.name} width="100%" />
        </Grid>
        <Grid md={8} item container direction="row" alignItems="flex-start">
          <Grid md={12} item container direction="row" alignItems="flex-start">
            <h2>{character?.name}</h2>
            {character?.description && <p>{character?.description}</p>}
          </Grid>
          <Grid md={12} item container direction="row" alignItems="flex-start">
            <Entities
              entity={character?.comics?.items}
              title="Histórias em quadrinhos:"
            />
            <Entities entity={character?.series?.items} title="Séries:" />
            <Entities entity={character?.stories?.items} title="Histórias:" />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Character;
