import React from "react";

const USFlag: React.FC = (props) => (
  <svg
    className="h-[150px] w-[150px]"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    width="1200"
    height="600"
    viewBox="0 0 7410 3900"
    {...props} // Приложете всички допълнителни пропсове към SVG елемента
  >
    <rect width="7410" height="3900" fill="#b22234" />
    <path
      d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0"
      stroke="#fff"
      strokeWidth="300"
    />
    <rect width="2964" height="2100" fill="#3c3b6e" />
    <g fill="#fff">
      <g id="s18">
        <g id="s9">
          <g id="s5">
            <g id="s4">
              <path
                id="s"
                d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"
              />
              <use xlinkHref="#s" y="420" />
              <use xlinkHref="#s" y="840" />
              <use xlinkHref="#s" y="1260" />
            </g>
            <use xlinkHref="#s" y="1680" />
          </g>
          <use xlinkHref="#s4" x="247" y="210" />
        </g>
        <use xlinkHref="#s9" x="494" />
      </g>
      <use xlinkHref="#s18" x="988" />
      <use xlinkHref="#s9" x="1976" />
      <use xlinkHref="#s5" x="2470" />
    </g>
  </svg>
);

const CanadaFlag: React.FC = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-[150px] w-[150px]"
    width="1200"
    height="600"
    viewBox="0 0 9600 4800"
    {...props} // Приложете всички допълнителни пропсове към SVG елемента
  >
    <title>Flag of Canada</title>
    <path
      fill="#f00"
      d="m0 0h2400l99 99h4602l99-99h2400v4800h-2400l-99-99h-4602l-99 99H0z"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      d="m2400 0h4800v4800h-4800zm2490 4430-45-863a95 95 0 0 1 111-98l859 151-116-320a65 65 0 0 1 20-73l941-762-212-99a65 65 0 0 1-34-79l186-572-542 115a65 65 0 0 1-73-38l-105-247-423 454a65 65 0 0 1-111-57l204-1052-327 189a65 65 0 0 1-91-27l-332-652-332 652a65 65 0 0 1-91 27l-327-189 204 1052a65 65 0 0 1-111 57l-423-454-105 247a65 65 0 0 1-73 38l-542-115 186 572a65 65 0 0 1-34 79l-212 99 941 762a65 65 0 0 1 20 73l-116 320 859-151a95 95 0 0 1 111 98l-45 863z"
    />
  </svg>
);

export { USFlag, CanadaFlag };
