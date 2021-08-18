import { Grid, Container } from "@material-ui/core";

import Card from "components/Card";

import { IComics } from "services/apis/marvel";

export interface IComicsPage {
  comics: IComics[];
}

const Stories: React.FC<IComicsPage> = ({ comics }) => {
  return (
    <Container>
      <Grid md={12} item container direction="row" justifyContent="center">
        <h1>Histórias em quadrinhos:</h1>
      </Grid>
      <Grid
        md={12}
        item
        container
        direction="row"
        justifyContent="center"
        data-testid="content-cards"
      >
        {comics.map(({ id, title, thumbnail }) => {
          const titleFormat = title.length <= 70 ? title : title.slice(0, 75);

          return (
            <Card
              key={id}
              image={`${thumbnail?.path}.${thumbnail?.extension}`}
              name={titleFormat}
              url={`comic/${id}`}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default Stories;
