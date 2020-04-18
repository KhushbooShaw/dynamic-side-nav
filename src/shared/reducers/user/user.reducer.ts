import { IUserResponse } from 'shared/models/user.model';
import axios from 'axios';
import { REQUEST, SUCCESS, FAILURE } from 'shared/reducers/action-type';
import { userChoices } from 'shared/utilities/constants';

export const ACTION_TYPES = {
    FETCH_ALL_USERS: 'user/FETCH_ALL_USERS',
    SET_USER_CHOICES: 'user/SET_USER_CHOICES',
    SET_USER_SELECTIONS: 'user/SET_USER_SELECTIONS'
  };
  
  export const initialState = {
    loading: false,
    users: {} as IUserResponse,
    userChoice: userChoices,
    userSelections: []
  };
  
  export type UserState = Readonly<typeof initialState>;
  
  // Reducer
  export default (state: UserState = initialState, action: any): UserState => {
    switch (action.type) {
      case REQUEST(ACTION_TYPES.FETCH_ALL_USERS):
        return {
          ...state,
          loading: true
        };
      case SUCCESS(ACTION_TYPES.FETCH_ALL_USERS):
        return {
          ...state,
          loading: false,
          users: action.payload
        };
      case FAILURE(ACTION_TYPES.FETCH_ALL_USERS):
        return {
          ...state,
          loading: false
        };
      case ACTION_TYPES.SET_USER_CHOICES:
        return {
          ...state,
          userChoice: action.payload
        };
      case ACTION_TYPES.SET_USER_SELECTIONS:
        return {
          ...state,
          userSelections: action.payload
        };
      default:
        return state;
    }
  };

  const apiUrl = 'api/users';
  
  // Actions
   
  export const getEntities = () => ({
    type: ACTION_TYPES.FETCH_ALL_USERS,
    payload: axios.get<IUserResponse>(apiUrl)
  });

  export const setUserChoices = (userChoices:any[]=[]) => ({
    type: ACTION_TYPES.SET_USER_CHOICES,
    payload: userChoices
  });

  export const setUserSelections = (userSelections:any[]=[]) => ({
    type: ACTION_TYPES.SET_USER_SELECTIONS,
    payload: userSelections
  });
  