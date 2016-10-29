'use strict';

var Diner = function(name, dishes) {
    this.name = name;       // String.
    this.dishes = dishes;   // Object {name: price, name: price}

    this.subtotal = function() {
        var total = 0;

        for (var item in this.dishes) {
            total += this.dishes[item];
        }

        return total;
    }

    this.tax = function() {
        var total = this.subtotal();
        return total * 0.08;
    }

    this.tip = function() {
        var total = this.subtotal();
        return total * 0.15;
    }
};

var Bill = function(diners) {
    this.diners = diners;        // Array [Diner, Diner]

    this.grandTotal = function() {
        var total = 0;

        this.diners.forEach(function(diner) {
            total += diner.subtotal();
            total += diner.tax();
        });

        return total;
    }

    this.tips = function() {
        var total = 0;

        this.diners.forEach(function(diner) {
            total += diner.tip();
        });

        return total;
    }

    this.getBill = function() {
        this.diners.forEach(function(diner) {
            console.log(diner.name + '\'s Bill \n');

            for (var item in diner.dishes) {
                console.log(item + ' : $' + diner.dishes[item]);
            }

            console.log('Subtotal: $' + diner.subtotal());
            console.log('Tax: $' + diner.tax());
            console.log('Tip: $' + diner.tip());
            console.log('------------------------------');
        });

        console.log('Grand total: $' + this.grandTotal().toFixed(2));
        console.log('Total tips: $' + this.tips().toFixed(2));
    }
};

var john = new Diner(
        'John',
        {
            Lobster: 30,
            Beer: 3
        }
    ),
    tim = new Diner(
        'Tim',
        {
            Steak: 25,
            'Iced Tea': 3
        }
    ),
    stacy = new Diner(
        'Stacy',
        {
            Reuben: 12.5,
            'Vodka Tonic': 4
        }
    );

var diners = [john, tim, stacy];

var dinner = new Bill(diners);

dinner.getBill();
