import css from './style.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ data }) => {
  return (
    <li className={css.item}>
      {data.isOnline === true ? (
        <span className={css.online}></span>
      ) : (
        <span className={css.offline}></span>
      )}

      <img
        className={css.avatar}
        src={data.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{data.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  data: PropTypes.shape({
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
  }),
};

export { FriendListItem };
