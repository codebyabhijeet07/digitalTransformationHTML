 class MaterialTable {
            constructor(container, data) {
                this.container = container;
                this.data = data;
                this.filteredData = [...data];
                this.currentPage = 1;
                this.rowsPerPage = parseInt(container.querySelector('.rowsPerPageSelect').value);
                this.tableBody = container.querySelector('tbody');
                this.filterInput = container.querySelector('.table-filter');
                this.pagination = container.querySelector('.pagination');
                this.entriesInfo = container.querySelector('.entries-info');
                this.rowsSelect = container.querySelector('.rowsPerPageSelect');

                // Events
                this.filterInput.addEventListener('input', () => this.filterTable());
                this.rowsSelect.addEventListener('change', () => this.changeRowsPerPage());

                this.renderTable();
            }

            renderTable() {
                this.tableBody.innerHTML = "";
                const start = (this.currentPage - 1) * this.rowsPerPage;
                const end = Math.min(start + this.rowsPerPage, this.filteredData.length);
                const pageData = this.filteredData.slice(start, end);

                pageData.forEach(item => {
                    const tr = document.createElement("tr");
                    tr.innerHTML = Object.values(item).map(v => `<td>${v}</td>`).join("");
                    this.tableBody.appendChild(tr);
                });

                this.renderPagination();
                this.updateEntriesInfo(start + 1, end, this.filteredData.length);
            }

            renderPagination() {
                this.pagination.innerHTML = "";
                const totalPages = Math.ceil(this.filteredData.length / this.rowsPerPage);
                for (let i = 1; i <= totalPages; i++) {
                    const btn = document.createElement('button');
                    btn.innerText = i;
                    if (i === this.currentPage) btn.classList.add('active');
                    btn.addEventListener('click', () => {
                        this.currentPage = i;
                        this.renderTable();
                    });
                    this.pagination.appendChild(btn);
                }
            }

            updateEntriesInfo(start, end, total) {
                if (total === 0) this.entriesInfo.innerText = "Showing 0 to 0 of 0 entries";
                else this.entriesInfo.innerText = `Showing ${start} to ${end} of ${total} entries`;
            }

            filterTable() {
                const filter = this.filterInput.value.toLowerCase();
                this.filteredData = this.data.filter(item => {
                    return Object.values(item).some(val => val.toString().toLowerCase().includes(filter));
                });
                this.currentPage = 1;
                this.renderTable();
            }

            changeRowsPerPage() {
                this.rowsPerPage = parseInt(this.rowsSelect.value);
                this.currentPage = 1;
                this.renderTable();
            }
        }

       
      