import { Component } from "react";

const styles = {
    detallesCarro: {
        backgroundColor: '#fff',
        position:'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50,
    },
    ul: {
        margin:0,
        padding: 0,
    },
    producto: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa',
    },
    total: {
        textAlign:'right',
        padding: '0px 20px'
    }
}

class DetallesCarro extends Component {

    totalUnidades(){
        const {carro} = this.props
        return carro.reduce ((acc, el) => acc + el.cantidad, 0)
    }

    totalPrecio(){
        const {carro} = this.props
        return carro.reduce((acc, el) => acc + el.cantidad*el.price, 0)
    }

    render(){
        const { carro } = this.props
        return(
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map (x => <li style={styles.producto} key={x.name}>
                                     <img alt={x.name} src={x.img} with={50} height={32}/>
                                    {x.name}
                                    <span>{x.cantidad}</span>
                                    </li>)}
                </ul>
                <ul style={styles.total}>
                    <p>Unidades: {this.totalUnidades()}</p>
                    <p>Precio Total: S/. {this.totalPrecio()}</p>
                </ul>
            </div>
        )
    }
}

export default DetallesCarro