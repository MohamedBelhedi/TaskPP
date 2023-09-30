/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/** 
 * Eine was verbunden ist mit dem OpenAI ChatComplition 
 * wenn der User sich mit der Chat GPT Docs befasst ist wird im das ChatComplitions 
  freigeschaltet, in der Anwort muss xyz befasst sein
 * 
 **/
import React,{useState,useEffect} from "react";
import { Alert, Button, SafeAreaView,ScrollView, Pressable ,SectionList, StyleSheet, Text, TextInput, View } from "react-native";


const App=()=>{

const[farbe,setFarbe]=useState({textDecorationLine:"line-through"});
const[score,setScore]=useState(0);
const[task,setTask]=useState("");
const[_task,set_Task]=useState([]);
const tag=new Date().getDate();
let i=0;


const setTasks=()=>{
  // task.length<1?Alert.alert("Setze dein Task!!")&false:null;
  if(task.length<1){
    Alert.alert("Setze dein Task!!");
    return false;
  }
  else{

    setScore(score+1)

  }
  _task.forEach(items=>{
    items.task==="Lernen"?setScore(score+2):setScore(score+1);
    items.task==="Zocken"?setScore(score-1):null;

        
  })
set_Task([..._task,
  {id:i++,task:task}]);


};

useEffect(()=>{
  
  score===11?Alert.alert("Super du hast ein Level Up Erreicht"):null
  /***
   * Hier eine Notification machen
   * 
   *
   * ***/ 
  

  _task.length<1&tag===tag?Alert.alert("Nichts gemacht heute"):console.log("passt")
  console.log("check");
  console.log(_task.length);
 

 
 
  // console.log(tag);
  //   _task.map((tasks)=>{
  //     console.log(tasks);
  //     console.log(_task.length)
  //   }
  //   );
    
  

 

 

},[]);

return(

<SafeAreaView style={styles.sectionContainer}>


<Text>Score :{score}</Text>
<ScrollView>
<View>
{_task.map(task=>(


  <>
 
  <Button
  key={task.id}

  onPress={()=>{
    
    console.log(task.task);
    console.log(task.id);
  }}
  title={task.task}
  />
  <Text onPress={()=>{_task.forEach(item=>{
    
    // console.log(_task[0].task===task.task);
    console.log(item.task===item.task);
    setTasks([item.task===item.task])
   
  })}}>X</Text>
  </>
 
))}
</View>
</ScrollView>


<TextInput 
onChangeText={(text)=>{setTask(text)}}
value={task}
placeholder="Task"/>
<View>
<Button title="Set Task" onPress={setTasks} />
</View>
</SafeAreaView>


)
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  text:{
    color:"red",
    
  }
});

export default App;
