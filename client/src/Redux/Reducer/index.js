import {
    GET_ALL_CHARACTERS,
    RESET_ALL_CHARACTERS
    }from '../Actions/index.js'
    
    const initialState ={
        characters:[],
        character:{},
        episodes:[]
    }
    
    export default function reducer (state = initialState, {type, payload}){
    
        switch (type) {
           
            case GET_ALL_CHARACTERS:
                return {
                   ...state,
                    characters: payload
                }
            
        
            default:
                return state
        }
    
    }