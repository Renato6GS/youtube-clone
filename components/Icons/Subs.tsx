interface SubsProps {
  fill: string;
  iconPlay: string;
}

const SvgComponent = ({ fill, iconPlay }: SubsProps) => (
  <svg width={100} height={100} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path fill={fill} stroke='#fff' strokeWidth={4} d='M0 23h160v80H0z' />
    <path stroke='#fff' strokeWidth={3} d='M16 11.5h127M43 1.5h73' />
    <path d='M103 62.5 67.75 82.852V42.148L103 62.5Z' fill={iconPlay} />
  </svg>
);

export default SvgComponent;
