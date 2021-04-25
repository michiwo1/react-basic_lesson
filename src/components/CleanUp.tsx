import React, { useEffect, useState } from 'react'


export const CleanUp: React.FC = () => {
  const [currentNum, setCurrentNum] = useState(0);
  const incrementNum = () => { 
    console.log("Mouse event");
    setCurrentNum((preNumber) => 
      preNumber + 1
    );
  }

  useEffect(() => { 
    console.log("userEffect in CleacUp test")
    window.addEventListener("mousedown", incrementNum)
    return () => { 
      console.log("CleacUp invoked")
      window.removeEventListener("mousedown", incrementNum)
    }
  }, [])

  return (
    <div style={style}>
      <h2>CleanUpコンポーネント</h2>
      {currentNum}
    </div>
  )
}

const style = {
  backgroundColor: "red",  
}