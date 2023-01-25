import css from './style.module.css';
import { FriendListItem } from './FriendListItem';

const FriendList = props => {
  return (
    <ul className={css.friendList}>
      {props.friends.map(friend => (
        <FriendListItem key={friend.id} data={friend} />
      ))}
    </ul>
  );
};

export { FriendList };
