import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      version='1'
      viewBox='0 0 50 50'
    >
      <path opacity={props.opacity || ''} 
        d='M220 464c0-12-7-14-28-9-38 8-62-17-43-47 10-17 9-20-8-25-26-7-30-63-5-63 12 0 14-7 9-28-8-38 17-62 47-43 17 10 20 9 25-8 7-26 63-30 63-5 0 12 7 14 28 9 38-8 62 17 43 47-10 17-9 20 8 25 26 7 30 63 5 63-12 0-14 7-9 28 8 38-17 62-47 43-17-10-20-9-25 8-7 26-63 30-63 5zm81-51c12 3 16 0 12-9-3-8 1-24 10-37 12-19 13-24 0-36-8-7-13-22-10-31 3-13 0-17-9-13-8 3-24-1-37-10-19-12-24-13-36 0-7 8-22 13-31 10-13-3-17 0-13 9 3 8-1 24-10 37-12 19-13 24 0 36 8 7 13 21 10 31-3 12 0 16 12 13 9-2 25 2 35 10 17 13 22 13 34 0 8-8 23-12 33-10z'
        transform='matrix(.1 0 0 -.1 0 50)'
    fill={props.fill || "#9FA2B4"}  ></path>
      <path opacity={props.opacity || ''} 
        d='M58 202c-38-17-51-42-23-42 9 0 30 7 46 16 43 22 83 20 114-5 15-11 42-21 59-21s37-4 44-9c23-14-14-22-75-14-45 5-55 3-51-8 3-10 26-15 77-17 67-3 75-1 131 34 33 20 63 35 66 32 8-8-168-118-189-118-10 0-40 11-67 25-57 29-77 31-108 9-40-27-16-49 26-23 14 9 29 6 70-15 76-38 98-35 207 35 82 53 95 65 95 89 0 26-3 28-77 40-74 13-78 13-116-9l-39-23-29 21c-35 26-106 27-161 3z'
        transform='matrix(.1 0 0 -.1 0 50)'
        fill={props.fill || "#9FA2B4"}
     ></path>
    </svg>
  );
}

export default Icon;