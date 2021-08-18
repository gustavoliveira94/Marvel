import { Grid, Container } from "@material-ui/core";

import Card from "components/Card";

import { ISeries } from "services/apis/marvel";

export interface ISeriesPage {
  series: ISeries[];
}

const Series: React.FC<ISeriesPage> = ({ series }) => {
  return (
    <Container>
      <Grid md={12} item container direction="row" justifyContent="center">
        <h1>Séries:</h1>
      </Grid>
      <Grid
        md={12}
        item
        container
        direction="row"
        justifyContent="center"
        data-testid="content-cards"
      >
        {series.map(({ id, title, thumbnail }) => (
          <Card
            key={id}
            image={`${thumbnail.path}.${thumbnail.extension}`}
            name={title}
            url={`serie/${id}`}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Series;
