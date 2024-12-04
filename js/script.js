const customers = [
    { name: "Jane Cooper", company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "Active" },
    { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "Inactive" },
    { name: "Ronald Richards", company: "Adobe", phone: "(302) 555-0107", email: "ronald@adobe.com", country: "Israel", status: "Inactive" },
    { name: "Marvin McKinney", company: "Tesla", phone: "(252) 555-0126", email: "marvin@tesla.com", country: "Iran", status: "Active" },
    { name: "Jerome Bell", company: "Google", phone: "(629) 555-0129", email: "jerome@google.com", country: "Réunion", status: "Active" },
    { name: "Kathryn Murphy", company: "Microsoft", phone: "(406) 555-0120", email: "kathryn@microsoft.com", country: "Curaçao", status: "Active" },
    { name: "Jacob Jones", company: "Yahoo", phone: "(208) 555-0112", email: "jacob@yahoo.com", country: "Brazil", status: "Active" },
    { name: "Kristin Watson", company: "Facebook", phone: "(704) 555-0127", email: "kristin@facebook.com", country: "Åland Islands", status: "Inactive" },
  ];
  
  const rowsPerPage = 8;
  let currentPage = 1;
  
  function renderTable() {
    const tableBody = document.querySelector(".table__body");
    tableBody.innerHTML = "";
  
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageCustomers = customers.slice(start, end);
  
    pageCustomers.forEach(customer => {
      const row = `
        <tr class="table__row">
          <td class="table__cell">${customer.name}</td>
          <td class="table__cell">${customer.company}</td>
          <td class="table__cell">${customer.phone}</td>
          <td class="table__cell">${customer.email}</td>
          <td class="table__cell">${customer.country}</td>
          <td class="table__cell table__cell--status table__cell--${customer.status.toLowerCase()}"><span>${customer.status}</span></td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    animatePage();
    renderTable();

    document.querySelector('.dashboard__open-nav').addEventListener('click', () => {
      const pageHtml = document.querySelector('html');
      
      !pageHtml.classList.contains('nav-opened') ?
      pageHtml.classList.add('nav-opened')
      : pageHtml.classList.remove('nav-opened');
    })
  });