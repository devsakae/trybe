// Essa função ajusta o state para o valor inserido em formulário

handleChange({ target }) {
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;

  this.setState({
    [name]: value,
  });
}