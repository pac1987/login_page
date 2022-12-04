import './App.css';
import { useState } from 'react'

function App() {

  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }

  return (
    <div className="App">
      <button>show modal</button>
      <BaseModalWrapper />
    </div>
  );
}

export default App;