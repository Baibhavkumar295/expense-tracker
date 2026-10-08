const form = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function displayExpenses() {
    expenseList.innerHTML = "";

    let total = 0;

    expenses.forEach(function(expense, index) {
        total += Number(expense.amount);

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${expense.name}</td>
            <td>₹${expense.amount}</td>
            <td>${expense.category}</td>
            <td>
                <button class="delete-btn" onclick="deleteExpense(${index})">
                    Delete
                </button>
            </td>
        `;

        expenseList.appendChild(row);
    });

    totalAmount.textContent = total;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("expenseName").value;
    const amount = document.getElementById("expenseAmount").value;
    const category = document.getElementById("expenseCategory").value;

    const expense = {
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    form.reset();

    displayExpenses();
});

function deleteExpense(index) {
    expenses.splice(index, 1);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses();
}

displayExpenses();
