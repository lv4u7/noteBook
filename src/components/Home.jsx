import PropTypes from "prop-types";
import Notes from "./Notes";

const Home = ({ showAlert }) => {
  return (
    <>
      <div className="container my-3">
        <h2>Your Notes</h2>
        <Notes showAlert={showAlert} />
      </div>
    </>
  );
};

Home.propTypes = {
  showAlert: PropTypes.func.isRequired,
};

export default Home;
