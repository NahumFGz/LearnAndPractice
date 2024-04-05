import { Component } from "react";


const styles = {
    title:{
        marginBottom: '100px',
    },
}

class Title extends Component {
    render() {
        return (
            <h1 style={styles.title}>Tienda</h1>
        )
    }
}

export default Title