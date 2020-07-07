import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({ size, ...props }) => (
  <svg
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentcolor"
    {...props}
  />
);

SVG.propTypes = {
  size: PropTypes.number,
};

SVG.defaultProps = {
  size: 24,
};

export const ImageIcon = (props) => (
  <SVG {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 6.5a3 3 0 100 6 3 3 0 000-6zm-1 3a1 1 0 112 0 1 1 0 01-2 0z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2.5a3 3 0 00-3 3v12a3 3 0 003 3h18a3 3 0 003-3v-12a3 3 0 00-3-3H3zm18 2H3a1 1 0 00-1 1v12a1 1 0 001 1h4.314l6.878-6.879a3 3 0 014.243 0L22 15.186V5.5a1 1 0 00-1-1zm0 14H10.142l5.465-5.464a1 1 0 011.414 0l4.886 4.886A1 1 0 0121 18.5z"
    />
  </SVG>
);

export const BookmarkIcon = (props) => (
  <SVG {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 20h-1.828l-4.465-4.465a1 1 0 00-1.414 0L6.828 20H5V7a3 3 0 013-3h8a3 3 0 013 3v13zM17 7a1 1 0 00-1-1H8a1 1 0 00-1 1v10l2.879-2.879a3 3 0 014.242 0L17 17V7z"
    />
  </SVG>
);

export const BookmarkFullIcon = (props) => (
  <SVG {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 20h-1l-5.293-4.465a1 1 0 00-1.414 0L6 20H5V7a3 3 0 013-3h8a3 3 0 013 3v13z"
      fill="#7300F5"
    />
  </SVG>
);

export const SearchIcon = (props) => (
  <SVG {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.319 15.307A8.001 8.001 0 005.343 4.743 8 8 0 0015.908 16.72l.042.045 4.242 4.243a1 1 0 101.415-1.415l-4.243-4.242a.99.99 0 00-.045-.043zm-2.076-9.15a6 6 0 11-8.485 8.486 6 6 0 018.485-8.486z"
    />
  </SVG>
);

export const CloseButtonIcon = (props) => (
  <SVG {...props}>
    <path d="M6.226 4.811A1 1 0 104.81 6.226L10.586 12l-5.774 5.775a1 1 0 101.414 1.414L12 13.415l5.775 5.774a1 1 0 001.414-1.414L13.415 12l5.774-5.774a1 1 0 10-1.414-1.415L12 10.586 6.226 4.811z" />
  </SVG>
);
