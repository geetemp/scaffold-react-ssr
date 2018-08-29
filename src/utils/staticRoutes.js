export default function staticRoutes(routesConfig, routes = []) {
  let { children } = routesConfig.props;
  children = Array.isArray(children) ? children : [children];
  for (const child of children) {
    const { props } = child;
    const cloneProps = { ...props };
    if (!props.children) {
      routes.push(cloneProps);
    } else {
      delete cloneProps.children;
      cloneProps.routes = [];
      routes.push(cloneProps);
      staticRoutes(child, cloneProps.routes);
    }
  }
  return routes;
}
