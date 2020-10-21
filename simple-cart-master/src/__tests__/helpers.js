/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const {
    incrementQty,
    decrementQty,
    hitungSubtotal,
    absoluteQty,
    hitungDiskon,
    grandTotal
} = require('../helpers.js')

test('Jika Qty 1 jika ditambah 1 hasilnya 2', () => {
    expect(incrementQty(1)).toBe(2);
});

test('Qty 2 jika dikurangi 1 hasilnya 1', () => {
    expect(decrementQty(2)).toBe(1);
});

test('Subtotal dari 30000 dn qty 3 adalah 90000', () => {
    expect(hitungSubtotal(30000, 3)).toBe(90000);
});

test('Diskon kode KODE25 dari barang berharga 50k dan qty 2 (total 100k) adalah 25000', () => {
    expect(hitungDiskon(50000, 2, "KODE25")).toBe(25000);
});

test('Grandtotal dari barang dengan harga 50000 qty 2 diskon KODE25 adalah 75000', () => {
    expect(grandTotal(50000, 2, "KODE25")).toBe(75000);
});