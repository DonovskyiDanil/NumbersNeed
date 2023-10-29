function findExpression(target, current = 1, expression = "1") {
    if (current === target) {
        document.getElementById("result").textContent = expression;
        return;
    }
    let coefficient = prompt("Введите коэффициент умножения (например, 3) или значения сложения (например, 1):");

    if (coefficient === null) {
        return; // Обработка отмены
    }
    
    // Проверка, что введенное значение является допустимым числом
    if (!/^\d+(\.\d+)?$/.test(coefficient)) {
        alert("Неверный коэффициент. Введите положительное числовое значение.");
        return;
    }
    
    coefficient = parseFloat(coefficient);
    
    if (coefficient <= 0) {
        alert("Неверный коэффициент. Введите положительное числовое значение.");
        return;
    }
    
    if (current * coefficient <= target) {
        findExpression(target, current * coefficient, `(${expression} * ${coefficient})`);
    } else if (current + coefficient <= target) {
        findExpression(target, current + coefficient, `(${expression} + ${coefficient})`);
    } else {
        alert("Для данной цели не найдено допустимого выражения.");
    }
}

function startCalculation() {
    const targetInput = document.getElementById("targetNumber");
    const targetNumber = parseInt(targetInput.value);

    if (isNaN(targetNumber) || targetNumber <= 0) {
        document.getElementById("result").textContent = "Введите допустимое положительное число.";
    } else {
        findExpression(targetNumber);
    }
}
