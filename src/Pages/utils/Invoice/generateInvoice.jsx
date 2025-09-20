import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function generateInvoice(order) {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("My Store", 14, 20);
  doc.setFontSize(12);
  doc.text("Invoice", 150, 20);

  doc.setFontSize(10);
  doc.text(`Order ID: ${order.id}`, 14, 40);
  doc.text(`Customer: ${order.customer}`, 14, 46);
  doc.text(`Date: ${order.date}`, 14, 52);
  doc.text(`Status: ${order.status}`, 14, 58);

  const productsTable = order.products.map((p) => [
    p.name,
    p.quantity || 1,
    `$${p.price || 0}`,
    `$${(p.price || 0) * (p.quantity || 1)}`,
  ]);


  autoTable(doc, {
    startY: 70,
    head: [["Product", "Qty", "Price", "Total"]],
    body: productsTable,
  });

  let finalY = doc.lastAutoTable.finalY + 10;
  doc.setFontSize(12);
  doc.text(`Grand Total: $${order.total}`, 14, finalY);

  doc.setFontSize(9);
  doc.text("Thank you for your purchase!", 14, finalY + 20);

  doc.save(`invoice-${order.id}.pdf`);
}

 
