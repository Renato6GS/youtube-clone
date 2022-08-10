// const SvgComponent = ({ playicon = '#fff', fill = 'none' }) => (
//   <svg width={190} height={190} fill={fill} xmlns='http://www.w3.org/2000/svg'>
//     <path stroke='#fff' strokeWidth={5} d='M22.5 2.5h165v165h-165z' />
//     <path d='m151 85.5-68.25 39.404V46.096L151 85.5Z' fill={playicon} />
//     <path stroke='#fff' strokeWidth={5} d='M2.5 29v159M0 187.5h160' />
//   </svg>
// );

// export default SvgComponent;
import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path stroke='#fff' d='M2.605.5H19.5v16.895H2.605z' />
    <path d='M15.895 9 8.71 13.148V4.852L15.895 9Z' fill='#fff' />
    <path stroke='#fff' d='M.5 3.053V19.79M0 19.5h16.842' />
  </svg>
);

export default SvgComponent;
