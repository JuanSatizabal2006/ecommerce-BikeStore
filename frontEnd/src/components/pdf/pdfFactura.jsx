import React from 'react'
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh'
    },
    section: {
      display: 'flex',
      flexDirection: 'column',
      padding: '24px',
      paddingBottom: '48px',
      gap: '16px',
      justifyContent: 'center',
      alignItems: 'center'
    },
    border: {
      borderTopWidth: '1px',
      borderTopColor: '#a40505'
    },  
    total: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      fontSize: '18px',
      fontWeight: 'bold',
      padding: '24px'
    },
  });

const Factura = ({articuloPedido, usuarioPedido, idPedido}) => {

    console.log(articuloPedido);
    console.log(usuarioPedido);
    console.log(idPedido);

    const copiaArticulos = [...articuloPedido];

    console.log(copiaArticulos[0]);
    //Obtener el total de la venta
    const total = copiaArticulos.map((item)=> {
      return parseInt(item.vr_total)
    }, 0);

  return (
    <Document>
        <Page size={'A5'} style={{backgroundColor: '#F2F2F2'}}>
            
        
            <View style={styles.container}>
                <View style={{backgroundColor: 'white', paddingTop: '3vh', borderRadius: '20px'}}>
                    <View style={styles.section}>
                      <Image src='https://bikestoresena.s3.amazonaws.com/imagenesExtras/logo_negro.png' style={{width: '80%', height: '18%'}}></Image>
                    <Text style={{fontSize: '5vh', color: '#a40505', textAlign: 'center'}}>Detalle pedido</Text>
                    
                    {usuarioPedido.map((item) => (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }} key={item.id_venta}>
                            <View style={{ marginRight: '24px', fontSize: '2vh', fontWeight: 'bold', display: 'flex', flexDirection: 'column', gap: '0.5vh' }}>
                                <Text>ID:</Text>
                                <Text>Fecha:</Text>
                                <Text>Nombre:</Text>
                                <Text>Numero Telefonico:</Text>
                                <Text>Correo:</Text>
                                <Text>Ciudad:</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end', fontSize: '2vh', display: 'flex', flexDirection: 'column', gap: '0.5vh' }}>
                                <Text>#{idPedido}</Text>
                                <Text>{item.fecha.split("T")[0]}</Text>
                                <Text>{item.nombre}</Text>
                                <Text>+57 {item.telefono}</Text>
                                <Text style={{ textDecoration: 'underline' }}>{item.correo}</Text>
                                <Text>{!item.ciudad ? 'No hay ciudad' : item.ciudad}</Text>
                            </View>
                        </View>
                    ))}
                    {articuloPedido.map((item, index) => (
                        <View style={{ flexDirection: 'row', width: '100%' }} key={index}>
                            <Text style={{ fontWeight: 'bold', fontSize: '1.8vh' }}>{item.nombre}</Text>
                            <Text style={{ marginLeft: 'auto', fontSize: '1.8vh' }}>x{item.cantidad}</Text>
                        </View>
                    ))}
                    </View>

                    <View style={styles.border}></View>
                        <View style={styles.total}>
                            <Text style={{marginRight: '150px'}}>TOTAL:</Text>
                            <Text>${new Intl.NumberFormat().format(total[0])}</Text>
                        </View>

                    </View>

            </View>
              
        </Page>
    </Document>
  )
}
export default Factura