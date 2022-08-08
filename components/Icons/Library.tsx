const SvgComponent = ({ playicon = '#fff', fill = 'none' }) => (
  <svg width={190} height={190} fill={fill} xmlns='http://www.w3.org/2000/svg'>
    <path stroke='#fff' strokeWidth={5} d='M22.5 2.5h165v165h-165z' />
    <path d='m151 85.5-68.25 39.404V46.096L151 85.5Z' fill={playicon} />
    <path stroke='#fff' strokeWidth={5} d='M2.5 29v159M0 187.5h160' />
  </svg>
);

export default SvgComponent;
