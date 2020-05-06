import { _method } from "./test01";

test('Tittle - cmp string ', function () {
    var expected = "vicboma1";
    var result = _method(1);
    expect(result).toBe(expected);
});
