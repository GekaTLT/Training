class Electro {
    constructor (apartments) {
        this.apartments = apartments;
        this.dayElectricity = 0;
        this.nightElectricity = 0;
        this.linePower = 0;
        this.linePrice = 0;
    }

    setStation(num){
        console.log(num);
        if ( num < 101 && num > 0){
            this.dayElectricity += num;
            this.nightElectricity += num;
        } else {

            console.log('вырабатывают мощность от 1 до 100 мегаватт');
        }
    }

    deleteStation(num){
        if ( num < 101 && num > 0){
            this.dayElectricity -= num;
            this.nightElectricity -= num;
        } else {
            console.log('вырабатывают мощность от 1 до 100 мегаватт');
        }
    }

    setSolarPanels(num){
        if ( num < 6 && num > 0){
            this.dayElectricity += num;
        }else {
            console.log('вырабатывают мощность от 1 до 5 мегаватт');
        }
    }

    deleteSolarPanels(num){
        if ( num < 6 && num > 0){
            this.dayElectricity -= num;
        }else {
            console.log('вырабатывают мощность от 1 до 5 мегаватт');
        }
    }

    setLine(power, price){
        if (isNaN(power) && isNaN(price)) {
            console.log('не верное значение');
        }else {
            this.linePower += power;
            this.linePrice += price;
        }
    }

    deleteLine(power, price){
        if (isNaN(power) && isNaN(price)) {
            console.log('не верное значение');
        }else {
            this.linePower -= power;
            this.linePrice -= price;
        }
    }

    getStatus(){
        let dayPower = this.dayElectricity - ((this.apartments*4)/1000);
        let nightPower = this.nightElectricity - ((this.apartments*1)/1000);
        if (Math.abs(dayPower) > this.linePower){
            dayPower = this.linePower * Math.sign(dayPower)
        }
        if (Math.abs(nightPower) > this.linePower){
            nightPower = this.linePower * Math.sign(nightPower)
        }
        let dayPrice = dayPower * this.linePrice;
        let nightPrice = nightPower * this.linePrice;;
        return `<p>${dayPower >= 0 ?'необходимо продать ': 'необходимо закупить '} ${dayPower} днем для обеспечения баланса и это ${dayPower >= 0 ?'принесет прибыли ': 'будет стоить '}${dayPrice} </p>
        <p>${nightPower >= 0 ?'необходимо продать': 'необходимо закупить ' }${Math.abs(nightPower)} ночью для обеспечения баланса и это ${nightPower >= 0 ?'принесет прибыли ': 'будет стоить '}${Math.abs(nightPrice)}</p>`
    }

}

const e = new Electro(350);

/*e.setStation(50);*/
e.setSolarPanels(5);
e.setSolarPanels(2);

e.setLine(100,12);

document.getElementsByTagName('body')[0].innerHTML = e.getStatus();