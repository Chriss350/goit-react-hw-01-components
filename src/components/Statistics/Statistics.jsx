import { StatisticsItem } from './StatisticsItem';
import css from './style.module.css';

const Statistics = props => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{props.title}</h2>

      <ul className={css.statList}>
        {props.stats.map(stat => (
          <StatisticsItem key={stat.id} data={stat} />
        ))}
      </ul>
    </section>
  );
};

export { Statistics };
