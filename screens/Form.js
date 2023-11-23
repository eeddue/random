import {
  Alert,
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppContext } from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import { useScreens } from "../context/NavigationContext";
import DateTimePicker from "@react-native-community/datetimepicker";

const Form = () => {
  const { setUser, user } = useAppContext();
  const { setScreen } = useScreens();
  const [password, setPassword] = useState("");

  const [id, setId] = useState(user?.id ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [name, setName] = useState(user?.name ?? "");
  const [avatar, setAvatar] = useState(user?.avatar ?? "");
  const [details, setDetails] = useState(user?.details ?? "");
  const [daysOfWeek, setDaysOfWeek] = useState(user?.daysOfWeek ?? "");
  const [permitNo, setPermitNo] = useState(user?.permitNo ?? "");
  const [entryFrom, setEntryFrom] = useState(user?.entryfrom ?? new Date());
  const [entryTo, setEntryTo] = useState(user?.entryto ?? new Date());
  const [entryTimes, setEntryTimes] = useState(user?.entryTimes ?? "");
  const [overnighStay, setOvernighStay] = useState(user?.overnighStay ?? "");
  const [validFrom, setValidFrom] = useState(user?.validFrom ?? new Date());
  const [validTo, setValidTo] = useState(user?.validTo ?? new Date());

  const [auth, setAuth] = useState(false);
  const navigation = useNavigation();

  const authenticate = () => {
    if (password !== "12345678")
      return Alert.alert("Error", "Enter the correct password.");
    setPassword("");
    setAuth(true);
  };

  const save = async () => {
    if (
      !id.trim().length ||
      !email.trim().length ||
      !name.trim().length ||
      !avatar.trim().length ||
      !details.trim().length ||
      !daysOfWeek.trim().length ||
      !permitNo.trim().length ||
      !entryFrom ||
      !entryTo ||
      !entryTimes ||
      !overnighStay.trim().length
    )
      return Alert.alert("Missing fields", "All fields are required");

    try {
      const user = {
        id: id.trim(),
        email: email.trim(),
        name: name.trim(),
        avatar: avatar.trim(),
        details: details.trim(),
        daysOfWeek: daysOfWeek.trim(),
        permitNo: permitNo.trim(),
        entryFrom,
        entryTo,
        entryTimes,
        overnighStay: overnighStay.trim(),
      };
      await AsyncStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      navigation.navigate("Home");
      setAuth(false);
    } catch (error) {
      console.log(error);
      Alert.alert("Sorry", "Please try again");
    }
  };

  if (!auth)
    return (
      <View style={{ padding: 10 }}>
        <Text>كلمة المرور</Text>
        <TextInput
          placeholder="كلمة المرور"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.7}
          onPress={authenticate}
        >
          <Text style={{ color: "white", fontSize: 20 }}>يكمل</Text>
        </TouchableOpacity>
      </View>
    );

  return (
    <ScrollView contentContainerStyle={{ padding: 10, paddingBottom: 50 }}>
      {/* pdetails */}
      <View style={{ marginBottom: 10 }}>
        <Text>تفاصيل شخصية</Text>
        <TextInput
          placeholder="------"
          value={details}
          onChangeText={setDetails}
          style={styles.input}
        />
      </View>
      {/* fullanme */}
      <View style={{ marginBottom: 10 }}>
        <Text>الاسم الكامل</Text>
        <TextInput
          placeholder="-------"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
      </View>

      {/* id acard number */}
      <View style={{ marginBottom: 10 }}>
        <Text>رقم بطاقة الهوية</Text>
        <TextInput
          placeholder="------"
          value={id}
          onChangeText={setId}
          style={styles.input}
        />
      </View>

      {/* email */}
      <View style={{ marginBottom: 10 }}>
        <Text>البريد الإلكتروني</Text>
        <TextInput
          placeholder="------"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>

      {/* AVATAR */}
      <View style={{ marginBottom: 10 }}>
        <Text>صورة</Text>
        <TextInput
          placeholder="------"
          value={avatar}
          onChangeText={setAvatar}
          style={styles.input}
        />
      </View>

      {/* days of the week */}
      <View style={{ marginBottom: 10 }}>
        <Text>الأيام في الأسبوع</Text>
        <TextInput
          placeholder="------"
          value={daysOfWeek}
          onChangeText={setDaysOfWeek}
          style={styles.input}
        />
      </View>

      {/* permit number */}
      <View style={{ marginBottom: 10 }}>
        <Text>رقم التصريح</Text>
        <TextInput
          placeholder="------"
          value={permitNo}
          onChangeText={setPermitNo}
          style={styles.input}
        />
      </View>

      {/* number of entry times */}
      <View style={{ marginBottom: 10 }}>
        <Text>عدد مرات الدخول</Text>
        <TextInput
          placeholder="------"
          value={entryTimes}
          onChangeText={setEntryTimes}
          style={styles.input}
        />
      </View>

      {/* overnight stay */}
      <View style={{ marginBottom: 10 }}>
        <Text>المبيت</Text>
        <TextInput
          placeholder="------"
          value={overnighStay}
          onChangeText={setOvernighStay}
          style={styles.input}
        />
      </View>

      {/* valid from and to */}
      <View style={{ flexDirection: "row", gap: 10, marginVertical: 10 }}>
        <View style={{ flex: 1, alignItems: "flex-start", gap: 2 }}>
          <Text>صالح من تاريخ</Text>
          <DateTimePicker
            onChange={(e) => setValidFrom(new Date(e.nativeEvent.timestamp))}
            mode="date"
            value={validFrom}
          />
        </View>
        <View style={{ flex: 1, alignItems: "flex-start", gap: 2 }}>
          <Text>صالحة ل</Text>
          <DateTimePicker
            onChange={(e) => setValidTo(new Date(e.nativeEvent.timestamp))}
            mode="date"
            value={validTo}
          />
        </View>
      </View>

      {/* from and to */}
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View style={{ flex: 1, alignItems: "flex-start", gap: 2 }}>
          <Text>وقت الدخول من</Text>
          <DateTimePicker
            onChange={(e) => setEntryFrom(new Date(e.nativeEvent.timestamp))}
            mode="time"
            value={entryFrom}
          />
        </View>
        <View style={{ flex: 1, alignItems: "flex-start", gap: 2 }}>
          <Text>وقت الدخول الى</Text>
          <DateTimePicker
            onChange={(e) => setEntryTo(new Date(e.nativeEvent.timestamp))}
            mode="time"
            value={entryTo}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.btn} activeOpacity={0.7} onPress={save}>
        <Text style={{ color: "white", fontSize: 20 }}>يحفظ</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Form;

const styles = StyleSheet.create({
  input: {
    padding: 10,
    backgroundColor: "white",
    height: 50,
  },
  btn: {
    backgroundColor: COLORS.blue,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 30,
  },
});
