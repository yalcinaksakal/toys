const Page404: React.FC = () => (
  <div
    style={{
      height: "70vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "25px",
    }}
  >
    <span>404</span>
    <span
      style={{
        marginLeft: "20px",
        paddingLeft: "20px",
        borderLeft: "2px solid dodgerblue",
        height: "75px",
        paddingTop: "20px",
      }}
    >
      Page not found
    </span>
  </div>
);
export default Page404;
