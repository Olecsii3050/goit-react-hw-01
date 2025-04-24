import css from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={css.block}>
      <div>
        <img
          className={css.icon}
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <p className={css.name}>Petra Marica</p>
        <p className={css.mail}>@pmarica</p>
        <p className={css.location}>Salvador, Brasil</p>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span> <span>1000</span>
        </li>
        <li className={css.items}>
          <span>Views</span> <span>2000</span>
        </li>
        <li className={css.items}>
          <span>Likes</span> <span>3000</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
