export const useModal = () => {
  const show = useState('modalAgregarContador', () => false)
  return { show }
}