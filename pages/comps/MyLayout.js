import Header from "./Header"

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

const Layout = props => {
    console.log(props.type)

    if (props.type == "no_header") {
        return (
            <div style={layoutStyle}>
                {props.children}
            </div>
        )
    } else {
        return (
            <div style={layoutStyle}>
                <Header />
                {props.children}
            </div>
        )
    }
}

export default Layout