import React from 'react';
import './styles.css';
import Counter from './components/Counter';
import FormData from './components/FormData';
import UsingRefs from './components/UsingRefs';
import DidMountMethod from './components/DidMountMethod';
import FetchWithDidMountMethod from './components/FetchWithDidMountMethod';
import AnotherUpdateExample from './components/AnotherUpdateExample';
import DidUpdateMethod from './components/componentDidUpdateMethod';
import WillUnmountMethod from './components/WillUnmountMethod';
import GetDerivedStateFromPropsMethod from './components/GetDerivedStateFromPropsMethod';
import ShouldUpdateMethod from './components/ShouldUpdateMethod';
import GetSnapshotBeforeUpdateMethod from './components/GetSnapshotBeforeUpdateMethod';
import Modal from './components/Modal';
import GetMakeApi from './components/GetMakeApi';
import ImpureComponent from './components/ImpureComponent';
import Pure from './components/Pure';
import Hello from './components/Hello';
import Hack from './components/Hack';
import Persist from './components/Persist';
import Signin from './components/Signin';
import FetchData from './components/FetchData';
import UseRefs from './components/UseRefs';
import Synthetic from './components/Synthetic';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import RefsDemo from './components/RefsDemo';
import Demo from './components/Demo';
import Calculator from './components/Calculator';
import Unstable from './components/Unstable';
import IsAsync from './components/IsAsync';
import GenerateList from './components/GenerateList';
import Try from './components/Try';
import StateUse from './components/StateUse';
import StopWatch from './components/StopWatch';
import LoadPosts from './components/LoadPosts';
import ShowFilterData from './components/ShowFilterData';
import UsersData from './components/UsersData';
import SubmitForm from './components/SubmitForm';
import InputWithSearch from './components/InputWithSearch';
import MultiSelect from './components/MultiSelect';
import Pagination from './components/Pagination'
import Parent from './components/Parent';

class App extends React.Component {
  // state = {
  //   show: false,
  //   value: '',
  // };
  // showModal = (e) => {
  //   this.setState({
  //     show: !this.state.show,
  //   });
  // };
  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // }
  state = {
    value: 1
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({value: 1})
    }, 2000)
  }

  render() {
    return (
      <div className='App'>
          <Parent />
          <Try /> <br/>
          <StopWatch /><br/>
          <LoadPosts /><br/>
          <ShowFilterData /> <br/>
          <UsersData />
          <SubmitForm />
          <InputWithSearch />
          <MultiSelect />
          <Pagination />
        <GenerateList />
        {/* <Unstable value={this.state.value} /> */}
        {/* <IsAsync /> */}
        {/* <Try/> */}
        {/* <StateUse/> */}
        {/* <Calculator/> */}
        {/* <Demo/> */}
        {/* <RefsDemo/> */}
        {/* <Table/>
        <FragmentDemo/>
        <Synthetic/>
        <UseRefs/>
        <FetchData />  */}
         {/* <h2>LOCALSTORAGE-</h2> */}
        {/* <Signin />
        <Persist />
        <Hack />
        <h1>React js</h1>
        <h2>Common lifecycle methods</h2>
        <Hello type='test'>Welcome to Reactjs Lifecycle methods</Hello>
        
        <Pure/>
        <GetMakeApi />
        <div
          style={{ height: '350px', background: '#f2f4f8', padding: '20px' }}
        >
          <div class='parent'>
            <div class='left margin-right-auto'>
              <h3>Hybrid Cloud</h3>
            </div>
            <div class='right'>
              {this.state.value === '' ? (
                <button
                  class='toggle-button'
                  id='centered-toggle-button'
                  onClick={(e) => {
                    this.showModal(e);
                  }}
                >
                  {' '}
                  subscribe to fruits
                </button>
              ) : (
                <button
                  class='toggle-button'
                  id='centered-toggle-button'
                  onClick={(e) => {
                    this.showModal(e);
                  }}
                >
                  subscribed to fruits
                </button>
              )}
            </div>
          </div>
          <ul class='flex-container'>
            <li class='flex-item'>1</li>
            <li class='flex-item'>2</li>
            <li class='flex-item'>3</li>
            <li class='flex-item'>4</li>
            <li class='flex-item'>5</li>
            <li class='flex-item'>6</li>
          </ul>
        </div>
        <div
          style={{ height: '350px', background: '#f2f4f8', padding: '20px' }}
        >
          <div class='parent'>
            <div class='left margin-right-auto'>
              <h3>5G and Edge</h3>
            </div>
            <div class='right'>
              {this.state.value === '' ? (
                <button
                  class='toggle-button'
                  id='centered-toggle-button'
                  onClick={(e) => {
                    this.showModal(e);
                  }}
                >
                  {' '}
                  subscribe to fruits
                </button>
              ) : (
                <button
                  class='toggle-button'
                  id='centered-toggle-button'
                  onClick={(e) => {
                    this.showModal(e);
                  }}
                >
                  subscribed to fruits
                </button>
              )}
            </div>
          </div>
          <ul class='flex-container'>
            <li class='flex-item'>1</li>
            <li class='flex-item'>2</li>
            <li class='flex-item'>3</li>
            <li class='flex-item'>4</li>
            <li class='flex-item'>5</li>
            <li class='flex-item'>6</li>
          </ul>
        </div>
        <Modal onClose={this.showModal} show={this.state.show}>
          <form>
            <label>
              Pick your favorite flavor:
              <select
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
              >
                <option value='default'>none</option>
                <option value='grapefruit'>Grapefruit</option>
                <option value='lime'>Lime</option>
                <option value='coconut'>Coconut</option>
                <option value='mango'>Mango</option>
              </select>
            </label>
          </form>
          <h2>{this.state.value}</h2>
        </Modal>
        <Counter type='2. example of using setState API to change counter' />
        <FormData type='3. Capture input values and updating the usersList array using setState' />
        <UsingRefs type='4. Capture input values usings refs and updating the contacts array using setState' />
        <DidMountMethod />
        <FetchWithDidMountMethod />
        <AnotherUpdateExample />
        <DidUpdateMethod />
        <WillUnmountMethod />
        <GetDerivedStateFromPropsMethod />
        <ShouldUpdateMethod />
        <GetSnapshotBeforeUpdateMethod /> */}
      </div>
    );
  }
}

export default App;
