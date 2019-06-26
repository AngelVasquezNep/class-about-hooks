import { useState, useCallback, useEffect } from "react"

export const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = useCallback(
    ({ target }) =>
      setValues(values => ({
        ...values,
        [target.name]: target.value
      })),
    [setValues]
  )

  return [values, handleChange]
}

const initialDataStatus = {
  data: null,
  loading: false,
  error: null,
  success: false
}

export const useFetchSearch = url => {
  const [{ data, loading, error, success }, setData] = useState(
    initialDataStatus
  )

  useEffect(() => {
    setData(data => ({ ...data, loading: true }))

    fetch(url)
      .then(res => res.json())
      .then(data =>
        setData({ ...initialDataStatus, loading: false, success: true, data })
      )
      .catch(error => setData({ ...initialDataStatus, loading: false, error }))
  }, [url])

  return { data, loading, error, success }
}
