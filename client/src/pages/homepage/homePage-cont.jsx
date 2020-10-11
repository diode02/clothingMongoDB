import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsDirectoryFetching } from "../../redux/directory/shop.selectors";

import WithSpinner from "../../components/with-spinner/with-spinner.com";
import HomePage from "./homepage.com";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsDirectoryFetching,
});

const HomePageContainerSpinner = compose(
  connect(mapStateToProps),
  WithSpinner
)(HomePage);

export default HomePageContainerSpinner;
