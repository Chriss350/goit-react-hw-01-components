import css from './style.module.css';
const FriendListItem = props => {
  return (
    <li className={css.item}>
      {props.data.isOnline === true ? (
        <span className={css.online}></span>
      ) : (
        <span className={css.offline}></span>
      )}

      <img
        className={css.avatar}
        src={props.data.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{props.data.name}</p>
    </li>
  );
};

export { FriendListItem };
