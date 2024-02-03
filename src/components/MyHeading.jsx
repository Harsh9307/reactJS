const MyHeading = () => {
  const a = 37;
  return (
    <>
      <div>MyHeading</div>
      <div>{a}</div>
      <MyHeading1 />
    </>
  );
};
const MyHeading1 = () => {
  const a = 7;
  return (
    <>
      <div>MyHeading 2</div>
      <div>{a}</div>
    </>
  );
};

export default MyHeading;
