function Welcome(props) {
    return (
        <div>
            <div>name: {props.name}</div>
            <div>age: {props.age}</div>
        </div>
    );
}
const element = <Welcome name="Wency" age="18" />;
ReactDOM.render(
    element,
    document.getElementById('app')
);