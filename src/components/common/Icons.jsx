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

export const NaverIcon = (props) => (
  <SVG viewBox="0 0 841.891 595.281" {...props}>
    <polygon
      // fill="#1ec800"
      points="516.19,0 516.19,291.687 325.7,0 123.304,0 123.304,595.281 325.7,595.281 325.7,297.64 
			516.19,595.281 718.586,595.281 718.586,0"
      {...props}
    />
  </SVG>
);

export const GoogleIcon = (props) => (
  <SVG viewBox="0 0 533.5 544.3" size={20} {...props}>
    <path
      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
      fill="#4285f4"
    />
    <path
      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
      fill="#34a853"
    />
    <path
      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
      fill="#fbbc04"
    />
    <path
      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
      fill="#ea4335"
    />
  </SVG>
);
