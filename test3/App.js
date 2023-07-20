import React, { useState } from "react";
import { Button, FlatList, Text, View,StyleSheet,TouchableOpacity } from "react-native";
import DatePicker from 'react-native-date-picker'
import styles from './App_style'




const App = () => {
  const [duyuru, setDuyuru] = useState('');
  const [maddeler,setMaddeler] = useState([
    {id:1, text: 'Conrad İstanbul Bosphorus ',voteCount:0},
    {id:2, text: ' Crowne Plaza İstanbul - Florya',voteCount:0},
    {id:3 , text:'Hilton Istanbul Bomonti Hotel',voteCount:0},
    {id:4 , text:'Sheraton Istanbul City Center',voteCount:0},
    {id:5 , text:' Pera Palace Hotel',voteCount:0},
    {id:6 , text:' Sura Hagia Sophia Hotel',voteCount:0},
    {id:7 , text:' Sofitel İstanbul Taksim',voteCount:0},
  ]);

  const duyuruDegistir = (selectedDate) => {
    let enCokOyAlanMadde = maddeler[0];
    maddeler.forEach((madde)=>{
      if(madde.voteCount > enCokOyAlanMadde.voteCount) {
        enCokOyAlanMadde = madde;
      }
    });
    const formattedDate = selectedDate.toLocaleString(); 

    setDuyuru(enCokOyAlanMadde.text + " de toplantımız gerçekleşecektir. Seçilen Tarih: " + formattedDate  );

    setMaddeler((prevMaddeler) =>
    prevMaddeler.map((madde)=>({...madde,voteCount:0}))
    );
  };
  const maddeyiSec = (id) => {
    setMaddeler((prevMaddeler) =>
    prevMaddeler.map((madde) =>
    madde.id ===id ? {...madde, voteCount: madde.voteCount +1}: madde
    )
    )
    
  };
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return(
   < View style={styles.container}>
    <View style={styles.text_container}>
      <Text style={styles.main_textt}>FST YAZILIM</Text>
    <Text style={styles.main_text}>Şirketimizin Departman Etkinlik Uygulamasına  </Text>
   <Text style={styles.main_text2}>Hoşgeldiniz</Text>
    </View>
  <View style={styles.duyuru_container}>
    
      <Text style={styles.duyuru_text}>
        {duyuru}
      </Text>
      <Button  title="Duyuruyu değiştir" onPress={duyuruDegistir} />
      <FlatList 
  data={maddeler}
  renderItem={({ item }) => (
    <View style={styles.maddeContainer}>
      <Button title={item.text} onPress={() => maddeyiSec(item.id)} />
      <Text style={styles.voteCountText}>Oy Sayısı: {item.voteCount}</Text>
    </View>
  )}
  keyExtractor={(item) => item.id.toString()}
  style={styles.flatlist}
/>
<TouchableOpacity
        style={styles.tarihButton}
        onPress={() => duyuruDegistir(date)}
      >
        <Text style={styles.tarihButtonText}>Tarih ve Saat Seç</Text>
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(selectedDate) => {
          setOpen(false);
          setDate(selectedDate);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

    
    </View>
   </View>
  )
      }
export default App;