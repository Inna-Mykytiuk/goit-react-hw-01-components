import { Profile } from 'components/profile/Profile';
import user from './profile/user.json';

import { Statistics } from 'components/statistics/Statistics';
import data from './statistics/data.json';

import { FriendList } from 'components/friend-list/FriendList';
import friends from './friend-list/friends.json';

import { TransactionHistory } from 'components/transaction-history/TransactionHistory';
import transactions from './transaction-history/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
