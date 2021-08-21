import { Grid } from '@material-ui/core';

interface IEntity {
  entity: {
    name: string;
    role?: string;
  }[];
  title: string;
}

const Entities: React.FC<IEntity> = ({ entity, title }) =>
  entity?.length ? (
    <Grid md={4} item data-testid="entities">
      <h3>{title}</h3>
      {entity?.map(({ name, role }) => (
        <div key={name}>
          <p>{name}</p>
          {role && <p>{role}</p>}
        </div>
      ))}
    </Grid>
  ) : null;

export default Entities;
