function formattedValue(valor: any) {
  const valorFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);

  const valorSemCentavos = valorFormatado.replace(",00", "");
  return valorSemCentavos;
}

export default formattedValue;
