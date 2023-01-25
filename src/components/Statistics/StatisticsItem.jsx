import css from './style.module.css';
import PropTypes from 'prop-types';

const StatisticsItem = ({ stats }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{stats.label}</span>
      <span className={css.percentage}>{stats.percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string,
    perceta: PropTypes.number,
  }),
};
export { StatisticsItem };
