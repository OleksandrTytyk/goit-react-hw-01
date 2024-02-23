import css from './Profile.module.css'

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profileContainer}>
      <div className={css.profileCard}>
        <img className={css.profileImg} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileStats}>
        <li className={css.profileStatsItem}>
          <span className={css.profileStatsName}>Followers</span>
          <span className={css.profileStatsValue}>{followers}</span>
        </li>
        <li className={css.profileStatsItem}>
          <span className={css.profileStatsName}>Views</span>
          <span className={css.profileStatsValue}>{views}</span>
        </li>
        <li className={css.profileStatsItem}>
          <span className={css.profileStatsName}>Likes</span>
          <span className={css.profileStatsValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
