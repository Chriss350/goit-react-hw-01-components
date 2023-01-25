import style from './style.module.css';

import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <h2>1 - Profil w sieci społecznościowej</h2>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div className={style.box}>
        <h2>2- Sekcja "statystyki"</h2>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div className={style.box}>
        <h2>3 - Lista znajomych</h2>
        <FriendList friends={friends} />
      </div>
      <div className={style.box}>
        <h2>4 - Historia transakcji</h2>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
