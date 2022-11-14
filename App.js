import { StyleSheet, Text, View } from "react-native"

const App = () => {
    return(
       
  <View style={styles.container}>      
              <View style={styles.faixa1} />             
              <View style={styles.faixa2}>
                   <Text style={styles.superior}/>
                   <Text style={styles.inferior}/>
              </View>                                     
              <View style={styles.faixa3}>
                  <Text style={styles.bloco1}/>
                  <Text style={styles.bloco2}/>
              </View>
              <View style={styles.faixa4} />
              <View style={styles.faixa5}>
                  <Text style={styles.bloco}/>
                  <Text style={styles.bloco}/>
                  <Text style={styles.bloco}/>
                  <Text style={styles.bloco}/>
                  <Text style={styles.bloco}/>
                  <Text style={styles.bloco}/>
              </View>
              <View style={styles.faixa6} />
              
  </View>

       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    faixa1: {
        height: '3%',
        backgroundColor: '#50E4C2'
    },
    faixa2: {
        height: '28%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    faixa3: {
        height: '12%',
        flexDirection: 'row'
    },
    faixa4: {
        height: '3%',
        backgroundColor: '#16E5CB'
    },
    faixa5: {
        flexWrap: 'wrap',
        height: '46%',
        alignContent: 'space-around',
        justifyContent: 'center'
    },
    faixa6: {
        height: '8%',
        backgroundColor: '#5485E1'
    },
    superior: {
        height: 80,
        width: 80,
        backgroundColor: '#F8A82B',
        marginBottom: 15
    },
    inferior: {
        height: 20,
        width: 120,
        backgroundColor: '#F8A82B'
    },
    bloco: {
        height: 100,
        width: 100,
        margin: 10,
        backgroundColor: '#F8A82B'
    },
    bloco1: {
        width: '50%',
        backgroundColor: '#A900FD'
    },
    bloco2: {
        width: '50%',
        backgroundColor: '#5485E1'
    }
})


export default App



