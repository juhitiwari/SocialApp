import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import { PermissionsAndroid } from 'react-native'

class UserPermissions{
  getPhotoPermission=async ()=>{
    if(Constants.platform.ios){
      const {status}=await Permissions.askAsync(Permissions.CAMERA_ROLL)
      if(status!='granted'){
        alert('We need permission to access your camera roll')
      }
      else{
        const granted=await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA_ROLL,{
            title:"Social App Camera Permission",
            message:"Social App needs access to your camera",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        )
      
      if(granted!==PermissionsAndroid.RESULTS.GRANTED){
        alert('We need permission to access your camera roll')
      
      }
    }
    }
  }
}

export default new UserPermissions()