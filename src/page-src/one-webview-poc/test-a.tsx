export const TestA = () => {
  return (
    <div>
      <img src='https://source.unsplash.com/random/400x400' />

      <button
        style={{
          display: 'block',
        }}
        onClick={() => {
          window.history.back()
        }}>
        Go back
      </button>
    </div>
  )
}
