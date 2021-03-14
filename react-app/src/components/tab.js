function FancyModalButton() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal(e) {
    setIsOpen(!isOpen)
  }

  render () {
    return (
      <div>
        <button onClick={toggleModal}>Click me</button>
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}>
          <span>I am a modal!</span>
          <button onClick={toggleModal}>Close me</button>
        </StyledModal>
      </div>
    )
  }
}