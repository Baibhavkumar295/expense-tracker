const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const expenseName = document.querySelector(
        'input[type="text"]'
    ).value;

    const amount = document.querySelector(
        'input[type="number"]'
    ).value;

    const category = document.querySelector("select").value;

    if (expenseName === "" || amount === "") {
        alert("Please enter all details.");
        return;
    }

    alert(
        "Expense Added!\n\n" +
        "Name: " + expenseName +
        "\nAmount: ₹" + amount +
        "\nCategory: " + category
    );

    form.reset();
});
