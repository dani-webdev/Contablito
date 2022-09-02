const subtotal = document.getElementById("subtotal");
const descipcion = document.getElementById("Descipcion");
const compra = document.getElementById("Compra");
const venta = document.getElementById("Venta");
const basico = document.getElementById("Basico");
const minimo = document.getElementById("Minimo");
const exento = document.getElementById("Exento");
const totalVentas = document.getElementById("total-ventas");
const totalCompras = document.getElementById("total-compras");
const table = document.getElementById("table");
const boton = document.getElementById("ingBtn");

let totalVenta = 0;
let totalCompra = 0;

boton.addEventListener("click", () => {
  let descipcionValue = descipcion.value;
  let subtotalValue = subtotal.value;

  let tipotransaccion = "";

  let ivaValue = 0;
  let ivaBasicoValue = subtotalValue * basico.value;
  let ivaMinimoValue = subtotalValue * minimo.value;

  if (
    descipcionValue &&
    subtotalValue &&
    (compra.checked || venta.checked) &&
    (basico.checked || minimo.checked || exento.checked)
  ) {
    if (compra.checked) {
      tipotransaccion = "Compra";
      totalCompra += parseInt(subtotalValue);
    } else {
      tipotransaccion = "Venta";
      totalVenta += parseInt(subtotalValue);
    }

    if (basico.checked) {
      ivaValue = ivaBasicoValue;
    } else if (minimo.checked) {
      ivaValue = ivaMinimoValue;
    } else {
      ivaValue = exento.value;
    }

    let totalIva = parseInt(subtotalValue) + parseInt(ivaValue);

    table.innerHTML += `<tr><td>${descipcionValue}</td><td>${tipotransaccion}</td><td>${subtotalValue}</td><td>${ivaValue}</td><td>${totalIva}</td></tr>`;
  }

  totalVentas.innerHTML = `$${totalVenta}`;
  totalCompra.innerHTML = `$${totalCompra}`;
});
