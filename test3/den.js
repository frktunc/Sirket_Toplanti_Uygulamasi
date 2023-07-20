import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import DatePicker from 'react-native-date-picker'


const App = () => {
  const [duyuru, setDuyuru] = useState('');
  const [maddeler, setMaddeler] = useState([
    // maddeler verileri burada
  ]);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const duyuruDegistir = () => {
    // duyuruDeğiştir fonksiyonu içeriği burada
  };

  const maddeyiSec = (id) => {
    // maddeyiSec fonksiyonu içeriği burada
  };

  return (
    <View >
      {/* Diğer içerik burada */}
      <TouchableOpacity
        style={styles.tarihButton}
        onPress={() => setOpen(true)}
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
  );
};

const styles = StyleSheet.create({
  // Diğer stiller burada
  tarihButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "center",
  },
  tarihButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default App;
