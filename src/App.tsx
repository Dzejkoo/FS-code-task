import React, {useReducer, useEffect } from 'react';
import { setData } from './data-mock';
import { FormSearch } from './components/FormSearch'

type State = {
  data?: HNResponse,
  loading: boolean, 
  error?: string,
}

type Action = 
  | {type: 'call-api' }
  | {type: 'success', results: HNResponse}
  | {type: 'failure', error: string}

interface HNResponse  {
  current_page: number,
  data: {
    assigned_to?: {
      person_name?:string, 
      status?: string, 
    }[]
    description: string, 
    priority: string, 
    received_date: string, 
    status: string, 
    work_order_id: number,
  }[]
  from: number, 
  last_page: number, 
  per_page: number, 
  to: number, 
  total: number,
};

const reducer = (state: State, action: Action) =>{
  switch(action.type){
    case 'call-api':{
      return{
        loading: true
      }
    }
    case 'success': {
      return{
        loading: false, 
        data: action.results
      }
    }
    case 'failure': {
      return{
        loading: false, 
        error: action.error
      }
    }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] =  useReducer(reducer, {loading: true})

  const {data, loading} = state; 

  useEffect(()=>{
    setData()
      .then(data => dispatch({type: 'success', results: data.response}))
      .catch((error) => dispatch({type: 'failure', error: error}));
  }, [])
 
  return (
    <>
        {loading ? <div>error</div> : <FormSearch info={data}/>  }
    </>

  )
}
export default App;
