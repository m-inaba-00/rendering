const style = {
  with: "100%",
  height: "200px",
  backgroundColor: "lightgray",
};

export const ChildArea = (props) => {
  const { open } = props;
  console.log("start!");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
};
