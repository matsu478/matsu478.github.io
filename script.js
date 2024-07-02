function calculateSplit() {
    const totalAmount = parseFloat(document.getElementById('total-amount').value);
    const numberOfPeople = parseInt(document.getElementById('number-of-people').value);
    if (!isNaN(totalAmount) && !isNaN(numberOfPeople) && numberOfPeople > 0) {
        const splitAmount = (totalAmount / numberOfPeople).toFixed(2);
        document.getElementById('result').innerText = `一人当たりの金額は: ¥${splitAmount}`;
    } else {
        document.getElementById('result').innerText = '有効な数値を入力してください';
    }
}
