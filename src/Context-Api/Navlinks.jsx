import UserContainer from "./UserContainer";

const NavLinks = () => {
  return (
    <section>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>

      <UserContainer/>
    </section>
  );
};
export default NavLinks;
