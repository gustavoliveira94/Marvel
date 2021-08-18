import { Grid, Container } from "@material-ui/core";

import { ISeries } from "services/apis/marvel";

import useStyles from "./styles";

export interface ISeriePage {
  serie: ISeries;
}

const Serie: React.FC<ISeriePage> = ({ serie }) => {
  const classes = useStyles();

  const image =
    serie?.thumbnail?.path !==
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
      ? `${serie?.thumbnail?.path}.${serie?.thumbnail?.extension}`
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
          <img src={image} alt={serie?.title} width="100%" />
        </Grid>
        <Grid md={8} item container direction="row" alignItems="flex-start">
          <Grid md={12} item container direction="row" alignItems="flex-start">
            <h2>{serie?.title}</h2>
            {serie?.description && <p>{serie?.description}</p>}
          </Grid>
          <Grid md={12} item container direction="row" alignItems="flex-start">
            {serie?.creators?.items.length ? (
              <Grid md={4} item direction="column">
                <h3>Criadores:</h3>
                {serie?.creators?.items.map((creator) => (
                  <div key={creator?.name}>
                    <p>{creator.name}</p>
                    <p>{creator.role}</p>
                  </div>
                ))}
              </Grid>
            ) : null}
            {serie?.characters?.items.length ? (
              <Grid md={4} item direction="column">
                <h3>Personagens:</h3>
                {serie?.characters?.items.map((character) => (
                  <div key={character?.name}>
                    <p>{character.name}</p>
                  </div>
                ))}
              </Grid>
            ) : null}
            {serie?.stories?.items.length ? (
              <Grid md={4} item direction="column">
                <h3>Histórias:</h3>
                {serie?.stories?.items.map((story) => (
                  <div key={story?.name}>
                    <p>{story.name}</p>
                  </div>
                ))}
              </Grid>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Serie;
