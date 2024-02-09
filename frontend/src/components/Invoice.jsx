// import { useLocation } from "react-router";
import '../css/invoice.css'

export const Invoice = () => {

    const handlePrint = () => {
      window.print(); // เรียกใช้ฟังก์ชั่นปริ้น
    }

  //   const location = useLocation();
  // const { cart } = location.state;
  
  return (
    <>
      <div className="container invoice-table">
        <h1 className="text-center bg-dark text-light">INVOICE</h1>
        <address contentEditable className='text-address'>
          <p>Jonathan Neal</p>
          <p>
            101 E. Chapman Ave
            <br />
            Orange, CA 92866
          </p>
          <p>(800) 555-1234</p>
        </address>
      
        <article >
          <div className="d-flex justify-content-between">
          <address contentEditable className='text-compony'>
            <p>
            Health plus Compony
              <br />
              Thailand ,co.ltd.
            </p>
          </address>
          <table className="meta">
            <tbody>
              <tr>
                <th>
                  <span contentEditable>Invoice #</span>
                </th>
                <td>
                  <span contentEditable>101138</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span contentEditable>Date</span>
                </th>
                <td>
                  <span contentEditable>January 1, 2024</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span contentEditable>Amount Due</span>
                </th>
                <td>
                  <span id="prefix" contentEditable>
                    ฿
                  </span>
                  <span>600.00</span>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
          <table className="inventory mt-5">
            <thead>
              <tr>
                <th>
                  <span contentEditable>Item</span>
                </th>
                <th>
                  <span contentEditable>Description</span>
                </th>
                <th>
                  <span contentEditable>Rate</span>
                </th>
                <th>
                  <span contentEditable>Quantity</span>
                </th>
                <th>
                  <span contentEditable>Price</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  
                  <span contentEditable>ยาแก้ไอ</span>
                </td>
                <td>
                  <span contentEditable>Experience Review</span>
                </td>
                <td>
                  <span data-prefix>฿</span>
                  <span contentEditable>150.00</span>
                </td>
                <td>
                  <span contentEditable>4</span>
                </td>
                <td>
                  <span data-prefix>฿</span>
                  <span>600.00</span>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="balance">
            <tbody>
              <tr>
                <th>
                  <span contentEditable>Total</span>
                </th>
                <td>
                  <span data-prefix>฿</span>
                  <span>600.00</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span contentEditable>Amount Paid</span>
                </th>
                <td>
                  <span data-prefix>฿</span>
                  <span contentEditable>0.00</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span contentEditable>Balance Due</span>
                </th>
                <td>
                  <span data-prefix>฿</span>
                  <span>600.00</span>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        <aside>
          <h1>
            <span contentEditable>ยอดรวมสุทธิ</span>
          </h1>
          <div contentEditable>
            <p style={{fontWeight:'600'}}>
              ยอดรวม Vat 7 %
            </p>
          </div>
        </aside>
        {/* ... (โค้ดที่มีอยู่ใน Invoice component) ... */}
      <button className='btn btn-secondary w-100 mt-5' onClick={handlePrint}>
        Print Invoice
      </button>
      </div>
    </>
  );
};
