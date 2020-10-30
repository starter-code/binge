import PropTypes from 'prop-types';

// Type of prop type for Episode Data
export const TEpisodeData = PropTypes.shape({
  id: PropTypes.string,
  imageURL: PropTypes.string,
  numberOfEpisodes: PropTypes.number,
  seriesStartYear: PropTypes.number,
  title: PropTypes.string,
  titleID: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ratingCount: PropTypes.string,
});

// Type of prop type for Meta Data
export const TMetaData = PropTypes.shape({
  _id: PropTypes.string,
  id: PropTypes.string,
  imageURL: PropTypes.string,
  numberOfEpisodes: PropTypes.number,
  seriesStartYear: PropTypes.number,
  title: PropTypes.string,
  titleID: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ratingCount: PropTypes.number,
});
