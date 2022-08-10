// interface SubsProps {
//   fill: string;
//   iconPlay: string;
// }

// const SvgComponent = ({ fill, iconPlay }: SubsProps) => (
//   <svg width={100} height={100} fill='none' xmlns='http://www.w3.org/2000/svg'>
//     <path fill={fill} stroke='#fff' strokeWidth={4} d='M0 23h160v80H0z' />
//     <path stroke='#fff' strokeWidth={3} d='M16 11.5h127M43 1.5h73' />
//     <path d='M103 62.5 67.75 82.852V42.148L103 62.5Z' fill={iconPlay} />
//   </svg>
// );

// export default SvgComponent;

import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={18} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path stroke='#fff' d='M.5 5.5h19v12H.5zM3.333 2.5h13.23M6.146.5h7.604' />
    <path d='m13 11-4.5 2.598V8.402L13 11Z' fill='#fff' />
  </svg>
);

export default SvgComponent;
