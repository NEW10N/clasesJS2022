//Se crea archivo de selectores que se utilizan 
import {body, button} from "./selectores.js"
//Metodos del mode
import {getMode, setMode} from "./mode.js"
//Manejador del Evento Mode
import handleModeEvent from "./handleModeEvent.js"

handleModeEvent(body,button,getMode,setMode);

