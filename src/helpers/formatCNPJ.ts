const formatCNPJ = (value: string): { value: string; cnpj: string } => {
  const c = value
    .replace(/\D/g, "")
    .match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
  console.log(c);

  if (c != null) {
    const cnpj = !c[2]
      ? c[1]
      : c[1] +
        "." +
        c[2] +
        (c[3] ? "." + c[3] : "") +
        (c[4] ? "/" + c[4] : "") +
        (c[5] ? "-" + c[5] : "");

    return { value: c[0], cnpj };
  }
  return { value: value, cnpj: value };
};

export default formatCNPJ;
