import { assert } from "chai"; 

describe('should run tests', ()=>{
    it('should pass a test', ()=> {
        assert.equal(1,1);
    });
    it('should fail a test', ()=> {
        assert.equal(1,2);
    });
});