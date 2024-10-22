function Person(firstName, weight, height) {
    this.firstName = firstName;
    this.weight = weight;
    this.height = height;

    this.calculateBMI = function() {
        if (!this.weight || !this.height || this.weight <= 0 || this.height <= 0) {
            return null;
        }
        return this.weight / (this.height * this.height);
    };

    this.getBMICategory = function(bmi) {
        if (bmi < 16.0) {
            return "Severely Underweight";
        } else if (bmi >= 16.0 && bmi < 18.5) {
            return "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return "Normal";
        } else if (bmi >= 25.0 && bmi < 29.9) {
            return "Overweight";
        } else if (bmi >= 30.0 && bmi < 34.9) {
            return "Moderately Obese";
        } else if (bmi >= 35.0 && bmi < 39.9) {
            return "Severely Obese";
        } else {
            return "Morbidly Obese";
        }
    };
}

function hitung() {
    let firstName = document.getElementById("firstName").value;
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let hasil = document.getElementById("hasil");

    let person = new Person(firstName, weight, height);

    if (!firstName) {
        hasil.innerText = "Silakan masukkan nama depan.";
    } else if (!weight || !height || weight <= 0 || height <= 0) {
        hasil.innerText = "Berat dan tinggi harus lebih besar dari nol.";
    } else {
        let bmi = person.calculateBMI();
        if (bmi !== null) {
            let kategori = person.getBMICategory(bmi);
            hasil.innerText = `${person.firstName}, BMI Anda: ${bmi.toFixed(2)} (${kategori})`;
        } else {
            hasil.innerText = "Data tidak valid. Silakan masukkan berat dan tinggi badan dengan benar.";
        }
    }
}