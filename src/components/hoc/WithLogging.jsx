const WithLogging = (WrappedComponent) => {
  const WithLoggingComponent = (props) => {
    const name = WrappedComponent.name;
    console.log("Component mount----", name);

    return <WrappedComponent {...props} />;
  };
  return WithLoggingComponent;
};

export default WithLogging;
