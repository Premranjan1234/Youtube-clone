
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { Provider} from 'react-redux';
import store from './utils/Store';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Watchpage from './components/Watchpage';
import VideoResults from './components/VideoResults';


const appRouter=createBrowserRouter([{
   path:"/",
   element:<Body/>,
   children:[{
    path:"/",
    element:<MainContainer/>,
  },
  {
    path:"/searchresult",
    element:<VideoResults/>,
  },
  {
    path:"watchpage",
    element:<Watchpage/>,
  }
]

}])

function App() {
  
  return (
    <Provider store={store}>
     <div>
      
      <Header/>
      <RouterProvider router={appRouter}/>
      
    </div>
    </Provider>
  );
}

export default App;
