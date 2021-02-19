import "./styles.css";
import Counter from "./components/Counter";
import FormData from "./components/FormData";
import UsingRefs from "./components/UsingRefs";
import DidMountMethod from "./components/DidMountMethod";
import FetchWithDidMountMethod from './components/FetchWithDidMountMethod';
import AnotherUpdateExample from './components/AnotherUpdateExample'
import DidUpdateMethod from './components/componentDidUpdateMethod';
import WillUnmountMethod from './components/WillUnmountMethod';
import GetDerivedStateFromPropsMethod from './components/GetDerivedStateFromPropsMethod';
import ShouldUpdateMethod from './components/ShouldUpdateMethod';
import GetSnapshotBeforeUpdateMethod from './components/GetSnapshotBeforeUpdateMethod'

export default function App() {
  return (
    <div className="App">
      <h1>React js</h1>
      <h2>Common lifecycle methods</h2>
      <Counter type="2. example of using setState API to change counter" />
      <FormData type="3. Capture input values and updating the usersList array using setState" />
      <UsingRefs type="4. Capture input values usings refs and updating the contacts array using setState" />
      <DidMountMethod/>
      <FetchWithDidMountMethod/>
      <AnotherUpdateExample/>
      <DidUpdateMethod/>
      <WillUnmountMethod/>
      <GetDerivedStateFromPropsMethod />
      <ShouldUpdateMethod />
      <GetSnapshotBeforeUpdateMethod/>
    </div>
  );
}
