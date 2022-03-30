import React, {useContext,useState,useEffect} from 'react';
import { AuthContext } from "../../contexts/auth";
import {Alert,TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


import {Background,Container,Nome,Saldo,Title,List,Area} from './styles'
import Header from '../../components/Header'
import HistoricoList from '../../components/HistoricoList'
import DatePicker from '../../components/DatePicker'

import firebase from '../../services/firebaseConnection'

import { format, isBefore } from 'date-fns'

export default function Home() {
  const [hist,setHist]=useState([])
  const [saldo,setSaldo]=useState(0)

  const {user}=useContext(AuthContext)
  const uid = user && user.uid

  const [newDate,setNewDate]=useState(new Date())
  const [show,setShow]=useState(false)

  useEffect(()=>{
    async function loadList(){
      await firebase.database().ref('users').child(uid).on('value', (snapshot)=>{
        setSaldo(snapshot.val().saldo);
      });

      await firebase.database().ref('historico')
      .child(uid)
      .orderByChild('date').equalTo(format(newDate, 'dd/MM/yyyy'))
      .limitToLast(10).on('value', (snapshot)=>{
        setHist([]);

        snapshot.forEach((childItem) => {
          let list = {
            key: childItem.key,
            tipo: childItem.val().tipo,
            valor: childItem.val().valor,
            date:  childItem.val().date
          };
          
          setHist(oldArray => [...oldArray, list].reverse());
        })
      })

    }

    loadList();
  }, [newDate]);

  function handleDelete(data){
    //data do item
    const [diaItem,mesItem,anoItem]=data.date.split('/')
    const dateItem= new Date(`${anoItem}/${mesItem}/${diaItem}`)
    console.log(dateItem);
    //dia hoje
    const formatHoje= format(new Date(), 'dd/MM/yyyy')
    const [diaHoje,mesHoje,anoHoje]= formatHoje.split('/')
    const dateHoje= new Date(`${anoHoje}/${mesHoje}/${diaHoje}`)
    console.log(dateHoje);

    if(isBefore(dateItem,dateHoje)){
      alert('você não pode excluir um registro antigo')
      return
    }

    Alert.alert(
      `Atenção!!`,
      `Você deseja excluir ${data.tipo} - Valor: ${data.valor}`,
      [
        {
          text:'Cancelar',
          style:'cancel'
        },
        {
          text: 'Deletar',
          onPress: ()=> handleDeleteSuccess(data)
        }
      ]
    )
  }

  async function handleDeleteSuccess(data){
    await firebase.database().ref('historico')
    .child(uid).child(data.key).remove()
    .then( async ()=>{
      let saldoAtual=saldo
      data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : saldoAtual -= parseFloat(data.valor)

      await firebase.database().ref('users').child(uid).child('saldo').set(saldoAtual)
    })
    .catch((error)=>{
      console.log(error)
    })

  }

  function handleShowPicker(){
    setShow(true)
  }

  function handleClose(params) {
    setShow(false)
  }

  const onChange= (date)=>{
    setShow(Platform.OS === 'ios')
    setNewDate(date)
    console.log(date)
  }

  return (
    <Background>
      <Header/>
      <Container>
        <Nome>{user && user.nome}</Nome>
        {saldo == 0 ? <Saldo>...</Saldo> :
        <Saldo>R$ 
          {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
        </Saldo>
        }
      </Container>
      
      <Area>
        <TouchableOpacity onPress={handleShowPicker}>
          <MaterialIcons name="event" color="#fff" size={30}/>
        </TouchableOpacity>
        <Title>ultimas movimentação</Title>
      </Area>

      <List
        showsVerticalScrollIndicator={false}
        data={hist}
        keyExtractor={item=>item.key}
        renderItem={({item})=>(<HistoricoList data={item} deleteItem={handleDelete}/>)}
      />

      {show && (
        <DatePicker
          onClose={handleClose}
          date={newDate}
          onChange={onChange}
        />
      )}
    </Background>
  );
}