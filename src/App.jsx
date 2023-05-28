import './App.css';
import './styles/globals.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../../react-example-project-router/src/redux/rootReducer';

// import Exercise1 from './components/useState_Exercise/Exercise1';
// import Exercise2 from './components/useState_Exercise/Exercise2';
// import Exercise3 from './components/useState_Exercise/Exercise3';
// import Exercise4 from './components/useState_Exercise/Exercise4';
// import Exercise5 from './components/useState_Exercise/Exercise5';
// import Exercise6 from './components/useState_Exercise/Exercise6';
// import Exercise1 from './components/useEffect_Exercise/Exercise1';
// import ParentChild from './components/useState_Exercise/ParentChild';
// import Exercise7 from './components/useState_Exercise/Exercise7';
// import HttpPost from './components/HttpPost';
// import Contact from './components/Contact';
// import RegisterForm from './components/RegisterForm';
import Form from './components/Formik_without_UI_library/Form';
// import Counter from './redux/Counter';

const store = configureStore(
  { reducer: rootReducer }
);

function App() {

  return (

    <Provider store={store}>
      <h1 className='w-100 bg-light border-5'>OUR APP</h1>
      {/* -------- UseState EXERCISES -------- */}
      {/* <Exercise1 /> */}
      {/* <Exercise2 /> */}
      {/* <Exercise3 /> */}
      {/* <Exercise4 /> */}
      {/* <Exercise5 /> */}
      {/* <Exercise6 /> */}
      {/* <Exercise7 /> */}

      {/* -------- UseEffect EXERCISES -------- */}
      {/* <Exercise1 /> */}

      {/* <ParentChild /> */}

      {/* <HttpPost /> */}

      {/* <Contact /> */}

      {/* <RegisterForm /> */}

      <Form />

      {/* <Counter /> */}



    </Provider>
  )
}

export default App
