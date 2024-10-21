import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPaper } from '../features/papers/paperSlice'
//Simple React component for a form that allows users to create a new paper.

function PaperForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createPaper({ text }))
    setText('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Paper</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Paper
          </button>
        </div>
      </form>
    </section>
  )
}

export default PaperForm