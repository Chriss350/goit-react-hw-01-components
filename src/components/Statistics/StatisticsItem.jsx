import css from './style.module.css';

const StatisticsItem = props => {
  return (
    <li className={css.item} key={props.id}>
      <span className={css.label}>{props.data.label}</span>
      <span className={css.percentage}>{props.data.percentage}%</span>
    </li>
  );
};

export { StatisticsItem };
