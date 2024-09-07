export const onlyNumbers = (value: string) => {
  if (!value) return '';

  return value.replace(/\D/g,'');
};

export const CNPJ = (value: string): string => {
  if (!value) return '';

  if (
    value.length < 14
    || (value.length < 18 && (value.includes('.') || value.includes('/')))
  ) return onlyNumbers(value);

  return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5");
};

export const CPF = (value: string) => {
  value = onlyNumbers(value);

  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}