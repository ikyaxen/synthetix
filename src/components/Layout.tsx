interface Props {
  children: any;
  className: string;
}

const Layout = (props: Props) => {
  let { children, className } = props;
  return <div className={className}>{children}</div>;
};

export default Layout;
