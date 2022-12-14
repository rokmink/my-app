import './App.css';
import Header from './components/header/header';
import Login from './components/login/login';
import RegistrationForm from './components/registration/registration';
import Order from './components/OrderField/Order';
import UserTable from './components/userTable/userTable';
import Preview from './components/preview/preview';
import Edit from './components/edit/edit';
import RegButton from './components/regButton/regButton';
import SpecialistTable from './components/specialistTable/specialistTable';
import Review from './components/review/review';
import ProjectLeadTable from './components/projectLead/projectLeadTable';
import FormTask from './components/FormTask/FormTask';
import toast, { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="App">
       {/* <Header/> */}
       {/* <RegistrationForm/> */}
        <Toaster/>
        <Login/>
        {/* <Order/> */}
        {/* <h1> {window.id}</h1> */}
        {/* <div>{window.id}</div> */}
        {/* <UserTable/> */}
        {/* <Preview/> */}
        {/* <Edit/> */}
        {/* <RegButton/> */}
        {/* <SpecialistTable/> */}
        {/* <Review/> */}
        {/* <ProjectLeadTable/> */}
        {/* <FormTask/> */}

    </div>
  );
}

export default App;
