import { DateTime } from "luxon";
import PropTypes from "prop-types";

const Date = ({ date }) => <>{DateTime.fromFormat(date, "MM-dd-yyyy").toFormat("MMMM d, yyyy")}</>;

Date.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Date;
