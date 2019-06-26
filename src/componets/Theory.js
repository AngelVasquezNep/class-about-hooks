import React from "react"

const Code = ({ children }) => (
  <div className="card">
    <pre>
      <code>{children}</code>
    </pre>
  </div>
)

const Theory = () => {
  return (
    <details className="box">
      <summary>Teoria</summary>

      <div className="content">
        <ul>
          <li>
            <p>
              <strong>useState</strong>
            </p>
            <ul>
              <li>
                <p>Se declara como:</p>
                <Code>
                  const [someValue, setSomeValue] = React.useState(initialValue)
                </Code>
              </li>
              <li>
                El valor inicial puede ser cualquier tipo de dato, booleano,
                string, objeto, arreglo, etc.
              </li>
              <li>
                <p>
                  Podemos pasar una función como argumento en caso de que el
                  initialState de ese componente sea costoso de calcular.
                </p>
                <Code>
                  {`
                  const [value, setValue] = setState(() => expensiveInitialValue())
                  `}
                </Code>
              </li>
              <li>
                <p>
                  Para hacer un update del valor sólo tenemos que llamar al
                  setValue
                </p>
                <Code>
                  {`
                  <button
                    onClick={() => setCount(count => count + 1)}
                  >
                    Increment
                  </button>
                  `}
                </Code>
              </li>
              <li>
                <p>
                  <span className="tag is-danger">Nota:</span> No hay merge del
                  estado
                </p>
                <Code>
                  {`
                  const [{ value1, value2 }, setValue] = useState({ value1: 1, value2: 2 })

                  <button
                    onClick={() => setValue({ value1: 10 })}
                  >
                    Change Value
                  </button>

                  `}
                </Code>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>useEffect</strong>
            </p>
            <ul>
              <li>Se usa para manejar side effects</li>

              <li>
                <p>Se declara como</p>
                <Code>
                  {`
                  import React, { useEffect } from React
                  
                  const MyComponent = () => {
                    useEffect(() => {
                      console.log("call in every render")
                    })
                    
                    return <div>...</div>
                  }
                  `}
                </Code>
              </li>
              <li>
                <p>Se puede emular el mount y unmount del component</p>
                <Code>
                  {`
                    useEffect(()=>{
                      console.log("Sólo me llamo al montar")
                    },[])

                    useEffect(()=>{
                      //some logic

                      return () => {
                        console.log("Sólo me llamo al morir")
                      }
                    },[])
                  `}
                </Code>
              </li>

              <li>
                <p>
                  La idea es poder separar lógica de forma semántica y si se
                  necesita, atacharle un función que limpie el efecto
                </p>

                <Code>
                  {`
                    useEffect(() => {
                      const handleEvent = event => console.log(event)

                      window.addEventListener('mouseover', handleEvent)

                      return () => {
                        window.removeEventListener('mouseover', handleEvent)
                      }
                    }, [])


                    useEffect(() => {
                      const count = setInterval(()=>console.log('Hola'), 1000)

                      return () => {
                        clearInterval(count)
                      }
                    }, [])
                  `}
                </Code>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </details>
  )
}

export default Theory
