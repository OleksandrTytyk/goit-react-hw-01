import css from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <div className={css.friendCard}>
      <img src={friend.avatar} alt="Avatar" width="100" />
      <p className={css.friendName}>{friend.name}</p>
      <p className={friend.isOnline ? css.friendOnline : css.friendOffline}>
        {friend.isOnline ? "Online " : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
