import { useState } from 'react';
import styles from './styles.module.css'
function App() {
  const [text, setText] = useState('')
  const [isEmpty, setEmpty] = useState(true)
  const [btnClass, setBtnClass] = useState(styles.sendBtnDis)
  const [responce, setResponce] = useState('')
  const [resStyle, setResStyle] = useState()
  const [formClass, setFormClass] = useState(styles.form)

  const handleSetText = (e) => {
     setText(e.target.value)
     if (text !== ''){
      setEmpty(false)
      setBtnClass(styles.sendBtn)
     }
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(text)
    setText('')
    setEmpty(true)
    setBtnClass(styles.sendBtnDis)
    setResponce('')
    setFormClass(styles.greenForm)
    setResponce('Сообщение отправлено')
    setResStyle(styles.greenRes)
  }
  const handleBlur = () =>{
    if (!text){
      setFormClass(styles.redForm)
      setResponce('Поля ввода не должно быть пустым')
      setResStyle(styles.redRes)
      setBtnClass(styles.sendBtnDis)
    }
  }
 
    

  return (
    <>
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input
      type='text'
      className={formClass}
      value={text} onChange={handleSetText}
      onBlur={(e)=>handleBlur(e)}
      />
      <button 
      type='submit' 
      className={btnClass} 
      disabled={isEmpty}
      >Отправить</button>
    </form>
    
    <div className={resStyle}>{responce}</div>
    </>
    
    
  );
}

export default App;
