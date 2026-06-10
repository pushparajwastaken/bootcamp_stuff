export function Button(props: any) {
  return (
    <div className="button" onClick={props.onClick} style={{ display: "flex" }}>
      <div style={{ display: "flex", alignItems: "center", paddingRight: 10 }}>
        {props.leftIcon}
      </div>
      {props.children}
      {props.rightIcon}
    </div>
  );
}
